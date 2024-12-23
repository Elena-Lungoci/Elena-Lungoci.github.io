<script>
  import { onMount } from "svelte";

  let navbarHeight = 0;
  let navbarTopHeight = 0;
  let nameWidth = 0;
  function adjustHeight() {
    let navbar = document.getElementById("main-navbar");
    navbarHeight = navbar ? navbar.offsetHeight : 0;

    let navbarTop = document.getElementById("navbar-top");
    navbarTopHeight = navbarTop ? navbarTop.offsetHeight : 0;
  }

  onMount(() => {
    adjustHeight();
    window.addEventListener("resize", adjustHeight);
    return () => {
      window.removeEventListener("resize", adjustHeight);
    };
  });
</script>

<div>
  <div
    class="text-center background font-source-sans-pro"
    style="top: calc({navbarHeight}px); height: calc(100vh - {navbarTopHeight}px)"
  >
    <div class="name mt-4" bind:clientWidth={nameWidth}>Elena Lungoci</div>
    <div
      class="line turquoise mx-auto"
      style="width: calc({nameWidth}px - {nameWidth * 0.2}px);"
    ></div>
    <div class="mt-5 description-text">
      Software Engineering Student at the University of Waterloo
    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col">GitHub</div>
        <div class="col">Linkedin</div>
        <div class="col">Mail</div>
      </div>
    </div>
  </div>
</div>

<style>
  .background {
    background-color: #261e2b;
    position: absolute;
    right: 0;
    left: 0;
  }

  .name {
    font-size: 10vw;
    font-weight: bold;
    display: inline-block;
  }
  .line {
    height: 1.5vw;
    width: 10vw;
  }
  .description-text {
    font-weight: 600;
    font-size: 3vw;
  }
</style>
