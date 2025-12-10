import type {Moid} from 'svelte-mos'
import {Mo, MoDefinition, type MoidInterface, MoMeta, type MoMetaInterface} from 'svelte-mos'
import { OutcomeDirection, type OutcomeDirectionEnum } from './enums.ts'

export class IndicationSupplementStudy extends Mo {
  // indication: MoidInterface
  // supplement: MoidInterface
  indicationSupplement: MoidInterface
  study: MoidInterface
  doses: MoidInterface[] = []
  outcomeDirection: OutcomeDirectionEnum = OutcomeDirection.unknown

  constructor(indicationSupplement: Moid, study: Moid) {
    super(IndicationSupplementStudy.moMeta)
    // this.indication = indication
    // this.supplement = supplement
    this.indicationSupplement = indicationSupplement
    this.study = study
  }
  init = () => {
    this.displayName = this.displayName || `${this.indicationSupplement.getDisplayName()}-${this.study.getDisplayName()}`
    return this
  }
  // hydrate = (props: Partial<Mo>) => {
  //   Object.assign(this, props)
  //   this.displayName = this.displayName || `${this.indicationSupplement.getDisplayName()}-${this.study.getDisplayName()}`
  //   return this
  // }

  getId: () => number = () => this.id as number
  setId = (id: number) => this.id = id

  static moMeta: MoMetaInterface = new MoMeta(MoDefinition.fromProps({
      hasId: false,
      name: 'indicationSupplementStudies',
      gridFieldnames: ['indicationSupplement', 'study', 'outcomeDirection', 'sourceEntryType'],
    })
  ).setName()
  static {
    IndicationSupplementStudy.moMeta.moDef.addMoFieldDefFromName('indicationSupplement')
    IndicationSupplementStudy.moMeta.moDef.addMoFieldDefFromName('study', 'studies')
    IndicationSupplementStudy.moMeta.moDef.addMoArrayFieldDefFromName('doses')

    const moDef = IndicationSupplementStudy.moMeta.moDef
    moDef.moClass = IndicationSupplementStudy
    moDef.createFieldDefs()
  }
}
