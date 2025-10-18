import type { Actions } from './$types';
import {type MoMeta, getMoMeta, Rezult, ErrorName} from 'svelte-mos'
import { error } from '@sveltejs/kit';
import {fail} from '@sveltejs/kit'
import {redirect} from '@sveltejs/kit'

export async function load({ params }: any) {
  const moname = params.moname
  const moMeta = getMoMeta(moname)
  const id = params.moid
  const mo = await moMeta?.dataSource.getMo(id)

  if (!mo) {
    const rezult = new Rezult(ErrorName.db_notFound, {moname: params.moname, id: params.moid})
    const message = rezult.toDetailString()
    const err = error(404, message)
    throw err
  }
  return {mo, moname}
}

export const actions = {
  remove: async (event) => {
    const id = event.params.moid
    const moname = event.params.moname
    const action = event.url.pathname.split('/').slice(-1)[0]
    const moMeta: MoMeta = getMoMeta(moname)
    moMeta.dataSource.deleteMo(id)
    redirect(303, '..')
  }
} satisfies Actions;
