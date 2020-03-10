<script>
  export let image
  export let pos = "center"
</script>

<div class="window" data-pos={pos}>
  <header>
    <ul class="traffic-lights">
      <li class="light red" />
      <li class="light yellow" />
      <li class="light green" />
    </ul>
  </header>

  <div class="screen" style={`background-image: url(${image})`} />
</div>

<style>
  .window {
    background: #ffffff;
    box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.04),
      0 1px 4px 0 rgba(0, 0, 0, 0.18);
    border-radius: 4px;
    width: 624px;
    height: 383px;
    max-width: 100%;
    position: relative;
    display: inline-block;
    vertical-align: middle;
    box-sizing: border-box;
    overflow: hidden;
    max-width: calc(100% - 20px);
    margin-bottom: -10px;
  }

  .window[data-pos="left"] {
    position: absolute;
    transform: perspective(1000px) rotateY(-20deg);
    left: 160px;
    top: 30px;
  }

  .window[data-pos="right"] {
    position: absolute;
    transform: perspective(1000px) rotateY(20deg);
    right: 160px;
    top: 30px;
  }

  .window[data-pos="center"] {
    z-index: 1;
  }

  header {
    background: #f2f2f2;
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
    font-size: 16px;
    text-align: center;
    color: rgba(0, 0, 0, 0.54);
    position: relative;
    padding: 10px 0;
  }

  .traffic-lights {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .light {
    width: 10px;
    height: 10px;
    background-color: gray;
    border-radius: 50%;
    display: inline-block;
    margin: 0 1px;
  }

  .red {
    background-color: #fb6b58;
  }

  .yellow {
    background-color: #ffd50a;
  }

  .green {
    background-color: #6eca3a;
  }

  .screen {
    position: absolute;
    top: 21px;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: cover;
    background-position: top center;
  }

  @media (max-width: 1000px) {
    .window[data-pos="left"],
    .window[data-pos="right"] {
      display: none;
    }
  }

  @media (max-width: 570px) {
    .window {
      height: 300px;
    }
  }

  @media (max-width: 450px) {
    .window {
      height: 250px;
    }
  }
</style>
