import {DeletePermission, type Moid} from 'svelte-mos'
import {Mo, MoDefinition, type MoidInterface, MoMeta, type MoMetaInterface} from 'svelte-mos'

export class Category extends Mo {
  name: string = ''
  indications: MoidInterface[] = []

  constructor() {
    super(Category.moMeta)
  }

  init = () => {
    this.displayName = this.displayName || this.name
    return this
  }
  // hydrate = (props: Partial<Mo>) => {
  //   this.moMeta.moDef.objToMo(props)
  //   this.displayName = this.displayName || this.name
  //   return this
  // }

  getId: () => number = () => this.id as number
  setId = (id: number) => this.id = id

  static moMeta: MoMetaInterface = new MoMeta(MoDefinition.fromProps({
      hasId: false,
      name: 'categories',
      gridFieldnames: ['name'],
      deletePermission: DeletePermission.no
    })
  ).setName()
  static {
    Category.moMeta.moDef.addMoArrayFieldDefFromName('indications', {twoWays: true})
    const moDef = Category.moMeta.moDef
    moDef.moClass = Category
    moDef.createFieldDefs()
  }
}
