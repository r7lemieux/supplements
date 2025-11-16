<script lang="ts">
  import {type MoInterface, SmMO} from 'svelte-mos'
	import {} from 'svelte-mos'
  import type { PageProps } from './$types'
  let { data }: PageProps = $props();
  const moProm: MoInterface = data?.mo as MoInterface
</script>

<svelte:head>
	<title>MoDefs</title>
	<meta name="description" content="metas" />
</svelte:head>

<div>
  {#await moProm then mo}
    <SmMO {mo}/>
  {/await}
</div>
