import {Mo, MoDefinition, type MoidInterface, MoMeta, type MoMetaInterface} from 'svelte-mos'
import {Supplement} from './Supplement.js'

export class ConditionCategory extends Mo {
  name: string = ''
  conditions: MoidInterface[] = []

  constructor() {
    super(ConditionCategory.moMeta)
  }
  init = () => {
    this.displayName = this.displayName || this.name
    return this
  }
  // hydrate = (props: Partial<Supplement>) => {
  //   Object.assign(this, props)
  //   this.displayName = this.displayName || this.name
  //   return this
  // }

  getId: () => number = () => this.id as number
  setId = (id: number) => this.id = id

  static moMeta: MoMetaInterface = new MoMeta(MoDefinition.fromProps({
      hasId: false,
      name: 'conditionCategories',
      gridFieldnames: ['name'],
    })
  ).setName()
  static {
    const moDef = ConditionCategory.moMeta.moDef
    moDef.moClass = ConditionCategory
    // moDef.fieldDefs.set('conditions', buildFieldDef('moArray'))
    moDef.createFieldDefs()
  }
}
