import type {ClientInit} from '@sveltejs/kit'
import {initMoTransport, initRelationMetas} from 'svelte-mos'
import {registerMoMetas} from '../mo/moManagement.ts'
import {createRelations} from '../../config/dataload/RelationConfig.ts'
import {initRelationDefs} from 'svelte-mos'
import {
    CellStyleModule,
    ClientSideRowModelModule,
    ColumnApiModule,
    ColumnAutoSizeModule,
    ModuleRegistry
} from 'ag-grid-community'

let appInitiated = false

export const initApp = async () => {
    if (!appInitiated) {
        appInitiated = true
        console.log('Initializing App ...')
        initMoTransport()
        registerMoMetas()
        createRelations()
        initRelationDefs()
        initRelationMetas()
        console.log('App initialized')
    }
}

let clientInitiated = false
export const initClient = async () => {
    if (!clientInitiated) {
        clientInitiated = true
        console.log('Initializing Client ...')
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
}