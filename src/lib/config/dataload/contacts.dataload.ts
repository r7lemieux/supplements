import {contactData} from '../../data/contacts.js'
import {Contact} from '../../models/Contact.js'
export const loadContacts = () => {
  for (let contactObj of contactData) {
    const contact = new Contact()
    contact.moMeta = Contact.moMeta
    contact.hydrate(contactObj)
    Contact.moMeta.dataSource.addMo(contact)
  }
}