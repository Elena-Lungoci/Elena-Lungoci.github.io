<script>
  // @ts-nocheck

  import "@fortawesome/fontawesome-free/css/all.min.css";

  export let iconType = "js";
  export let skill = "JavaScript";

  let iconsNames = {
    js: "javascript-1",
    csharp: "c--4",
    python: "python-5",
    html: "html-1",
    css: "css-3",
    c: "c-1",
    git: "git-bash",
    github: "github-icon-1",
    linux: "linux-tux",
    vsCode: "visual-studio-code-1",
    vim: "vim",
    bootstrap: "bootstrap-5-1",
  };
</script>

<div class="box p-3 font-source-sans-pro">
  <div class="icon-container">
    <!-- <i class="fa-brands {iconsNames[iconType]} icon"></i> -->
    <img src="/icons/{iconsNames[iconType]}.svg" alt="" class="icon" />
    <div class="mt-auto skill">{skill}</div>
  </div>
</div>

<style>
  .box {
    display: inline-block;
    background-color: var(--teal);
    border-radius: 1rem;
    margin: 1rem;
    width: 12rem;
    height: 12rem;
  }
  .icon-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .icon {
    width: 7rem;
    color: var(--teal);
  }
  .skill {
    font-size: 1.5rem;
    font-weight: 500;
  }
</style>
