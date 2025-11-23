// import { moMetaMoMeta, moDefMoMeta } from 'svelte-mos'
import { getMoMeta, registerMoMeta } from 'svelte-mos'
// import { gdriveFilesMoDef } from '../../models/gdrive/gdriveFilesMoDef.js'
import {Contact} from '../../models/simple/Contact.ts'
// import {ConditionCategory} from '../../models/simple/ConditionCategory.ts'
import {Condition} from '../../models/simple/Condition.ts'
import {Supplement} from '../../models/complex/Supplement.ts'
import { Dose } from '../../models/complex/Dose.ts'
import { Indication } from '../../models/complex/Indication.ts'
import { IndicationSupplement } from '../../models/complex/IndicationSupplement.ts'
import { IndicationSupplementStudy } from '../../models/complex/IndicationSupplementStudy.ts'
import { Study } from '../../models/complex/Study.ts'
import { Category } from '../../models/complex/Category.ts'

let mosRegistered = false
export const registerMoMetas = () => {
  if (!mosRegistered) {
    mosRegistered = true
    registerMoMeta(Contact.moMeta)
    // registerMoMeta(ConditionCategory.moMeta)
    registerMoMeta(Category.moMeta)
    registerMoMeta(Indication.moMeta)
    registerMoMeta(IndicationSupplement.moMeta)
    registerMoMeta(IndicationSupplementStudy.moMeta)
    registerMoMeta(Supplement.moMeta)
    registerMoMeta(Study.moMeta)
    registerMoMeta(Dose.moMeta)

    // const conditionsMoMeta = getMoMeta('conditions')
    // registerMoMeta(moMetaMoMeta)
    // registerMoMeta(moDefMoMeta)

  //   registerMoDef(Contact.moMeta.moDef)
  //   registerMoDef(moMetaMoMeta.moDef)
  //   registerMoDef(moDefMoMeta.moDef)
  }
}
