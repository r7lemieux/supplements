import type {Moid} from 'svelte-mos'
import {Mo, MoDefinition, type MoidInterface, MoMeta, type MoMetaInterface} from 'svelte-mos'

export class Indication extends Mo {
  name: string = ''
  category?:  MoidInterface
  indicationSupplements: MoidInterface[] = []

  constructor() {
    super(Indication.moMeta)
  }

  init = () => {
    this.displayName = this.displayName || this.name
    return this
  }

  // hydrate = (props: Partial<Mo>) => {
  //   Object.assign(this, props)
  //   this.displayName = this.displayName || this.name
  //   return this
  // }

  getId: () => number = () => this.id as number
  setId = (id: number) => this.id = id

  static moMeta: MoMetaInterface = new MoMeta(MoDefinition.fromProps({
      hasId: false,
      name: 'indications',
      gridFieldnames: ['name', 'category']
    })
  ).setName()
  static {
    Indication.moMeta.moDef.addMoFieldDefFromName('category')
    Indication.moMeta.moDef.addMoArrayFieldDefFromName('indicationSupplements')

    const moDef = Indication.moMeta.moDef
    moDef.moClass = Indication
    moDef.createFieldDefs()
  }
}
