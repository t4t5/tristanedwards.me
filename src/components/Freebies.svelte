<script>
  import HeartIcon from '../icons/heart.svg'
  import SweetAlert from '../icons/sweetalert.svg'
  import Ether from '../icons/ether.svg'
  import EmberSparks from '../icons/ember_sparks.svg'

  import FreebieCard from './FreebieCard.svelte'
</script>

<div class="bg">
  <HeartIcon width="22" height="20" />

  <p>
    I also do a lot of side projects, freebies and open-source work
  </p>

  <FreebieCard href="https://sweetalert.js.org" color="rgba(243,130,112,0.08)">
    <SweetAlert width="220" height="49" />
  </FreebieCard>

  <FreebieCard href="https://ether.se" color="rgba(144,60,242,0.06)">
    <Ether width="161" height="55" />
  </FreebieCard>

  <FreebieCard href="https://ember-sparks.github.io" color="rgba(242,144,60,0.06)">
    <EmberSparks width="245" height="31" />
  </FreebieCard>
</div>

<style>
  .bg {
    padding-top: 40px;
  }

  p {
    color: #5A90CF;
    max-width: 590px;
    margin: 20px auto;
  }
</style>
