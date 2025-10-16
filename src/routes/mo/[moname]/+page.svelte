<script lang="ts">
	import {SmMos} from 'svelte-mos'
  import type { PageProps } from './$types'
  
  let { data }: PageProps = $props()
  const { moMeta, mos, moname } = data
  console.log(`==>+page.svelte:7 mos.length`, mos.length)
  console.log(`==>+page.svelte:7 mos[0].moMeta`, !!mos[0])
  console.log(`==>+page.svelte:7 mos[0].moMeta`, !!mos[0].moMeta)
  const title = moMeta.name
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
