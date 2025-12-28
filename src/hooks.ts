import {getMoMeta, initMoTransport, Mo, transp} from 'svelte-mos'
import type {Transport} from '@sveltejs/kit'
import {registerMoMetas} from './lib/services/mo/moManagement.js'
import {browser} from '$app/environment'
initMoTransport()
export const transport: Transport = {

  Mo: {
    encode: (value: any) => {
      // if (!appState.initialized) return false
      registerMoMetas()

      // console.log(`==> hooks.ts:12 value `, typeof value, value instanceof Mo, (typeof value === 'object')?value.constructor.name: '');
      if (value?.moMeta) return encodeMo(value)
      // if (value instanceof Array) {
      //   if (!value.length) return []
      //   if (value[0].moMeta) {
      //     console.log(`==> hooks.ts:18 typeof value `, typeof value, value);
      //     return value.map(encodeMo)
      //   }
      // }
      return false
    },
    decode: (obj: any) => {
      registerMoMetas()
      return decodeMo(obj)
    },
    // default: {
    //   encode: (value: any) => {
    //     return value
    //   },
    //   decode: (obj: any) => {
    //     return obj
    //   }
    // }
  }
}

const encodeMo = (value: any) => {
  const mo: Mo = value as Mo
  const obj: any = mo.moMeta.moDef.moToObj(mo)
  delete obj.moMeta
  obj._moname = mo.moMeta.name
  return obj //JSON.stringify(obj)
}
const decodeMo = (obj: any) => {
    const moname = obj._moname
    const moMeta = getMoMeta(moname)
    const trusted = browser
    const mo = transp.objectToMoidSync(obj, {trusted})
    mo.moMeta = moMeta
    return mo
}

export const appState = {initialized : false}
