<footer>
  <div class="avatar" />

  <a href="mailto:tristan.edwards@me.com">Contact me</a>
</footer>

<style>
  footer {
    background: #e7e6f2;
    padding: 40px 20px;
    margin-top: 100px;
    position: relative;
  }

  footer::before {
    content: "";
    position: absolute;
    top: -53px;
    left: 0;
    right: 0;
    height: 56px;
    background-image: url(/images/transition.svg);
    background-position: bottom center;
    background-repeat: repeat-x;
  }

  .avatar {
    width: 108px;
    height: 108px;
    border-radius: 50%;
    background-image: url(/images/tristan.jpg);
    background-size: cover;
    margin: 20px auto;
  }

  a {
    background-color: #6976db;
    box-shadow: 0 1px 13px 0 rgba(105, 118, 219, 0.36);
    border-radius: 14px;
    padding: 14px 30px;
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 20px;
    display: inline-block;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  a:hover {
    transform: translateY(-2px);
    box-shadow: 0 3px 15px 0 rgba(105, 118, 219, 0.56);
  }
</style>
