<script>
  import Tech from "./Tech.svelte";
  export let projectName = "Chessboard";
  export let boxWidth = 200;

  let hovered = false;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="box"
  style="height: {boxWidth * 0.75}px;"
  on:mouseenter={() => (hovered = true)}
  on:mouseleave={() => (hovered = false)}
>
  <div class="mt-2 ms-4 title mb-2">{projectName}</div>
  <div class="tech-list ms-4">
    <Tech skill="JS" />
    <Tech skill="C" />
    <Tech skill="Socket.io" />
  </div>
  {#if !hovered}
    <!-- does not detect leave when not inside component -->
    <img src="/projects/chessboard.png" alt="" />
  {:else}
    <div class=" mb-2 description">
      <p class="mx-4 font-source-sans-pro">
        An automatic chessboard that detects and moves pieces using hall-effect
        sensors and a Core-XY system.
      </p>
      <div class="buttons-container">
        <button>GitLab</button>
        <button>Video</button>
      </div>
    </div>
  {/if}
</div>

<style>
  .box {
    background-color: var(--teal);
    overflow: hidden;
    position: relative;
    border: #c4d7ea solid 1px;
  }
  .title {
    font-size: 2rem;
    font-weight: 500;
  }
  img {
    width: 100%;
  }
  .tech-list {
    overflow-x: auto;
    white-space: nowrap;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    display: flex;
    cursor: grab;
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
  .tech-list::-webkit-scrollbar {
    display: none;
  }
  .buttons-container {
    display: flex;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
  }
  .description {
    background-color: #c4d7ea;
    color: black;
    width: 100%;
    height: 100%;
  }
  button {
    width: 100%;
    height: 3em;
    border-width: 1px;
    background-color: coral;
  }
  button:hover {
    background-color: lightcoral;
    color: black;
  }
  p {
    color: black;
    font-size: 1.2rem;
  }
</style>
