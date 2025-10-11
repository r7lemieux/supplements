<script lang="ts">
  import {SmMosGrid} from 'svelte-mos'
  import {MoListModel} from 'svelte-mos'
  import {onMount} from 'svelte'
  import {Contact} from '../../model/Contact'
  import {contactData} from 'svelte-mos'
  import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
  
  ModuleRegistry.registerModules([ AllCommunityModule ]);
  const contactMoMeta = Contact.moMeta
  // console.log(`==>Contacts.svelte:12 contactMoMeta.moDef.name`, contactMoMeta.moDef.name)
  // console.log(`==>Contacts.svelte:13 contactMoMeta.moDef.gridFieldnames`, contactMoMeta.moDef.gridFieldnames)
  const contacts = contactData.map((data: any) => new Contact().hydrate(data))
  // eslint-disable-next-line no-undef
  const moListModel = new MoListModel(contactMoMeta)
  
  // let modelReady: (model: MoListModel) => boolean
  moListModel.mos = contacts
  
  let modelResolve: Function
  const modelReadyPromise: Promise<MoListModel> = new Promise((resolve) => { modelResolve = resolve} )
  onMount(() => {
    modelResolve(moListModel)
  })

</script>
<svelte:head>
  <title>Contacts</title>
  <meta name="description" content="Contacts"/>
</svelte:head>
<h1>Contacts</h1>
<SmMosGrid modelReady={modelReadyPromise}/>

