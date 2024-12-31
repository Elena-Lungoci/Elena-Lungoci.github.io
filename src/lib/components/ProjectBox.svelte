<script>
  // @ts-nocheck

  import { fly } from "svelte/transition";

  import Tech from "./Tech.svelte";
  export let projectName = "Chessboard";
  export let boxWidth = 200;

  let titleHeight = 0;
  let buttonsHeight = 0;

  let hovered = false;

  let projects = {
    Chessboard: {
      title: "Automatic Chessboard",
      description:
        "An automatic chessboard that detects and moves pieces using hall-effect sensors and a Core-XY system.",
      description2:
        "The project was made as a final project for the SE101: Introduction to Methods of Software Engineering course.",
      tech: [
        "JS",
        "C",
        "Socket.io",
        "Raspberry Pi",
        "Fusion360",
        "Node.js",
        "Git",
      ],
      img: "/projects/chessboard.png",
      button1: [
        "GitLab",
        "https://git.uwaterloo.ca/b27dai/se101_group_project",
      ],
      button2: [
        "Video",
        "https://drive.google.com/file/d/1CIkpUcLwAqcEDvuUiAf-4TlQckdo4KUJ/view?usp=sharing",
      ],
    },
    MariAngryneers: {
      title: "The Mari Angryneers",
      description:
        "Website of the 2023-2024 Marianopolis Robotics Team. The theme is inspired by the game Angry Birds.",
      description2:
        "First Place in both Website Design and Website Content Categories at the Kryptic 2024 competition.",
      tech: ["Svelte(Kit)", "CSS", "JS", "Git", "Bootstrap", "HTML", "Figma"],
      img: "/projects/mariangryneers.png",
      button1: [
        "GitHub",
        "https://github.com/marianopolis-robotics/website-2024",
      ],
      button2: ["Website", "https://mariangryneers.crcrobotics.com/"],
    },
    Corona: {
      title: "Corona Tower Defense",
      description:
        "A tower defense game that teaches the player about immune responses to pathogens, specifically the COVID-19 virus.",
      description2:
        "The project was made for the 2022 Expo-Sciences Hydro-Québec competition. Awarded Second Place in the Regional Science Fair, Ubisoft Education Prize, Réseau d'Action TI Prize, and the Université de Montréal Prize",
      tech: ["Python", "Pygame", "Unity", "C#"],
      img: "/projects/corona.png",
      button1: [
        "GitHub",
        "https://github.com/Elena-Lungoci/Corona-Tower-Defense-Unity",
      ],
      button2: [
        "Video",
        "https://drive.google.com/drive/folders/1hHtxqhwTJfTUwOw0WHN5HNnxLEpzS9rD?usp=drive_link",
      ],
    },
    Slingshot: {
      title: "Angry Birds Slingshot",
      description:
        "A physical slinghot controller for the game Angry Birds. The controller uses a force-sensitive sensor to measure the force applied by the user and a gyroscope to measure the orientation of the string.",
      description2:
        "The project was made for the Kryptic 2024 Kiosk. Awarded Fourth Place in the Kiosk Category.",
      tech: ["Unity", "C (Arduino)", "Uduino", "OnShape"],
      img: "/projects/slingshot.png",
      button1: [
        "GitHub",
        "https://github.com/Elena-Lungoci/kryptic-angry-birds",
      ],
      button2: [
        "Video",
        "https://drive.google.com/drive/folders/1u8Sor9JzyfeT3L2tKej3N1xFevylZ4yM?usp=drive_link",
      ],
    },
  };
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="box"
  style="height: {boxWidth * 0.75}px;"
  on:mouseenter={() => (hovered = true)}
  on:mouseleave={() => (hovered = false)}
>
  <div bind:clientHeight={titleHeight}>
    <div class="mt-2 ms-2 ms-lg-4 title mb-2">
      {projects[projectName].title}
    </div>
    <div class="tech-list ms-2 ms-lg-4">
      {#each projects[projectName].tech as technology}
        <Tech skill={technology} />
      {/each}
    </div>
  </div>
  {#if !hovered}
    <div style="height: {boxWidth * 0.75 - titleHeight - 10}px;">
      <!-- does not detect leave when not inside component -->
      <img src={projects[projectName].img} alt="" in:fly={{ duration: 800 }} />
    </div>
  {:else}
    <div
      class=" mb-2 description-container"
      style="height: {boxWidth * 0.75 - titleHeight - buttonsHeight - 10}px;"
      in:fly={{ duration: 800 }}
    >
      <div class="description">
        <p
          class="mx-2 mx-lg-5 mt-2 mt-lg-4 font-source-sans-pro description-text"
        >
          {projects[projectName].description}
        </p>
        <p class="mx-2 mx-lg-5 mt-lg-4 font-source-sans-pro description-text">
          {projects[projectName].description2}
        </p>
      </div>
    </div>
    <div
      class="buttons-container"
      bind:clientHeight={buttonsHeight}
      in:fly={{ duration: 600 }}
    >
      <a href={projects[projectName].button1[1]}
        >{projects[projectName].button1[0]}</a
      >
      <a href={projects[projectName].button2[1]}
        >{projects[projectName].button2[0]}</a
      >
    </div>
  {/if}
</div>

<style>
  :root {
    --btnheight: 3em;
  }

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
    height: 100%;
    margin-top: auto;
    margin-top: auto;
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
    background-color: var(--teal);
    bottom: 0;
    right: 0;
    left: 0;
  }
  .description-container {
    background-color: #c4d7ea;
    color: black;
    width: 100%;
    overflow: auto;
  }
  a {
    width: 100%;
    height: 3em;
    color: white;
    text-decoration: none;
    border: black solid 1px;
    background-color: coral;
    text-align: center;
    padding: 0.7em;
  }
  a:hover {
    background-color: lightcoral;
    color: black;
  }
  .description-text {
    color: black;
    font-size: 1.2rem;
  }
  .description {
    height: 100%;
    overflow: auto;
  }
</style>
