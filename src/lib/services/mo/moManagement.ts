import { moMetaMoMeta, moDefMoMeta } from 'svelte-mos'
import { registerMoMeta, registerMoDef } from 'svelte-mos'
import { gdriveFilesMoDef } from '../../model/gdrive/gdriveFilesMoDef.js'
import {Contact} from '../../model/Contact'

// import { qqsp1 } from 'svelte-mos'
// import
// {getContactMoMeta} from '$lib/models/common/Contact.js'

let mosRegistered = false
export const registerMos = () => {
  if (!mosRegistered) {
    registerMoMeta(Contact.moMeta)
    registerMoMeta(moMetaMoMeta)
    registerMoMeta(moDefMoMeta)
    registerMoDef(Contact.moMeta.moDef)
    registerMoDef(moMetaMoMeta.moDef)
    registerMoDef(moDefMoMeta.moDef)
    mosRegistered = true
  }
}
let mosDefsRegistered = false
export const registerMoDefs = () => {
  if (!mosDefsRegistered) {
    registerMoDef(gdriveFilesMoDef)
  }
}