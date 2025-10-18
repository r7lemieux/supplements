import {MoDefinition, Mo, MoMeta, type MoMetaInterface} from 'svelte-mos'

export class Supplement extends Mo {
  name: string = ''
  conditionIds: number[] = []

  constructor() {
    super(Supplement.moMeta)
  }

  hydrate = (props: Partial<Supplement>) => {
    Object.assign(this, props)
    return this
  }

  getId: () => number = () => this.id as number
  setId = (id: number) => this.id = id

  static moMeta: MoMetaInterface = new MoMeta(MoDefinition.fromProps({
      hasId: false,
      name: 'supplements',
      gridFieldnames: ['name'],
    })
  ).setName()
  static {
    const moDef = Supplement.moMeta.moDef
    moDef.moClass = Supplement
    moDef.initFieldDefs()
  }

}
