<template>
  <div class="body">
    <ul>
      <li><a href="#">home</a></li>
      <li><a href="#">archives</a></li>
      <li><a href="#">tags</a></li>
      <li><a href="#">categories</a></li>
      <li><a href="#">about</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MenuHoverFillText'
}
</script>

<style scoped>
  @import url("https://fonts.googleapis.com/css?family=Raleway:400,400i,700");
  .body {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #1A1E23;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    list-style-type: none;
  }
  ul li {
    padding: 6px 0;
  }
  ul li a {
    --fill-color: #198CE6;
    position: relative;
    display: block;
    padding: 4px 0;
    font: 700 3rem Raleway, sans-serif;
    text-decoration: none;
    text-transform: uppercase;
    -webkit-text-stroke: 2px var(--fill-color);
    background: linear-gradient(var(--fill-color) 0 100%) left/0 no-repeat;
    color: transparent;
    background-clip: text;
    transition: 0.5s linear;
  }
  ul li a:hover {
    background-size: 100%;
  }
</style>
