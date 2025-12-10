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
import {initMoTransport} from 'svelte-mos'

export const init: ClientInit = async () => {
  console.log('Initializing client ...')
  initMoTransport()
  registerMoMetas()
  // ModuleRegistry.registerModules([AllCommunityModule])
  ModuleRegistry.registerModules([
    ColumnAutoSizeModule,
    ClientSideRowModelModule,
    // RowStyleModule,
    // RowStyleModule,
    CellStyleModule,
    // RowApiModule,
    // CellApiModule,
     ColumnApiModule,
    // RenderApiModule,
  ])
  // appState.initialized = true
  console.log('Client initialized')
}