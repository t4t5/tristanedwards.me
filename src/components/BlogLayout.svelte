<script>
  import moment from "moment"
  import Nav from "../components/Nav.svelte"

  export let title
  export let cover
  export let date
  export let url
  export let snippet
  export let desc

  const formattedDate = moment(date).format("MMM D, YYYY")
  const fullTitle = `${title} | Blog | Tristan Edwards`
</script>

<svelte:head>
  <link rel="stylesheet" href="/dracula.css" />
  <link
    href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,400&display=swap"
    rel="stylesheet" />

  {#if !snippet}
    <!-- Primary Meta Tags -->
    <title>{fullTitle}</title>
    <meta name="title" content={title} />
    <meta name="description" content={desc} />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={desc} />

    {#if cover}
      <meta
        property="og:image"
        content={`https://tristanedwards.me/${cover}`} />
    {/if}

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={desc} />

    {#if cover}
      <meta
        property="twitter:image"
        content={`https://tristanedwards.me/${cover}`} />
    {/if}
  {/if}
</svelte:head>

{#if !snippet}
  <Nav dark activePage="blog" />
{/if}

<div class="blog">
  <header>
    <img class="avatar" src="/images/tristan.jpg" alt="Tristan Edwards" />
    <address>
      <a rel="author" href="/blog">Tristan Edwards</a>
    </address>
    <span class="divider">/</span>
    <time pubdate datetime={date}>{formattedDate}</time>
  </header>

  {#if snippet}
    <a class="title" href={`/blog/${url}`}>{title}</a>
  {:else}
    <h1>{title}</h1>
  {/if}

  <img src={cover} class={!snippet && 'wide'} alt="Cover picture" />

  <div class="content">
    <slot />
  </div>

  {#if !snippet}
    <div class="follow-box">
      <img class="avatar" src="/images/tristan.jpg" alt="Tristan Edwards" />
      <i>
        Don’t want to miss any future tutorials or updates on the things I’m
        building?
        <a href="https://twitter.com/t4t5" target="_blank">
          Follow me on Twitter!
        </a>
      </i>
    </div>
  {/if}
</div>

<style>
  header {
    font-family: ProximaNova, Helvetica Neue, sans-serif;
    font-size: 16px;
    color: rgba(39, 43, 49, 0.7);
    display: flex;
    align-items: center;
  }

  address {
    font-style: normal;
  }

  address a:hover {
    text-decoration: underline;
  }

  .divider {
    margin: 0 5px;
  }

  .blog .avatar {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    margin-right: 14px;
    display: inline-block;
  }

  .blog {
    font-family: "Merriweather", serif;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.85);
    line-height: 35px;
    max-width: 702px;
    margin: 100px auto;
    text-align: left;
    padding: 0 20px;
  }

  h1,
  .title {
    font-size: 36px;
    color: rgba(0, 0, 0, 0.9);
    line-height: 45px;
  }

  a.title:hover {
    text-decoration: underline;
  }

  .blog :global(h1),
  .blog :global(h2),
  .blog :global(.title),
  .blog :global(p) {
    display: block;
    padding: 10px 0;
  }

  .blog :global(h2) {
    padding-top: 30px;
    padding-bottom: 10px;
  }

  .blog :global(img) {
    max-width: 100%;
    margin: 20px 0;
    border-radius: 5px;
  }

  .blog :global(img.wide) {
    max-width: 90vw;
    left: 50%;
    position: relative;
    transform: translateX(-50%);
  }

  .blog :global(img + em) {
    text-align: center;
    display: block;
    margin-top: -10px;
    margin-bottom: 10px;
    opacity: 0.7;
    font-size: 16px;
  }

  .blog .content :global(a) {
    color: #1d70db;
  }
  .blog .content :global(a:hover) {
    text-decoration: underline;
  }

  .blog :global(code) {
    background-color: #e1e1e1;
    color: black;
    padding: 2px 5px 5px 5px;
    border-radius: 5px;
  }

  .blog :global(pre) {
    background-color: #1b1643;
    color: white;
    padding: 20px;
    border-radius: 10px;
    font-size: 16px;
    line-height: 25px;
    box-shadow: 0px 1px 20px #00000038;
    white-space: pre-wrap;
  }

  .blog :global(pre code.language-htmlbars > .hljs-comment) {
    display: block;
  }

  .blog :global(pre code) {
    background-color: transparent;
    color: inherit;
    padding: 0;
  }

  .blog :global(blockquote) {
    border-left: 4px solid #ffd0d0;
    margin: 20px 0;
    padding-left: 30px;
    color: #535353;
  }

  .follow-box {
    margin-top: 40px;
    display: flex;
    align-items: center;
  }

  .follow-box .avatar {
    width: 120px;
    height: 120px;
    margin: 0;
    margin-right: 28px;
  }

  .follow-box a {
    color: #04a7e6;
  }

  .follow-box a:hover {
    text-decoration: underline;
  }

  @media (max-width: 600px) {
    .blog {
      font-size: 15px;
      line-height: 26px;
    }

    h1,
    .title {
      font-size: 27px;
      line-height: 35px;
    }

    .blog :global(img + em) {
      font-size: 13px;
    }

    .blog :global(pre) {
      font-size: 13px;
      line-height: 21px;
    }

    .follow-box {
      flex-direction: column;
    }

    .follow-box .avatar {
      width: 70px;
      height: 70px;
      margin-bottom: 10px;
    }
  }
</style>
