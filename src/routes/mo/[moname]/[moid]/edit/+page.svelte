<script lang="ts">
  import {type MoInterface, SmMO} from 'svelte-mos'
	import {} from 'svelte-mos'
  import type { PageProps } from './$types'
  let { data }: PageProps = $props();
  const moProm: MoInterface = $derived(data?.mo as MoInterface)
  const title = $derived(data.mo.displayString)

</script>

<svelte:head>
	<title>MoDefs</title>
	<meta name="description" content="metas" />
    <title>{title}</title>
</svelte:head>

<div>
  {#await moProm then mo}
    <SmMO {mo}/>
  {/await}
</div>
