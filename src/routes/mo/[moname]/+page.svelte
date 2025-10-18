<script lang="ts">
	import {SmMos, toWords} from 'svelte-mos'
  import type { PageProps } from './$types'
  import { invalidate, invalidateAll } from '$app/navigation'
  import {toDisplayString} from 'svelte-mos'
  import { page } from '$app/stores';
  
  let { data, params } = $props()
  const { moMeta, mos, moname } = $derived(data)
  // const mos = $derived(data.mos)
  // const moMeta = $derived(data.moMeta)
  // const moname = $derived(params.moname || '')
  const getMos = () => mos
  // console.log(`==>+page.svelte:11 moname`, moname)
  // console.log(`==>+page.svelte:7 mos.length`, mos.length)
  // console.log(`==>+page.svelte:7 mos[0].moMeta`, !!mos[0])
  // console.log(`==>+page.svelte:7 mos[0].moMeta`, !!mos[0].moMeta)
  const title = $derived(toDisplayString(moname))
  const topButtons = true
</script>

<svelte:head>
	<title>MoDefs</title>
	<meta name="description" content="metas" />
</svelte:head>
<div>
	{#if moMeta}
    <SmMos {moMeta} {mos} {title} {topButtons} />
  {:else}
		<h2>Unknown resource {moname}</h2>
	{/if}
</div>
