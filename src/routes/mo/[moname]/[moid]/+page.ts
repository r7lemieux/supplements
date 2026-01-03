import { dev } from '$app/environment'
import {ErrorName, getMoMeta, type MoInterface, Rezult} from 'svelte-mos'
import { error } from '@sveltejs/kit'

export const csr = true;
export const prerender = false;
export const ssr = true;

export async function load({ params, data }: any) {
	// registerMos()
	const moname = params.moname
	const moMeta = getMoMeta(moname)
	const id = params.moid
	const mo = await data.mo

	if (!mo) {
		const rezult = new Rezult(ErrorName.db_notFound, {moname: params.moname, id: params.moid})
		const message = rezult.toDetailString()
		const err = error(404, message)
		throw err
	}
	return {mo, moname}
}
