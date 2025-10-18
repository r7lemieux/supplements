import {MoDefinition, Mo, MoMeta, type MoMetaInterface} from 'svelte-mos'

export class Condition extends Mo {
  name: string = ''
  categoryId: number = 0
  supplementIds: number[] = []

  constructor() {
    super(Condition.moMeta)
  }

  hydrate = (props: Partial<Condition>) => {
    Object.assign(this, props)
    return this
  }

  getId: () => number = () => this.id as number
  setId = (id: number) => this.id = id

  static moMeta: MoMetaInterface = new MoMeta(MoDefinition.fromProps({
      hasId: false,
      name: 'conditions',
      gridFieldnames: ['name'],
    })
  ).setName()
  static {
    const moDef = Condition.moMeta.moDef
    moDef.moClass = Condition
    moDef.initFieldDefs()
  }
}
