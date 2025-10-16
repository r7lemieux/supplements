import type { Actions } from './$types';
import {getMoMeta, Rezult, ErrorName} from 'svelte-mos'
import { error } from '@sveltejs/kit';

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
  default: async (event) => {
    console.log(`==>+page.server.ts:5 event moname/moid`)
  }
} satisfies Actions;
