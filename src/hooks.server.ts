import {registerMoMetas} from './lib/services/mo/moManagement.js'
import {loadData} from './lib/config/dataload/mo.dataload.js'
import {appState} from './hooks.js'
import type { ServerInit } from '@sveltejs/kit';
import { dev } from '$app/environment';

export const init: ServerInit = async () => {
  console.log('Initializing server ...');
  // await connectToDatabase(); // Example: connect to your database
  registerMoMetas()
  loadData()
  appState.initialized = true
  console.log('Server initialized');

}

export async function handle({ event, resolve }) {
  if (dev && event.url.pathname === '/.well-known/appspecific/com.chrome.devtools.json') {
    return new Response(undefined, {status: 404});
  } else if (event.url.pathname.endsWith('favicon.ico')) {
    console.log(`==> hooks.server.ts:22 event.url `, event.url)
    return new Response('')
  } else {
    return await resolve(event);
  }
}
