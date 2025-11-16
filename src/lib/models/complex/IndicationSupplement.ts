import type {Moid} from 'svelte-mos'
import {Mo, MoDefinition, type MoidInterface, MoMeta, type MoMetaInterface} from 'svelte-mos'
import { EvidenceTier, type EvidenceTierEnum, SourceType, type SourceTypeEnum } from './enums.ts'

export class IndicationSupplement extends Mo {
  indication: MoidInterface
  supplement: MoidInterface
  evidenceTier: EvidenceTierEnum = EvidenceTier.unknown
  sourceEntryType: SourceTypeEnum = SourceType.manual
  indicationSupplementStudies: MoidInterface[] = []

  constructor(indication: Moid, supplement: Moid) {
    super(IndicationSupplement.moMeta)
    this.indication = indication
    this.supplement = supplement
  }

  hydrate = (props: Partial<IndicationSupplement>) => {
    Object.assign(this, props)
    this.displayName = this.displayName || `${this.indication.displayName}-${this.supplement.displayName}`
    return this
  }

  getId: () => number = () => this.id as number
  setId = (id: number) => this.id = id

  static moMeta: MoMetaInterface = new MoMeta(MoDefinition.fromProps({
      hasId: false,
      name: 'indicationSupplements',
      gridFieldnames: ['indication', 'supplement', 'evidenceTier', 'sourceEntryType'],
    })
  ).setName()
  static {
    const moDef = IndicationSupplement.moMeta.moDef
    moDef.moClass = IndicationSupplement
    moDef.initFieldDefs()
  }
}
