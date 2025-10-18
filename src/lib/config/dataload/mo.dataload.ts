import {contactData} from '../../data/contacts.js'

import {getMoMeta} from 'svelte-mos'
import {loadSupplementTreeData} from './supplements.dataload'

export const loadData = () => {
  loadMoData('contacts', contactData)
  loadSupplementTreeData()
}
// export const loadContacts = () => {
//   for (let contactObj of contactData) {
//     const contact = new Contact()
//     contact.moMeta = Contact.moMeta
//     contact.hydrate(contactObj)
//     Contact.moMeta.dataSource.addMo(contact)
//   }
// }
export const loadMoData = (name:string, data: any) => {
  const moMeta = getMoMeta(name)
  for (let obj of data) {
    const mo = moMeta.newMo()
    mo.moMeta = moMeta
    mo.hydrate(obj)
    moMeta.dataSource.addMo(mo)
  }
}
