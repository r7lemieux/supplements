import type {ClientInit} from '@sveltejs/kit'
import {initApp, initClient} from './lib/services/system/init.ts'

export const init: ClientInit = async () => {
    await initApp()
    await initClient()
}