import {getMoMeta} from 'svelte-mos'
import {type MoInterface} from 'svelte-mos'

export const csr = true;
export const prerender = false;
export const ssr = true;

/** @type {import('./$types').PageLoad} */
export const load = async ({params}: any) => {
  const moMeta = getMoMeta(params.moname)
  const id = params.moid
  const fname = params.fname

  return moMeta?.dataSource.getMo(id)
    .then((mo: MoInterface) => {
      return { moMeta, mo, fname }
  })
}