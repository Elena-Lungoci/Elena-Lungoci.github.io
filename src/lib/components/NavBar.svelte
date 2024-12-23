<script>
  import { onMount } from "svelte";

  function show_elements() {
    window.dispatchEvent(new Event("resize"));
  }
</script>

<div class="nav-bar" id="main-navbar">
  <!-- add color change on hover -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark font-inter">
    <div class="container-fluid" id="navbar-top">
      <a class="navbar-brand" href="./">
        <div class="container">
          <div class="row d-flex flex-nowrap">
            <div
              class="turquoise dot col-sm text-dark text-center font-kablammo icon"
            >
              E
            </div>
            <div class="col-sm">Elena Lungoci</div>
          </div>
        </div>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        on:click={show_elements}
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item me-2 ms-2">
          <a class="nav-link active" href="./">Skills</a>
        </li>
        <li class="nav-item me-2 ms-2">
          <a class="nav-link active" href="./">Projects</a>
        </li>
        <li class="nav-item me-2 ms-2">
          <a class="nav-link active" href="./">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
</div>

<style>
  .dot {
    height: 35px;
    width: 35px;
    border-radius: 50%;
    display: inline-block;
  }
  .icon {
    text-align: center;
    vertical-align: middle;
    line-height: 35px;
  }
  .nav-bar {
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    z-index: 10;
  }
</style>
