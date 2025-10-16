<script lang="ts">
	import {SmMO} from 'svelte-mos'
  import { page } from '$app/stores';
  import type { PageProps } from './$types'
  import {Rezult, ErrorName} from 'svelte-mos'
  import {getMoMeta} from 'svelte-mos'
  // let { data }: PageProps = $props();
  const moname = $page.params.moname
  const moMeta = getMoMeta(moname)
	const moDef = moMeta.moDef
  if (!moDef.newMo) throw new Rezult(ErrorName.missing_value)
	const mo = moDef.newMo()
</script>

<svelte:head>
	<title>MoDefs</title>
	<meta name="description" content="metas" />
</svelte:head>

<SmMO {mo} />
