import {loadData} from './lib/config/dataload/mo.dataload.js'
import type {ServerInit} from '@sveltejs/kit'
import {dev} from '$app/environment'
import {initApp} from './lib/services/system/init.ts'

let serverInitiated = false

export const init: ServerInit = async () => {
    // await connectToDatabase(); // Example: connect to your database
    await initApp()
    if (!serverInitiated) {
        serverInitiated = true
        console.log('Initializing server ...')
        await loadData()
        console.log('Server initialized')
    }
}

export async function handle({event, resolve}) {
    if (dev && event.url.pathname === '/.well-known/appspecific/com.chrome.devtools.json') {
        return new Response(undefined, {status: 404})
    } else if (event.url.pathname.endsWith('favicon.ico')) {
        //console.log(`==> hooks.server.ts:22 event.url `, event.url)
        return new Response('')
    } else {
        return resolve(event)
    }
}
