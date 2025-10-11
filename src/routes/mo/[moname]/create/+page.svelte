<script lang="ts">
	import {SmMO} from 'svelte-mos'
  import type { PageProps } from './$types'
  import {Rezult, ErrorName} from 'svelte-mos'
  let { data }: PageProps = $props();
	let moDef = data.moDef
  if (!moDef.newMo) throw new Rezult(ErrorName.missing_value)
	const mo = moDef.newMo()
</script>

<svelte:head>
	<title>MoDefs</title>
	<meta name="description" content="metas" />
</svelte:head>

<SmMO {mo} />
