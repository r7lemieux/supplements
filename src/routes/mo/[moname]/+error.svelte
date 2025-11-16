<!-- src/routes/+error.svelte -->
<script>
  import { page } from '$app/stores';
</script>

<h1>Oops {$page.status}</h1>
<h2>{$page.error?.message || 'An unexpected error occurred.'}</h2>