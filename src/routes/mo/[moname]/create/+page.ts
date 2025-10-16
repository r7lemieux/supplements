import {dev} from '$app/environment'
// import {getMoMeta} from 'svelte-mos'
export const csr = true;
export const prerender = false;
export const ssr = true;

// /** @type {import('./$types').PageLoad} */
// export function load({data, params}: any) {
//   const moname = params.moname;
//   const moMeta = data.moMeta // getMoMeta(moname)
//   return {moMeta}
// }