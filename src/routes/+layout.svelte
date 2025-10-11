<script>
	import Header from '../lib/components/layout/Header.svelte'
	import Footer from '../lib/components/layout/Footer.svelte'
  import 'svelte-mos' ///svelte-mos.css'
</script>

<div class="app">
	<Header />
	<main>
		<slot />
	</main>
  <Footer/>
</div>

<style>
  
  :root {
    --tree-line-color: #664;
    --field-value-color: #221;
    --field-label-color: #001;
    --field-border-color: #DDE;
    --field-edit-background-color: #BBF;
    --field-bottom-line-color: #776;
    --button-color: #110;
    --button-background-color: #FB9 ;
  }
  
  :global(body) {
    margin: 0;
    padding: 0;
    background: #564;
  }
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 64rem;
		box-sizing: border-box;
    margin: 0.1rem 1rem;
	}

</style>
