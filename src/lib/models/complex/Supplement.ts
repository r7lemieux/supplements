import {
  CommonFieldDefs,
  Mo,
  MoDefinition,
  MoFieldDefinition,
  type MoidInterface,
  MoMeta,
  type MoMetaInterface
} from 'svelte-mos'

export class Supplement extends Mo {
  name: string = ''
  indicationSupplements: MoidInterface[] = []

  constructor() {
    super(Supplement.moMeta)
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
  getDisplayName = () => this.displayName || this.name

  getId: () => number = () => this.id as number
  setId = (id: number) => this.id = id

  static moMeta: MoMetaInterface = new MoMeta(MoDefinition.fromProps({
      hasId: true,
      name: 'supplements',
      gridFieldnames: ['name'],
    })
  ).setName()

  static {
    // const indicationSupplementFieldDef = CommonFieldDefs.moArray.clone() as MoFieldDefinition
    // indicationSupplementFieldDef.type = 'moArray'
    // indicationSupplementFieldDef.moName = 'indicationSupplements'
    // indicationSupplementFieldDef.name = 'indicationSupplements'
    // Supplement.moMeta.moDef.fieldDefs.set('indicationSupplements', indicationSupplementFieldDef)
    Supplement.moMeta.moDef.addMoArrayFieldDefFromName('indicationSupplements')
    const moDef = Supplement.moMeta.moDef
    moDef.moClass = Supplement
    moDef.createFieldDefs()
  }
}
