import {registerMoMetas} from './lib/services/mo/moManagement.js'
import {loadContacts} from './lib/config/dataload/contacts.dataload.js'
// import {appState} from './hooks.js'
import type { ClientInit } from '@sveltejs/kit';

export const init: ClientInit = async () => {
  console.log('Initializing client ...');
  registerMoMetas()
  // appState.initialized = true
  console.log('Client initialized')
}