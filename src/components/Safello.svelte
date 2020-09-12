<script>
  import { onMount } from "svelte"

  import SafelloLogomark from "../icons/safello_logomark.svg"
  import Window from "./Window.svelte"

  export let show = false

  let windowsEl

  onMount(() => {
    function checkIfReach() {
      const OFFSET = 200
      show = window.innerHeight + window.scrollY > windowsEl.offsetTop + OFFSET
    }

    window.addEventListener("scroll", checkIfReach)

    checkIfReach()
  })
</script>

<div class="bg">
  <a href="https://safello.com" target="_blank">
    <SafelloLogomark width="46" height="71" />
  </a>

  <p>
    I've worked on making
    <a href="https://safello.com" target="_blank">Safello</a>
    a key player in the European Bitcoin industry.
  </p>

  <div class="windows" bind:this={windowsEl} data-show={show}>
    <Window image="/images/safello_screenshots/buy.jpg" pos="left" />
    <Window image="/images/safello_screenshots/landing.png" />
    <Window image="/images/safello_screenshots/bitcoinse.jpg" pos="right" />
  </div>
</div>

<style>
  .bg {
    background-image: linear-gradient(180deg, #eff7fa 0%, #ecf2f7 100%);
    padding-top: 50px;
    overflow: hidden;
  }

  p {
    color: #819aab;
    max-width: 590px;
    margin: 30px auto;
    margin-bottom: 50px;
  }

  p a {
    color: #00c49d;
    font-weight: bold;
  }

  .windows {
    position: relative;
  }

  .windows :global(.window:not([data-pos="center"])) {
    transition: transform 0.5s, opacity 0.3s;
    opacity: 0;
  }
  .windows :global(.window[data-pos="left"]) {
    transform: translateX(40%);
  }
  .windows :global(.window[data-pos="right"]) {
    transform: translateX(-40%);
  }

  .windows[data-show="true"] :global(.window) {
    opacity: 1;
  }
  .windows[data-show="true"] :global(.window[data-pos="left"]) {
    transform: perspective(1000px) rotateY(-20deg) translateX(0%);
  }
  .windows[data-show="true"] :global(.window[data-pos="right"]) {
    transform: perspective(1000px) rotateY(20deg) translateX(0%);
  }
</style>
