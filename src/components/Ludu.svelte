<script>
  import LuduLogomark from '../icons/ludu_logomark.svg'
  import LuduLogotype from '../icons/ludu_logotype.svg'

  import CourseCard from './CourseCard.svelte'
</script>

<div class="bg">
  <LuduLogomark width="74" height="42" />

  <p>
    I aspire to reinvent education with
    <span class="ludu-logo">
      Ludu
      <LuduLogotype width="86" height="46" />
    </span>
  </p>

  <p>
    Check out some of my online courses there!
  </p>

  <div class="courses">
    <CourseCard
      href="https://www.ludu.co/course/discover-elixir-phoenix"
      namespace="phoenix"
      color="purple"
      title="Discover Elixir & Phoenix"
      desc="Functional programming made fun & simple"
    />

    <CourseCard
      href="https://www.ludu.co/course/ethereum"
      namespace="ethereum"
      color="dark"
      title="Discover Ethereum & Solidity"
      desc="Unleash the power of blockchain applications"
    />
  </div>
</div>

<style>
  .bg {
    padding-top: 45px;
    background-image: linear-gradient(180deg, #94C270 0%, #38AB6D 100%);
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

  .ludu-logo {
    font-size: 0;
  }

  .courses {
    text-align: center;
    margin-top: 80px;
    padding-bottom: 40px;
  }
</style>
