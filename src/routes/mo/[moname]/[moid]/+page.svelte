<script lang="ts">
  import {SmMO} from 'svelte-mos'
  import type {PageProps} from './$types'
  
  let {data}: PageProps = $props()
</script>

<svelte:head>
  <title>MoDefs</title>
  <meta name="description" content="metas"/>
</svelte:head>

<div>
  {#await data.mo then mo}
    <SmMO {mo}/>
  {/await}
</div>
<style>
</style>