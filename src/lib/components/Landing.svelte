<script>
  import { onMount } from "svelte";

  //   let navbarHeight = 0;
  //   let navbarTopHeight = 0;
  let nameWidth = 0;
  //   function adjustHeight() {
  //     let navbar = document.getElementById("main-navbar");
  //     navbarHeight = navbar ? navbar.offsetHeight : 0;

  //     let navbarTop = document.getElementById("navbar-top");
  //     navbarTopHeight = navbarTop ? navbarTop.offsetHeight : 0;
  //   }

  //   onMount(() => {
  //     adjustHeight();
  //     window.addEventListener("resize", adjustHeight);
  //     return () => {
  //       window.removeEventListener("resize", adjustHeight);
  //     };
  //   });
</script>

<!-- style="height: calc(100vh - {navbarTopHeight}px)" -->

<div
  class="text-center background font-source-sans-pro d-flex justify-content-center"
>
  <!-- <div style="height: calc({navbarTopHeight}px)"></div> -->
  <div class="content">
    <div class="name px-4" bind:clientWidth={nameWidth}>Elena Lungoci</div>
    <div
      class="line turquoise mx-auto"
      style="width: calc({nameWidth}px - {nameWidth * 0.2}px);"
    ></div>
    <div class="mt-5 description-text px-4">
      Software Engineering Student at the University of Waterloo
    </div>
    <div class="d-flex justify-content-center mt-4">
      <div class="p-3">
        <a href="https://github.com/Elena-Lungoci"
          ><i class="fa-brands fa-github icon"></i>
        </a>
      </div>
      <div class="p-3">
        <a href="https://www.linkedin.com/in/simona-elena-lungoci-83a827285/"
          ><i class="fa-brands fa-linkedin icon"></i>
        </a>
      </div>
      <div class="p-3">
        <a href="mailto:elungoci@uwaterloo.ca"
          ><i class="fa fa-envelope icon"></i>
        </a>
      </div>
    </div>
  </div>
</div>

<style>
  :root {
    --fs-name: 10vw;
    --fs-icon: 2.5rem;
    --fs-description: 2.5vw;
    --margin-top: 10vh;
    --line-height: 0.75rem;
  }

  @media (max-width: 1000px) {
    :root {
      --fs-name: 7rem;
      --fs-icon: 2.5rem;
      --fs-description: 2rem;
      --line-height: 0.75rem;
    }
  }
  @media (max-width: 840px) {
    :root {
      --fs-name: 6rem;
      --fs-icon: 2.5rem;
      --fs-description: 2rem;
    }
  }

  @media (max-width: 466px) {
    :root {
      --fs-name: 5rem;
      --fs-icon: 2.5rem;
      --fs-description: 1.5rem;
    }
  }
  @media (max-width: 350px) {
    :root {
      --fs-name: 4rem;
      --fs-icon: 2.5rem;
      --fs-description: 1.5rem;
    }
  }

  .content {
    margin: auto;
  }
  .background {
    background-color: #261e2b;
    /* position: absolute;
    right: 0;
    left: 0; */
    height: max(100vh, 450px);
  }
  .icon {
    font-size: var(--fs-icon);
  }

  .name {
    font-size: var(--fs-name);
    font-weight: bold;
    display: inline-block;
    margin-top: var(--margin-top);
  }

  .description-text {
    font-weight: 600;
    font-size: var(--fs-description);
  }
  .line {
    height: 0.75rem;
  }
</style>
