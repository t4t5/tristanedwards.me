<script>
  import Logomark from '../icons/te_logomark.svg'
  import SocialIcon from './SocialIcon.svelte'
  import Caret from '../icons/caret.svg'
</script>

<svelte:head>
  <link rel="stylesheet" href="/global.css" />
</svelte:head>

<div class="bg">
  <Logomark width="94" />
  <p>
    Hi. I'm Tristan Edwards. I like to design and build cool stuff.
  </p>

  <SocialIcon namespace="twitter" width="38" height="32" />
  <SocialIcon namespace="dribbble" />
  <SocialIcon namespace="github" width="44" height="44" />

  <div class="caret">
    <Caret width="38" height="20" />
  </div>
</div>

<style>
  .bg {
    background-color: #494949;
    background-image: linear-gradient(180deg, #494949 0%, #333247 100%);
    padding: 160px 0;
    position: relative;
  }

  .bg::before {
    content: "";
    background-image: url(/images/top_bg.png);
    background-size: cover;
    background-position: top center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  p {
    margin-top: 95px;
  }

  .caret {
    display: inline-block;
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    animation: arrowHint 0.5s linear 0s infinite alternate;
  }

  @keyframes arrowHint {
    0% {
      bottom: 20px;
    }
    100% {
      bottom: 10px;
    }
  }

  @media (max-width: 600px) {
    p {
      margin-top: 60px;
    }

    .bg {
      padding: 100px 0;
    }
  }
</style>
