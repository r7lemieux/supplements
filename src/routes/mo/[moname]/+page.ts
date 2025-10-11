import {getMoMeta} from 'svelte-mos'
import {registerMos} from '../../../lib/services/mo/moManagement.js'
import type {PageLoad} from './$types'
import {type MoInterface} from 'svelte-mos'
import {Rezult, ErrorName} from  'svelte-mos'
import { error } from '@sveltejs/kit';

export const csr = true
export const prerender = false
export const ssr = true

/** @type {import('./$types').PageLoad} */
export const load: PageLoad = ({params}: any) => {
  registerMos()
  const moname = params.moname
  try {
    const moMeta = getMoMeta(moname)
    return moMeta.dataSource.getMos()
      .then((mos: MoInterface) => {
        return {moMeta, mos, moname}
      })
  } catch (ex: any) {
    if (ex.name === ErrorName.resource_not_found) {
      throw error(404, `Not such thing : ${moname}`);
    } else {
      throw error(500, 'Internal Server Error');
    }
  }


}