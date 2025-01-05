<script lang="ts">
  import { base } from "$app/paths";
  import Landing from "$lib/components/Landing.svelte";
  import Projects from "$lib/components/Projects.svelte";
  import Skills from "$lib/components/Skills.svelte";
  import Contact from "$lib/components/Contact.svelte";
</script>

<div class="content pb-5">
  <Landing />
  <Skills />
  <Projects />
  <Contact />
</div>

<style>
  .content {
    background-color: #211c23;
  }
</style>
