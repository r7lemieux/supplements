import {contactData} from '../data/contacts.js'
import {MoDefinition, Mo} from 'svelte-mos'
import {MoMeta} from 'svelte-mos'
import {type MoMetaInterface} from 'svelte-mos'

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

  static moMeta: MoMetaInterface = new MoMeta(MoDefinition.fromProps({
      hasId: false,
      name: 'contact',
      id: 'contact',
      // moClass: Contact,
      keyFieldnames: ['phone', 'email'],
      gridFieldnames: ['firstName', 'lastName', 'phone'],
    })
  ).setName('contacts')

  static {
    const moDef = Contact.moMeta.moDef
    moDef.moClass = Contact
    moDef.initFieldDefs()
    // moDef.showFieldNames = moDef.fieldDefs.values().map(fd => fd.name).filter(name => name !== 'id')
  }

  constructor() {
    // if (!moMeta) moMeta = new MoMeta(contactMoDef)
    super(Contact.moMeta)
  }

  hydrate = (props: Partial<Contact>) => {
    Object.assign(this, props)
    return this
  }

  getDisplayName = () => `${this.firstName} ${this.lastName}`

}


// contactData.forEach((data: any) => {
//   const contact = new Contact()
//   contact.hydrate(data)
//   contact.moMeta.dataSource.addMo(contact)
// })
// const contactMoDef = MoDefinition.fromProps({
//   hasId: false,
//   name: 'contacts',
//   id: 'contacts',
//   // moClass: Contact,
//   keyFieldnames: ['phone', 'email'],
//   gridFieldnames: ['firstName', 'lastName', 'phone'],
// })
// export const getContactMoMeta = () => {
//   if (Contact.moMeta) {
//     Contact.moMeta = new MoMeta(contactMoDef)
//   }
//   return Contact.moMeta
// }
// contactMoDef.moClass = Contact


// contactMoDef.initFieldDefs()
