<template>
  <div class="body">
    <p>Emilia</p>
    <div class="card">
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SnowScratch'
}
</script>

<style scoped>
  @import url(https://fonts.googleapis.com/css?family=Lato);
  .body {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: black;
  }

  .card {
    width: 30em;
    height: 30em;
    padding: 10em;
    display: flex;
    flex-wrap: wrap;
    background: black;
    filter: blur(15px) contrast(30);
  }
  .card .snow {
    position: relative;
    width: 3em;
    height: 3em;
    border-radius: 100%;
  }
  .card .snow::after {
    position: absolute;
    content: "";
    left: 0;
    width: inherit;
    height: inherit;
    background: white;
    transition: 30s cubic-bezier(0.19, 1, 0.22, 1);
  }
  .card .snow:hover::after {
    transform: scale(0);
    transition-duration: 0.3s;
  }

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 9999;
    color: white;
    font-family: Lato, sans-serif;
    font-size: 4em;
    line-height: 1em;
    letter-spacing: 0.1em;
    transform: translate(-47%, -160%);
    pointer-events: none;
    filter: blur(1px) contrast(20);
  }
</style>
