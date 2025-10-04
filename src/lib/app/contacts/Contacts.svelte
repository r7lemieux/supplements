<script lang="ts">
  import {SmMosGrid} from 'svelte-mos'
  import {MoListModel} from 'svelte-mos'
  import {onMount} from 'svelte'
  import {Contact} from 'svelte-mos'
  import {getContactMoMeta} from 'svelte-mos'
  import {contactData} from 'svelte-mos'
  import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
  
  ModuleRegistry.registerModules([ AllCommunityModule ]);
  const contactMoMeta = getContactMoMeta()
  const contacts = contactData.map((data: any) => new Contact())
  // eslint-disable-next-line no-undef
  const moListModel = new MoListModel(contactMoMeta)
  let modelReady: (model: MoListModel) => boolean
  moListModel.mos = contacts
  onMount(() => {
    modelReady(moListModel)
  })

</script>
<svelte:head>
  <title>Contacts</title>
  <meta name="description" content="Contacts"/>
</svelte:head>
<h1>Contacts</h1>
<SmMosGrid bind:modelReady/>

