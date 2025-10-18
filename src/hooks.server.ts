import {registerMoMetas} from './lib/services/mo/moManagement.js'
import {loadData} from './lib/config/dataload/mo.dataload.js'
import {appState} from './hooks.js'
import type { ServerInit } from '@sveltejs/kit';

export const init: ServerInit = async () => {
  console.log('Initializing server ...');
  // await connectToDatabase(); // Example: connect to your database
  registerMoMetas()
  loadData()
  appState.initialized = true
  console.log('Server initialized');
}