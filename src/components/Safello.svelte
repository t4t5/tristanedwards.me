<script>
  import SafelloLogomark from '../icons/safello_logomark.svg'
  import Window from './Window.svelte'
</script>

<div class="bg">
  <a href="https://safello.com" target="_blank">
    <SafelloLogomark width="46" height="71" />
  </a>

  <p>
    I've worked on making
    <a href="https://safello.com" target="_blank">
      Safello
    </a>
    a key player in the European Bitcoin industry.
  </p>

  <div class="windows">
    <Window image="/images/safello_screenshots/buy.jpg" pos="left" />
    <Window image="/images/safello_screenshots/landing.jpg" />
    <Window image="/images/safello_screenshots/bitcoinse.jpg" pos="right" />
  </div>
</div>

<style>
  .bg {
    background-image: linear-gradient(180deg, #EFF7FA 0%, #ECF2F7 100%);
    padding-top: 50px;
    overflow: hidden;
  }

  p {
    color: #819AAB;
    max-width: 590px;
    margin: 30px auto;
    margin-bottom: 50px;
  }

  p a {
    color: #56BAA5;
    font-weight: bold;
  }

  .windows {
    position: relative;
  }
</style>
