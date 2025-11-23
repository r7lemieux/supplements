import {Mo, MoDefinition, type MoidInterface, MoMeta, type MoMetaInterface} from 'svelte-mos'

export class Supplement extends Mo {
  name: string = ''
  conditions: MoidInterface[] = []

  constructor() {
    super(Supplement.moMeta)
  }

  hydrate = (props: Partial<Supplement>) => {
    Object.assign(this, props)
    this.displayName = this.displayName || this.name
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
    moDef.createFieldDefs()
  }

}
