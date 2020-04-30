<script>
  import LuduLogomark from "../icons/ludu_logomark.svg"
  import LuduLogotype from "../icons/ludu_logotype.svg"

  import CourseCard from "./CourseCard.svelte"
</script>

<div class="bg">
  <a href="https://ludu.co" target="_blank">
    <LuduLogomark width="74" height="42" />
  </a>

  <p>
    I aspire to reinvent education with
    <a href="https://ludu.co" target="_blank" class="ludu-logo">
      Ludu
      <LuduLogotype width="86" height="46" />
    </a>
  </p>

  <p>Check out some of my online courses there!</p>

  <div class="courses">
    <CourseCard
      href="https://www.ludu.co/course/discover-elixir-phoenix"
      namespace="phoenix"
      color="purple"
      title="Discover Elixir & Phoenix"
      desc="Functional programming made fun & simple" />

    <CourseCard
      href="https://www.ludu.co/course/ethereum"
      namespace="ethereum"
      color="dark"
      title="Discover Ethereum & Solidity"
      desc="Unleash the power of blockchain applications" />
  </div>
</div>

<style>
  .bg {
    padding-top: 45px;
    background-image: linear-gradient(180deg, #94c270 0%, #38ab6d 100%);
    position: relative;
  }

  .bg::before {
    content: "";
    background-image: url(/images/ludu_bg.png);
    background-size: cover;
    background-position: top center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .bg * {
    position: relative;
  }

  .ludu-logo {
    font-size: 0;
    margin-left: 5px;
    display: inline-block;
    bottom: -3px;
    position: relative;
  }

  .courses {
    text-align: center;
    margin-top: 80px;
    padding-bottom: 40px;
  }

  @media (max-width: 600px) {
    .ludu-logo {
      margin-top: 10px;
    }

    p:first-of-type {
      margin-top: 20px;
    }

    .courses {
      margin-top: 20px;
    }
  }
</style>
