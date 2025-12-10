import type {Moid} from 'svelte-mos'
import {Mo, MoDefinition, type MoidInterface, MoMeta, type MoMetaInterface} from 'svelte-mos'

export class Condition extends Mo {
  name: string = ''
  category?:  Moid
  supplements: MoidInterface[] = []

  constructor() {
    super(Condition.moMeta)
  }
  init = () => {
    this.displayName = this.displayName || this.name
    return this
  }
  // hydrate = (props: Partial<Condition>) => {
  //   Object.assign(this, props)
  //   this.displayName = this.displayName || this.name
  //   return this
  // }

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
    moDef.createFieldDefs()
  }
}
