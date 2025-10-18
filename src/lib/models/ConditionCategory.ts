import {MoDefinition, Mo, MoMeta, type MoMetaInterface} from 'svelte-mos'
import {Supplement} from './Supplement.js'
export class ConditionCategory extends Mo {
  name: string = ''
  conditionIds: number[] = []

  constructor() {
    super(ConditionCategory.moMeta)
  }

  hydrate = (props: Partial<Supplement>) => {
    Object.assign(this, props)
    return this
  }

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
    moDef.initFieldDefs()
  }
}
