import {dev} from '$app/environment'
import {moMetas} from 'svelte-mos'
export const csr = true;
export const prerender = false;
export const ssr = true;

/** @type {import('./$types').PageLoad} */
export function load({params}: any) {
  const moDef = moMetas[params.moname]
  return {moDef}
}