<script>
  export let image
</script>

<div class="window">
  <div class="screen" style={`background-image: url(${image})`} />
</div>

<style>
  .window {
    width: 624px;
    max-width: 100%;
    height: 383px;
    background-image: url(/images/window.png);
    background-size: contain;
    background-position: bottom center;
    background-repeat: no-repeat;
    margin: 0 auto;
    position: relative;
  }

  .screen {
    position: absolute;
    top: 40px;
    left: 1px;
    right: 1px;
    bottom: 0;
    background-size: cover;
    background-position: top center;
  }
</style>
