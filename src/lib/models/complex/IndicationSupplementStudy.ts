import type {Moid} from 'svelte-mos'
import {Mo, MoDefinition, type MoidInterface, MoMeta, type MoMetaInterface} from 'svelte-mos'
import { OutcomeDirection, type OutcomeDirectionEnum } from './enums.ts'

export class IndicationSupplementStudy extends Mo {
  // indication: MoidInterface
  // supplement: MoidInterface
  indicationSupplement: MoidInterface
  study: MoidInterface
  dose: MoidInterface[] = []
  outcomeDirection: OutcomeDirectionEnum = OutcomeDirection.unknown

  constructor(indicationSupplement: Moid, study: Moid) {
    super(IndicationSupplementStudy.moMeta)
    // this.indication = indication
    // this.supplement = supplement
    this.indicationSupplement = indicationSupplement
    this.study = study
  }

  hydrate = (props: Partial<IndicationSupplementStudy>) => {
    Object.assign(this, props)
    this.displayName = this.displayName || `${this.indicationSupplement.getDisplayName()}-${this.study.getDisplayName()}`
    return this
  }

  getId: () => number = () => this.id as number
  setId = (id: number) => this.id = id

  static moMeta: MoMetaInterface = new MoMeta(MoDefinition.fromProps({
      hasId: false,
      name: 'indicationSupplementStudies',
      gridFieldnames: ['indication', 'supplement', 'study', 'outcomeDirection', 'sourceEntryType'],
    })
  ).setName()
  static {
    const moDef = IndicationSupplementStudy.moMeta.moDef
    moDef.moClass = IndicationSupplementStudy
    moDef.initFieldDefs()
  }
}
