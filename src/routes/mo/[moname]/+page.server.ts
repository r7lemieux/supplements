import type {Actions} from './$types'
import {getMoMeta, Rezult, ErrorName} from 'svelte-mos'
import {error} from '@sveltejs/kit'

export async function load({params}: any) {
  const moname = params.moname
  try {
    const moMeta = getMoMeta(moname)
    const mos = await moMeta?.dataSource.getMos()
    console.log(`==>+page.server.ts:10 mos[0]`, !!mos[0], !!mos[0]?.moMeta)
    return {moname, mos}
  } catch (ex: any) {
    if (ex.name === ErrorName.resource_not_found) {
      throw error(404, `Not such thing : ${moname}`)
    } else {
      throw error(500, 'Internal Server Error')
    }
  }
}

export const actions = {
  default: async (event) => {
    console.log(`==>+page.server.ts:5 event moname`, event)
  }
} satisfies Actions
