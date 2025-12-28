import {json} from '@sveltejs/kit'
import type {RequestHandler} from './$types'
import {
  handleError,
  processRequestCreate,
  processRequestDelete,
  processRequestPatch,
  processRequestRetrieve,
  processRequestUpsert
} from '$lib/services/mo/requestHandler.ts'

export const GET: RequestHandler = async ({params, request}) => {
  try {
    console.log(`==>+server.ts:GET params`, params)
    const mo = await processRequestRetrieve(params, request)
    return json(mo, {status: 201}) // Return the created item with 201 status
  } catch (ex) {
    return handleError(ex, params, 'GET')
  }
}

export const POST: RequestHandler = async ({params, request}) => {
  try {
    console.log(`==>+server.ts:POST params`, params)
    const mo = await processRequestCreate(params, request)
    return json(mo, {status: 201}) // Return the created item with 201 status
  } catch (ex) {
    return handleError(ex, params, 'POST')
  }
}

export const PUT: RequestHandler = async ({params, request}) => {
  try {
    console.log(`==>/edit/+server.ts:PUT params`, params)
    const mo = await processRequestUpsert(params, request)
    return json(mo, {status: 200}) // Return the created item with 201 status
  } catch (ex) {
    return handleError(ex, params, 'PUT')
  }
}

export const PATCH: RequestHandler = async ({params, request}) => {
  try {
    const mo = await processRequestPatch(params, request)
    return json(mo, {status: 200}) // Return the created item with 201 status
  } catch (ex) {
    return handleError(ex, params, 'PATCH')
  }
}

export const DELETE: RequestHandler = async ({params}) => {
  try {
    const mo = await processRequestDelete(params)
    return json(mo, {status: 200}) // Return the created item with 201 status
  } catch (ex) {
    return handleError(ex, params, 'DELETE')
  }
}
