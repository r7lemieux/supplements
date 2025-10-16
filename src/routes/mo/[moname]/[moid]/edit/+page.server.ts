import type {Actions} from './$types'
import {getMoMeta, MoMeta, Rezult, ErrorName} from 'svelte-mos'
import {type MoInterface} from 'svelte-mos'
import {registerMoMetas} from '../../../../../lib/services/mo/moManagement'
import {error} from '@sveltejs/kit'
import {fail} from '@sveltejs/kit'
import {redirect} from '@sveltejs/kit'

export async function load({params}: any) {
  const moname = params.moname
  const moMeta = getMoMeta(moname)
  const id = params.moid
  const mo = moMeta?.dataSource.getMo(id)

  if (!mo) {
    const rezult = new Rezult(ErrorName.db_notFound, {moname: params.moname, id: params.moid})
    const message = rezult.toDetailString()
    const err = error(404, message)
    throw err
  }
  return {mo, moname}
}

export const actions = {
  save: async (event) => {
    const id = event.params.moid
    const moname = event.params.moname
    const action = event.url.pathname.split('/').slice(-1)[0]
    // console.log(`==>+page.server.ts:5 event`, event)
    // console.log(`==>+page.server.ts:5 url`, event.url)
    // console.log(`==>+page.server.ts:5 typeof url`, typeof url)
    // console.log(`==>+page.server.ts:5 event.params`, event.params)
    // console.log(`==>+page.server.ts:5 action`, action)
    const formData = await event.request.formData()
    const moMeta: MoMeta = getMoMeta(moname)
    // if (action === 'edit') {
    const oldMo = await moMeta.dataSource.getMo(id)
    if (!oldMo) {
      return fail(400, {message: ErrorName.db_notFound})
    }
    const newMo: MoInterface = moMeta.newMo()
    const obj: any = {}
    for (const [key, value] of formData.entries()) {
      obj[key] = value
    }
    newMo.hydrate(obj as Partial<MoInterface>)
    newMo.id = oldMo!.id
    await moMeta.dataSource.saveMo(newMo)
    // console.log(`==>+page.server.ts:20 oldMo`, oldMo)
    // console.log(`==>+page.server.ts:21 newMo`, newMo)
    redirect(303, '.')
    //return {success: true};
    // } else {
    //   return fail(400, { message: 'wrong action', action });
    // }
  },

  remove: async (event) => {
    const id = event.params.moid
    const moname = event.params.moname
    const action = event.url.pathname.split('/').slice(-1)[0]
    const moMeta: MoMeta = getMoMeta(moname)
    moMeta.dataSource.deleteMo(id)
    redirect(303, '..')
  }
} satisfies Actions

