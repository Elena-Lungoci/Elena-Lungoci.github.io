<script lang="ts">
  import { base } from "$app/paths";
  import Landing from "$lib/components/Landing.svelte";
  import Projects from "$lib/components/Projects.svelte";
  import Skills from "$lib/components/Skills.svelte";
</script>

<div class="content pb-5">
  <Landing />
  <Skills />
  <Projects/>
</div>

<style>
  .content {
    background-color: #211c23;
  }
</style>
