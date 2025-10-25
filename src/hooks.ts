import {getMoMeta, Mo} from 'svelte-mos'
import type {Transport} from '@sveltejs/kit'
import {registerMoMetas} from './lib/services/mo/moManagement.js'

export const transport: Transport = {

  Mo: {
    encode: (value: any) => {
      // if (!appState.initialized) return false
      registerMoMetas()
      if (value instanceof Mo) return encodeMo(value)
      // if (value instanceof Array) {
      //   if (!value.length) return false
      //   if (!value[0] as any instanceof Mo) return false
      //   return value.map(encodeMo)
      // }
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
    const mo = moMeta.objToMoid(obj)
    mo.moMeta = moMeta
    return mo
}

export const appState = {initialized : false}