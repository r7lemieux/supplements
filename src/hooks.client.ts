import {registerMoMetas} from './lib/services/mo/moManagement.js'
// import {appState} from './hooks.js'
import type {ClientInit} from '@sveltejs/kit'
import {
    CellStyleModule,
    ClientSideRowModelModule,
    ColumnApiModule,
    ColumnAutoSizeModule,
    ModuleRegistry
} from 'ag-grid-community' // does it work here? I had to put that in the app
import {initMoTransport, initRelationMetas} from 'svelte-mos'
import {initRelationDefs} from '../../../lib/svelte-mos/src/lib/index.ts'
import {createRelations} from './lib/config/dataload/RelationConfig.ts'
import {initApp, initClient} from './lib/services/system/init.ts'

export const init: ClientInit = async () => {
    await initApp()
    await initClient()
}