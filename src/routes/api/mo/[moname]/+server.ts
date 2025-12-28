import { json } from '@sveltejs/kit';
import type {RequestHandler} from '../../../../../.svelte-kit/types/src/routes/mo/[moname]/[moid]/$types'
import {
  handleError,
  processRequestRetrieve,
  processRequestRetrieveAll, processRequestRetrieveAllMoids
} from '../../../../lib/services/mo/requestHandler.ts'

export const GET: RequestHandler = async ({params, request}) => {
  try {
    const objs = await processRequestRetrieveAllMoids(params, request)
    const resp = json(objs, {status: 200})
    return resp
  } catch (ex) {
    return handleError(ex, params, 'GET')
  }
}