<script>
  import Title from "./Title.svelte";
  import SkillBox from "./SkillBox.svelte";
</script>

<div class="content font-source-sans-pro">
  <Title titleName={"Skills"} />
  <div class="mt-5 pb-5 px-5 skills-content">
    <SkillBox iconType={"csharp"} skill={"C#"} />
    <SkillBox iconType={"python"} skill={"Python"} />
    <SkillBox iconType={"c"} skill={"C"} />
    <SkillBox iconType={"html"} skill={"HTML"} />
    <SkillBox iconType={"css"} skill={"CSS"} />
    <SkillBox iconType={"js"} skill={"JS"} />
    <SkillBox iconType={"git"} skill={"Git"} />
    <SkillBox iconType={"github"} skill={"GitHub"} />
    <SkillBox iconType={"bootstrap"} skill={"Bootstrap"} />
    <SkillBox iconType={"vsCode"} skill={"VS Code"} />
    <SkillBox iconType={"vim"} skill={"Vim"} />
    <SkillBox iconType={"linux"} skill={"Linux"} />
  </div>
</div>

<style>
  .content {
    background-color: #211c23;
  }
  .skills-content {
    overflow-x: auto;
    white-space: nowrap;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    display: flex;
  }
  /* Hide scrollbar for Chrome, Safari and Opera */
  .skills-content::-webkit-scrollbar {
    display: none;
  }
</style>
