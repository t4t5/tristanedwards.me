<script>
  import BlogLayout from "../components/BlogLayout.svelte"
  import Nav from "../components/Nav.svelte"
  import ArrowIcon from "../icons/arrow.svg"

  import { _metadata as sweetalertPost } from "./blog/announcing-sweetalert-2-0.mdx"
  import { _metadata as glimmerPost } from "./blog/why-im-excited-about-glimmerjs.mdx"

  const posts = [sweetalertPost, glimmerPost]
</script>

<Nav dark activePage="blog" />

{#each posts as post}
  <BlogLayout snippet {...post}>
    <p>{post.desc}</p>
    <a href={`/blog/${post.url}`}>
      Keep reading
      <ArrowIcon />
    </a>
  </BlogLayout>
{/each}

<style>
  a {
    display: flex;
    align-items: center;
    font-family: ProximaNova, Helvetica Neue, sans-serif;
    font-size: 20px;
    color: rgba(0, 84, 204, 0.85);
    font-weight: 600;
    float: right;
  }

  a:hover {
    text-decoration: underline;
  }

  a :global(svg) {
    margin-left: 10px;
  }
</style>
