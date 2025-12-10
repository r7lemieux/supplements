import {MoDefinition, Mo, MoMeta, type MoMetaInterface} from 'svelte-mos'

export class Contact extends Mo {
  firstName?: string
  lastName?: string
  phone?: string
  phone2?: string
  businessPhone?: string
  email?: string
  email2?: string
  addressLine1?: string
  addressLine2?: string
  city?: string
  state?: string
  postalCode?: string



  constructor() {
    // if (!moMeta) moMeta = new MoMeta(contactMoDef)
    super(Contact.moMeta)
  }
  init = () => {
    this.displayName = this.displayName || `${this.firstName || ''}  ${this.lastName || ''}`
    return this
  }
  // hydrate = (props: Partial<Contact>) => {
  //   Object.assign(this, props)
  //   this.displayName = this.displayName || `${this.firstName || ''}  ${this.lastName || ''}`
  //   return this
  // }

  getDisplayName = () => `${this.firstName} ${this.lastName}`

  static moMeta: MoMetaInterface = new MoMeta(MoDefinition.fromProps({
      hasId: false,
      name: 'contacts',
      keyFieldnames: ['phone', 'email'],
      gridFieldnames: ['firstName', 'lastName', 'phone'],
    })
  ).setName()

  static {
    const moDef = Contact.moMeta.moDef
    moDef.moClass = Contact
    moDef.createFieldDefs()
    // moDef.showFieldNames = moDef.fieldDefs.values().map(fd => fd.name).filter(name => name !== 'id')
  }
}

