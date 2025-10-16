import {getMoMeta} from 'svelte-mos'
import {registerMoMetas} from '../../../lib/services/mo/moManagement.js'
import type {PageLoad} from './$types'
import {type MoInterface} from 'svelte-mos'
import {Rezult, ErrorName} from  'svelte-mos'
import { error } from '@sveltejs/kit';

export const csr = true
export const prerender = false
export const ssr = true

export const load: PageLoad = ({params, data}: any) => {
  const moname = data.moname
  const mos = data.mos
  console.log(`==>+page.ts:15 mos.length`, mos.length + ' ' + !!mos[0] + ' ' + !!mos[0]?.moMeta)
  // const moMeta = getMoMeta(moname)
  // mos.forEach(mo => mo.moMeta = moMeta)
  console.log(`==>+page.ts:13 moname`, moname)
  const moMeta = getMoMeta(moname)
  return {moname, moMeta, mos}
}