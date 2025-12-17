import {
  DeleteCascade,
  ErrorDef,
  ErrorName,
  getMoMeta,
  type MoFieldDefinition,
  type MoMetaInterface,
  Rezult
} from 'svelte-mos'
import {json} from '@sveltejs/kit'
import {DeletePermission} from 'svelte-mos'

export const extractRequestParams = async (params: any, idRequired = true): Promise<{
  moMeta: MoMetaInterface,
  id: string | number
}> => {
  const moname = params.moname
  if (!moname) throw new Rezult(ErrorName.missing_param, {paramsName: 'moname'})
  let id = params.moid
  const moMeta = getMoMeta(moname)
  if (!moMeta) throw new Rezult(ErrorName.moMeta_notFound, {moname, id})
  if (idRequired) {
    if (!id) throw new Rezult(ErrorName.missing_id, {moname})
    if (moMeta.moDef.idType === 'number') {
      id = Number.parseInt(id)
    }
  }
  return {moMeta, id}
}

const extractFieldsFromRequest = async (request: Request): Promise<{}> => {
  if (request.headers.get('content-type')?.startsWith('multipart/form-data')) {
    return extractFieldsFromRequestForm(request)
  } else {
    return extractFieldsFromRequestJson(request)
  }
}

const extractFieldsFromRequestJson = async (request: Request): Promise<{}> => {
  const fieldsRaw = await request.json()
  const fieldNames = Object.keys(fieldsRaw).filter(k => k != 'moname' && !k.startsWith('_'))
  const fields: { [k: string]: any } = {}
  fieldNames.forEach(k => fields[k] = fieldsRaw[k])
  return fields
}

const extractFieldsFromRequestForm = async (request: Request): Promise<{}> => {
  const fields: { [k: string]: any } = {}
  const formData = await request.formData()
  formData.forEach((v, k) => {
    if (k != 'moname' && !k.startsWith('_')) {
      fields[k] = v
    }
  })
  return fields
}

export const processRequestRetrieve = async (params: any) => {
  const {moMeta, id} = await extractRequestParams(params)
  return moMeta.dataSource.getMo(id)
    .then(mo => mo.toObj())
}

export const processRequestCreate = async (params: any, request: Request) => {
  const {moMeta} = await extractRequestParams(params, false)
  const fields = await extractFieldsFromRequest(request)
  const newMo = moMeta.moDef.newMo(moMeta)
  newMo.hydrate(fields)
  return moMeta.dataSource.addMo(newMo)
    .then(newMo => {
      console.log(`==>requestHandler.ts:34 newMo`, newMo)
      return newMo.toObj()
    })
}

export const processRequestUpsert = async (params: any, request: Request) => {
  const {moMeta} = await extractRequestParams(params)
  const fields = await extractFieldsFromRequest(request)
  const newMo = moMeta.moDef.newMo(moMeta)
  newMo.hydrate(fields)
  return moMeta.dataSource.saveMo(newMo)
    .then(mo => mo.toObj())
}

export const processRequestReplace = async (params: any, request: Request) => {
  const {moMeta, id} = await extractRequestParams(params)
  const fields = await extractFieldsFromRequest(request)
  const mo = await moMeta.dataSource.getMo(id)
  if (!mo) throw new Rezult(ErrorName.db_notFound, {moname: moMeta.name, id})
  const newMo = moMeta.moDef.newMo(moMeta)
  newMo.hydrate(fields)
  return moMeta.dataSource.saveMo(newMo)
    .then(mo => mo.toObj())
}

export const processRequestPatch = async (params: any, request: Request) => {
  const {moMeta, id} = await extractRequestParams(params)
  const fields = await extractFieldsFromRequest(request)
  const mo = await moMeta.dataSource.getMo(id)
  if (!mo) throw new Rezult(ErrorName.db_notFound, {moname: moMeta.name, id})
  mo.hydrate(fields)
  return moMeta.dataSource.saveMo(mo)
    .then(mo => mo.toObj())
}

export async function processRequestDelete(params: any) {
  const {moMeta, id} = await extractRequestParams(params)
  if (moMeta.moDef.deletePermission === DeletePermission.no) {
    throw new Rezult(ErrorName.instance_delete_not_allowed)
  }

  return moMeta.dataSource.deleteMo(id)
}

export const buildRestRezult = (ex: any, method: string, moname: string | null, id: number | string | null) => {
  if (ex instanceof Error) {
    if (ex instanceof Rezult) {
      return ex
    } else {
      return new Rezult(ErrorName.db_notFound, {moname, id, name: ex.name, message: ex.message}, `${method} request`)
    }
  } else {
    return new Rezult(ErrorName.db_notFound, {moname, id}, `${method} request`)
  }
}

export const handleError = (ex: any, params: any, method: string) => {
  const moname = (params?.moname) ? params.moname : null
  const id = (params?.id) ? params.id : null
  const rezult = buildRestRezult(ex, method, moname, id)
  const status = ErrorDef[ex.name]?.httpCode || 500
  return json(rezult, {status})
}
