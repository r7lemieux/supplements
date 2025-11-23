import { ErrorName, getMoMeta, Rezult } from 'svelte-mos'
import { error } from '@sveltejs/kit'

export async function GET({ url, params, fetch }) {
  const moname = params.moname
  const moMeta = getMoMeta(moname)
  const id = params.moid
  const mo = await moMeta?.dataSource.getMo(id)

  if (!mo) {
    const rezult = new Rezult(ErrorName.db_notFound, {moname: params.moname, id: params.moid})
    const message = rezult.toDetailString()
    throw error(404, message)
  }
  return new Response(JSON.stringify(mo.toObj()), {
    headers: {'Content-Type': 'application/json'}
  })
}
