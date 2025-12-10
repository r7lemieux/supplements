import { CommonFieldDefs, MoFieldDefinition, type Moid } from 'svelte-mos'
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

  init = () => {
    this.displayName = this.displayName || `${this.indication.displayName}-${this.supplement.displayName}`
    return this
  }
  // hydrate = (props: Partial<Mo>) => {
  //   Object.assign(this, props)
  //   this.displayName = this.displayName || `${this.indication.displayName}-${this.supplement.displayName}`
  //   return this
  // }

  getId: () => number = () => this.id as number
  setId = (id: number) => this.id = id

  static moMeta: MoMetaInterface = new MoMeta(MoDefinition.fromProps({
      hasId: false,
      name: 'indicationSupplements',
      gridFieldnames: ['indication', 'supplement', 'evidenceTier', 'sourceEntryType'],
      aa1: true
    })
  ).setName()
  static {
    // const indicationFieldDef = CommonFieldDefs.mo.clone() as MoFieldDefinition
    // indicationFieldDef.moName = 'indications'
    // indicationFieldDef.name = 'indication'
    // IndicationSupplement.moMeta.moDef.fieldDefs.set('indication', indicationFieldDef)
    IndicationSupplement.moMeta.moDef.addMoFieldDefFromName('indication')
    IndicationSupplement.moMeta.moDef.addMoFieldDefFromName('supplement')
    IndicationSupplement.moMeta.moDef.addMoArrayFieldDefFromName('indicationSupplementStudies')
    const moDef = IndicationSupplement.moMeta.moDef
    moDef.moClass = IndicationSupplement
    moDef.createFieldDefs()
  }
}
