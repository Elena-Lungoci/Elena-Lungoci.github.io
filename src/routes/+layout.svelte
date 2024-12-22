<script>
  import Page from "./+page.svelte";
  import NavBar from "$lib/components/NavBar.svelte";
  import '$lib/global.css';
</script>

<NavBar />

<slot />
