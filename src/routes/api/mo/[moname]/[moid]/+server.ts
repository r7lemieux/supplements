import {json, type RequestHandler} from '@sveltejs/kit'
import {
  handleError,
 processRequestRetrieve
} from '../../../../../lib/services/mo/requestHandler.ts'

export const GET: RequestHandler = async ({params, request}) => {
  try {
    const obj = await processRequestRetrieve(params, request)
    const resp = json(obj, {status: 200})
    return resp
  } catch (ex) {
    return handleError(ex, params, 'GET')
  }
}