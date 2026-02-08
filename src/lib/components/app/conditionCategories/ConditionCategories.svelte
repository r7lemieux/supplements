<script lang="ts">
  import {SmMosGrid} from 'svelte-mos'
  import {MoListModel} from 'svelte-mos'
  import {onMount} from 'svelte'
  import {ConditionCategory} from '../../../models/simple/ConditionCategory.js'
  import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
  import {SmMos} from 'svelte-mos'
  
  let { data }  = $props()
  const { moMeta, mos, moname } = $derived(data)
  // console.log(`==>+page.svelte:7 mos.length`, mos.length)
  // console.log(`==>+page.svelte:7 mos[0]._moMeta`, !!mos[0])
  // console.log(`==>+page.svelte:7 mos[0]._moMeta`, !!mos[0]._moMeta)
  const title = $derived(moMeta.name)
  const topButtons = true
</script>

<svelte:head>
  <title>Condition Categories</title>
  <meta name="description" content="Condition Categories"/>
</svelte:head>
<h1>Condition Categories</h1>

<SmMos {moMeta} {mos} {title} {topButtons} />
