<script>
  export let href
  export let color
</script>

<a href={href} target="_blank" style={`background-color: ${color}`}>
  <slot />
</a>

<style>
  a {
    border-radius: 14px;
    width: 245px;
    height: 60px;
    padding: 20px;
    margin: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: top;
    transition: box-shadow 0.2s, transform 0.2s;
  }

  a:hover {
    box-shadow: 0px 13px 40px #0000001f;
    transform: translateY(-5px);
  }
</style>
