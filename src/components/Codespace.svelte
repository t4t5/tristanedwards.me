<div class="bg">
  <a href="https://codespace.app" target="_blank">
    <div class="logo" />
  </a>

  <div class="text">
    <p>
      My latest project is
      <a href="https://codespace.app" target="_blank">Codespace</a>
    </p>
    <p>A beautiful cross-platform code snippet manager.</p>
  </div>

  <div class="screenshot" />
</div>

<style>
  .bg {
    padding-top: 60px;
    background-image: linear-gradient(134deg, #a0c6e7 0%, #e8eae2 100%);
  }

  .logo {
    width: 123px;
    height: 123px;
    background-image: url(/images/codespace_icon.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    margin: 0 auto;
  }

  .screenshot {
    height: 378px;
    max-width: 1050px;
    background-image: url(/images/codespace_screenshot.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom center;
    margin: 0 auto;
  }

  @media (max-width: 850px) {
    .screenshot {
      height: 250px;
    }
  }

  @media (max-width: 550px) {
    .screenshot {
      height: 200px;
    }
  }

  @media (max-width: 450px) {
    .bg {
      padding-bottom: 70px;
    }

    .screenshot {
      display: none;
    }
  }

  .text {
    margin-top: 40px;
  }

  p {
    color: #536d7c;
  }

  p a {
    font-weight: 600;
  }
</style>
