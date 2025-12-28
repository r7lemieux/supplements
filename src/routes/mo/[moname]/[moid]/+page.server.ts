import type {Actions} from './$types'
import {ErrorName, getMoMeta, Rezult} from 'svelte-mos'
import {error, redirect, type RequestEvent} from '@sveltejs/kit'
import {
  processRequestCreate,
  processRequestDelete,
  processRequestPatch,
  processRequestReplace,
  processRequestRetrieve,
  processRequestUpsert
} from '$lib/services/mo/requestHandler.ts'

export async function load({params}: any) {
  const moname = params.moname
  const moMeta = getMoMeta(moname)
  const id = params.moid
  const mo = await moMeta?.dataSource.getMo(id)

  if (!mo) {
    const rezult = new Rezult(ErrorName.db_notFound, {moname: params.moname, id: params.moid})
    const message = rezult.toDetailString()
    throw error(404, message)
  }
  return {mo, moname}
}

export const actions: Actions = {
  retrieve: async (event: RequestEvent) => {
    return await processRequestRetrieve(event.params, event.request)
  },
  create: async (event: RequestEvent) => {
    return await processRequestCreate(event.params, event.request)
    //throw redirect(303, `/${event.params.moname}/${event.params.moid');
  },
  replace: async (event: RequestEvent) => {
    return await processRequestReplace(event.params, event.request)
  },
  patch: async (event: RequestEvent) => {
    return await processRequestPatch(event.params, event.request)
  },
  upsert: async (event: RequestEvent) => {
    return await processRequestUpsert(event.params, event.request)
  },
  delete: async (event: RequestEvent) => {
    await processRequestDelete(event.params)
    throw redirect(303, `/mo/${event.params.moname}`);
  }
} satisfies Actions