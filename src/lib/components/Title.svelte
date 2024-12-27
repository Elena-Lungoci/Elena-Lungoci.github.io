<script>
  let titleWidth = 0;
  export let titleName = "";
</script>

<div>
  <div class="mt-5 ms-5 h1 title" bind:clientWidth={titleWidth}>
    {titleName}
    <div
      class="line turquoise mx-auto mt-1"
      style="width: calc({titleWidth}px - {titleWidth * 0.2}px);"
    ></div>
  </div>
</div>

<style>
  .title {
    display: inline-block;
  }
  .line {
    height: 0.5rem;
  }
</style>
