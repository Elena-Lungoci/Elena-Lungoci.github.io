<script>
  import Title from "./Title.svelte";
  import SkillBox from "./SkillBox.svelte";

  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;
  function mouseDown(e) {
    isDown = true;
    startX = e.pageX - e.currentTarget.offsetLeft;
    scrollLeft = e.currentTarget.scrollLeft;
  }
  function mouseLeave() {
    isDown = false;
  }
  function mouseup() {
    isDown = false;
  }
  function mouseMove(e) {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - e.currentTarget.offsetLeft;
    const walk = (x - startX) * 1;
    e.currentTarget.scrollLeft = scrollLeft - walk;
  }
</script>

<div id="Skills" class="font-source-sans-pro">
  <Title titleName={"Skills"} />
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class="mt-5 pb-5 px-2 px-lg-5 skills-content"
    on:mousedown={mouseDown}
    on:mouseleave={mouseLeave}
    on:mouseup={mouseup}
    on:mousemove={mouseMove}
  >
    <!-- Add Unity and Svelte -->

    <SkillBox iconType={"python"} skill={"Python"} />
    <SkillBox iconType={"c"} skill={"C"} />
    <SkillBox iconType={"html"} skill={"HTML"} />
    <SkillBox iconType={"css"} skill={"CSS"} />
    <SkillBox iconType={"js"} skill={"JS"} />
    <SkillBox iconType={"csharp"} skill={"C#"} />
    <SkillBox iconType={"git"} skill={"Git"} />
    <SkillBox iconType={"github"} skill={"GitHub"} />
    <SkillBox iconType={"bootstrap"} skill={"Bootstrap"} />
    <SkillBox iconType={"vsCode"} skill={"VS Code"} />
    <SkillBox iconType={"vim"} skill={"Vim"} />
    <SkillBox iconType={"linux"} skill={"Linux"} />
  </div>
</div>

<style>
  .skills-content {
    overflow-x: auto;
    white-space: nowrap;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    display: flex;
    cursor: grab;
  }
  /* Hide scrollbar for Chrome, Safari and Opera */
  .skills-content::-webkit-scrollbar {
    display: none;
  }
</style>
