<script>
  export let namespace
  export let width = 42
  export let height = 42

  import Twitter from '../icons/social/twitter.svg'
  import Dribbble from '../icons/social/dribbble.svg'
  import Github from '../icons/social/github.svg'

  import TwitterLines from '../icons/social/twitter_lines.svg'
  import DribbbleLines from '../icons/social/dribbble_lines.svg'
  import GithubLines from '../icons/social/github_lines.svg'

  const icons = {
    twitter: Twitter,
    dribbble: Dribbble,
    github: Github,
  }

  const lineIcons = {
    twitter: TwitterLines,
    dribbble: DribbbleLines,
    github: GithubLines,
  }

  const Icon = icons[namespace]
  const LineIcon = lineIcons[namespace]
</script>

<a href="https://twitter.com/t4t5" style="width: {width}px; height: {height}px;"}>
  <Icon />
  <LineIcon />
</a>

<style>
  a {
    display: inline-block;
    position: relative;
    vertical-align: middle;
    margin: 20px;
    margin-top: 80px;
  }

  a :global(> svg) {
    position: absolute;
    left: 0;
    top: 0;
    width: inherit;
    height: inherit;
  }

  a :global(> svg:last-child) {
    opacity: 0;
  }

  a:hover :global(> svg:first-child) {
    animation: pulseIcon 0.3s;
  }

  a:hover :global(> svg:last-child) {
    animation: poofIcon 0.4s ease-out;
  }

  @keyframes pulseIcon {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes poofIcon {
    0% {
      opacity: 0;
    }
    30% {
      opacity: 0.3;
    }
    100% {
      opacity: 0;
      transform: scale(2.4);
    }
  }
</style>
