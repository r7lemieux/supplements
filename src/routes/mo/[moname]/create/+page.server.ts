import type { Actions } from './$types';
import {getMoMeta, MoMeta} from 'svelte-mos'
import {type MoInterface} from 'svelte-mos'
import { redirect } from '@sveltejs/kit';

// export function load({params}: any) {
//   const moname = params.moname;
//   const moMeta = getMoMeta(moname)
//   return {moMeta}
// }

export const actions = {
  default: async (event) => {
    console.log(`==>+page.server.ts:5 action !!!`)
    const moname = event.params.moname
    // console.log(`==>+page.server.ts:5 event`, event)
    // console.log(`==>+page.server.ts:5 url`, event.url)
    // console.log(`==>+page.server.ts:5 typeof url`, typeof url)
    // console.log(`==>+page.server.ts:5 event.params`, event.params)
    // console.log(`==>+page.server.ts:5 action`, action)
    const moMeta: MoMeta = getMoMeta(moname)
    const formData = await event.request.formData()
    const obj: any = {}
    for (const [key, value] of formData.entries()) {
      obj[key] = value
    }
    const mo: MoInterface= moMeta.newMo()
    mo.hydrate(obj as Partial<MoInterface>)
    await moMeta.dataSource.addMo(mo)
    redirect (303, './' + mo.id)
  }
} satisfies Actions;