import { dev } from '$app/environment'
import {ErrorName, getMoMeta, type MoInterface, Rezult} from 'svelte-mos'
import { error } from '@sveltejs/kit'
import { registerMos } from '../../../../lib/services/mo/moManagement'

// import { HttpError } from '@sveltejs/kit'
export const csr = true;
export const prerender = false;
export const ssr = true;

/** @type {import('./$types').PageLoad} */
export async function load({ params }: any) {
	registerMos()
	const moname = params.moname
	const moMeta = getMoMeta(moname)
	const id = params.moid
	const mo = moMeta?.dataSource.getMo(id)

	if (!mo) {

		// throw new HttpError({status: 404, body: {message: 'NOTTTT'}})
		// throw error(404, 'aaaa')// { moname: params.moname, id: params.id })
		const rezult = new Rezult(ErrorName.db_notFound, {moname: params.moname, id: params.moid})
		const message = rezult.toDetailString()
		const err = error(404, message)
		throw err
	}
	return {mo, moname}
}
