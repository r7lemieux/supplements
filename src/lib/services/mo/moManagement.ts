import { moMetaMoMeta, moDefMoMeta } from 'svelte-mos'
import { registerMoMeta, registerMoDef } from 'svelte-mos'
import { gdriveFilesMoDef } from '../../models/gdrive/gdriveFilesMoDef.js'
import {Contact} from '../../models/Contact'
import {ConditionCategory} from '../../models/ConditionCategory'
import {Condition} from '../../models/Condition'
import {Supplement} from '../../models/Supplement'

let mosRegistered = false
export const registerMoMetas = () => {
  if (!mosRegistered) {
    mosRegistered = true
    registerMoMeta(Contact.moMeta)
    registerMoMeta(ConditionCategory.moMeta)
    registerMoMeta(Condition.moMeta)
    registerMoMeta(Supplement.moMeta)
    registerMoMeta(moMetaMoMeta)
    registerMoMeta(moDefMoMeta)

    registerMoDef(Contact.moMeta.moDef)
    registerMoDef(moMetaMoMeta.moDef)
    registerMoDef(moDefMoMeta.moDef)
  }
}
