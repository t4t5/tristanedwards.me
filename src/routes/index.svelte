<script>
  import Nav from "../components/Nav.svelte"
  import Top from "../components/Top.svelte"
  import Codespace from "../components/Codespace.svelte"
  import Ludu from "../components/Ludu.svelte"
  import Safello from "../components/Safello.svelte"
  import Freebies from "../components/Freebies.svelte"
  import Footer from "../components/Footer.svelte"
</script>

<svelte:head>
  <meta
    property="og:image"
    content={`https://tristanedwards.me/images/social.jpg`} />

  <title>Tristan Edwards | Designer & Developer</title>
  <meta
    name="description"
    content="Portfolio of designer & developer Tristan Edwards" />

</svelte:head>

<Nav />
<Top />
<Codespace />
<Ludu />
<Safello />
<Freebies />
<Footer />
