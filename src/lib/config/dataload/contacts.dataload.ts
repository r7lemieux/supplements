import {contactData} from '../../data/contacts.js'
import {Contact} from '../../models/simple/Contact.js'
import {Supplement} from '../../models/simple/Supplement.js'
import {getMoMeta} from 'svelte-mos'
export const loadContacts = () => {
  for (let contactObj of contactData) {
    const contact = new Contact()
    contact.moMeta = Contact.moMeta
    contact.hydrate(contactObj)
    Contact.moMeta.dataSource.addMo(contact)
  }
}
export const loadSupplements = () => {
  for (let obj of contactData) {
    const mo = new Supplement()
    mo.moMeta = Supplement.moMeta
    mo.hydrate(obj)
    Contact.moMeta.dataSource.addMo(mo)
  }
}
export const loadMoData = (name:string, data: any) => {
  const moMeta = getMoMeta(name)
  for (let obj of data) {
    const mo = moMeta.newMo()
    mo.moMeta = moMeta
    mo.hydrate(obj)
    moMeta.dataSource.addMo(mo)
  }
}
