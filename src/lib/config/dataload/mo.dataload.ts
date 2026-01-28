import {contactData} from '../../data/contacts.js'

import {getMoMeta} from 'svelte-mos'
import {loadSupplementTreeData} from './supplements.dataload'
import { loadEvidenceData } from '$lib/config/dataload/evidence.dataload.ts'

export const loadData = async () => {
  loadMoData('contacts', contactData)
  // loadSupplementTreeData()
  await loadEvidenceData()
}
// export const loadContacts = () => {
//   for (let contactObj of contactData) {
//     const contact = new Contact()
//     contact._moMeta = Contact._moMeta
//     contact.hydrate(contactObj)
//     Contact._moMeta.dataSource.addMo(contact)
//   }
// }
export const loadMoData = (moname:string, data: any) => {
  const moMeta = getMoMeta(moname)
  for (let obj of data) {
    const mo = moMeta.newMo()
    mo._moMeta = moMeta
    mo.hydrate(obj)
    moMeta.dataSource.addMo(mo)
  }
}
