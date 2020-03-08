<script>
  import CourseIcon from '../icons/course_icons/phoenix.svg'
</script>

<div class="card">
  <div class="cover">
    <CourseIcon width={100} height={100} />
  </div>

  <h6>
    Discover Elixir & Phoenix
  </h6>

  <p>
    Functional programming made fun & simple
  </p>
</div>

<style>
  .card {
    width: 265px;
    background: white;
    box-shadow: 0 0 1px 0 rgba(0,0,0,0.65), 0 1px 2px 0 rgba(0,0,0,0.10);
    border-radius: 3px;
  }

  .cover {
    background-image: linear-gradient(164deg, #9065FB 0%, #7165FB 100%);
  }

  h6 {
    font-weight: bold;
    font-size: 18px;
    color: rgba(0,0,0,0.80);
  }

  p {
    font-size: 15px;
    color: rgba(0,0,0,0.65);
  }
</style>
