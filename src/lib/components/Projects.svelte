<script>
  import ProjectBox from "./ProjectBox.svelte";
  import Title from "./Title.svelte";

  let boxWidth = 0;
</script>

<div>
  <Title titleName={"Projects"} />
  <div class="container mt-4">
    <div class="row">
      <div
        class="col mb-4"
        style="height: {boxWidth * 0.75}px;"
        bind:clientWidth={boxWidth}
      >
        <ProjectBox {boxWidth} projectName={"Chessboard"} />
      </div>
      <div class="col  mb-4" style="height: {boxWidth * 0.75}px;">
        <ProjectBox {boxWidth} projectName={"MariAngryneers"} />
      </div>
    </div>
    <div class="row">
        <div
        class="col mb-4"
        style="height: {boxWidth * 0.75}px;"
        bind:clientWidth={boxWidth}
      >
        <ProjectBox {boxWidth} projectName={"Slingshot"} />
      </div>
      <div
        class="col mb-4"
        style="height: {boxWidth * 0.75}px;"
        bind:clientWidth={boxWidth}
      >
        <ProjectBox {boxWidth} projectName={"Corona"} />
      </div>
      
    </div>
  </div>
</div>

<style>
  .col {
    height: 27rem;
  }
</style>
