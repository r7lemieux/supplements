import { dev } from '$app/environment'
import {ErrorName, getMoMeta, type MoInterface, Rezult} from 'svelte-mos'
import { error } from '@sveltejs/kit'
import { registerMoMetas } from '../../../../../lib/services/mo/moManagement'

export const csr = true
export const prerender = false
export const ssr = true

/** @type {import('./$types').PageLoad} */
export async function load({params, data}: any) {
  // registerMos()
  const moname = params.moname
  const moMeta = getMoMeta(moname)
  const id = params.moid
  const mo = data.mo // moMeta?.dataSource.getMo(id)

  if (!mo) {
    const rezult = new Rezult(ErrorName.db_notFound, {moname: params.moname, id: params.moid})
    const message = rezult.toDetailString()
    const err = error(404, message)
    throw err
  }
  return {mo, moname}
}
