import { moMetaMoMeta, moDefMoMeta } from 'svelte-mos'
import { registerMoMeta, registerMoDef } from 'svelte-mos'
import { gdriveFilesMoDef } from '../../models/gdrive/gdriveFilesMoDef.js'
import {Contact} from '../../models/Contact'

let mosRegistered = false
export const registerMoMetas = () => {
  if (!mosRegistered) {
    mosRegistered = true
    registerMoMeta(Contact.moMeta)
    registerMoMeta(moMetaMoMeta)
    registerMoMeta(moDefMoMeta)
    registerMoDef(Contact.moMeta.moDef)
    registerMoDef(moMetaMoMeta.moDef)
    registerMoDef(moDefMoMeta.moDef)
  }
}
