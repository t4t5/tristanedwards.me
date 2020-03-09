<script>
  import SafelloLogomark from '../icons/safello_logomark.svg'
  import Window from './Window.svelte'
</script>

<div class="bg">
  <SafelloLogomark width="46" height="71" />

  <p>
    I've worked on making <span>Safello</span> a key player in the European Bitcoin industry.
  </p>

  <Window image="/images/safello_screenshots/landing.jpg" />
</div>

<style>
  .bg {
    background-image: linear-gradient(180deg, #EFF7FA 0%, #ECF2F7 100%);
    padding-top: 50px;
  }

  p {
    color: #819AAB;
    max-width: 590px;
    margin: 30px auto;
  }

  p span {
    color: #56BAA5;
    font-weight: bold;
  }
</style>
