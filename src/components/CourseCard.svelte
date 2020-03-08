<script>
  export let href = ""
  export let namespace = ""
  export let color = "dark"
  export let title = ""
  export let desc = ""
</script>

<a class="card" href={href} target="_blank">
  <span class="cover" data-color={color}>
    <span class="course-icon" style={`background-image: url(/images/course_icons/${namespace}.png)`} />
  </span>

  <h6>
    {title}
  </h6>

  <p>
    {desc}
  </p>
</a>

<style>
  .card {
    width: 265px;
    height: 310px;
    background: white;
    box-shadow: 0 0 1px 0 rgba(0,0,0,0.65), 0 1px 2px 0 rgba(0,0,0,0.10);
    border-radius: 3px;
    display: inline-block;
    margin: 0 15px;
    cursor: pointer;
    position: relative;
    z-index: 10;
    transition: box-shadow 0.2s, transform 0.2s;
  }

  .card:hover {
    box-shadow: 0 0 1px 0 rgba(0,0,0,0.65), 0 0 30px #00000029;
    transform: scale(1.02);
  }

  .cover {
    background-image: linear-gradient(164deg, #9065FB 0%, #7165FB 100%);
    height: 157px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cover[data-color="dark"] {
    background-image: linear-gradient(164deg, #414780 0%, #453B5C 100%);
  }

  .course-icon {
    width: 100px;
    height: 100px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }

  h6 {
    font-weight: bold;
    font-size: 18px;
    color: rgba(0,0,0,0.80);
    margin-top: 25px;
    margin-bottom: 15px;
  }

  p {
    font-size: 15px;
    color: rgba(0,0,0,0.65);
  }
</style>
