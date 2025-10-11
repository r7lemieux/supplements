<script>
  import {SmMoCreate} from 'svelte-mos'
  import {MoMeta} from 'svelte-mos'
  // import MoCreate from "$lib/components/generics/MoCreate/MoCreate.svelte"
  
  let {
    moMeta
  } = $props()

</script>

<svelte:head>
  <title>MoMeta</title>
  <meta name="description" content="metas"/>
</svelte:head>

<div>
  <SmMoCreate {moMeta}/>
</div>
