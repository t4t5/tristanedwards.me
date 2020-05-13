<script>
  export let dark
  export let activePage = "home"
</script>

<nav data-dark={dark}>
  <a data-active={activePage === 'home'} href="/">Home</a>
  <a data-active={activePage === 'blog'} href="/blog">Blog</a>
</nav>

<style>
  nav {
    position: absolute;
    top: 30px;
    left: 30px;
    color: white;
    z-index: 100;
    text-transform: uppercase;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.6);
  }

  nav[data-dark] {
    color: rgba(0, 0, 0, 0.6);
  }

  a {
    margin-right: 35px;
    position: relative;
  }

  a[data-active="true"] {
    color: white;
  }

  nav[data-dark] a[data-active="true"] {
    color: black;
  }

  a[data-active="true"]::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -10px;
    height: 1px;
    background-color: white;
  }

  nav[data-dark] a[data-active="true"]::after {
    background-color: black;
  }

  @media (max-width: 600px) {
    nav {
      text-align: center;
      left: 50%;
      transform: translate(-50%);
      white-space: nowrap;
      top: 20px;
      font-size: 14px;
    }

    a[data-active="true"]::after {
      bottom: -5px;
    }
  }
</style>
