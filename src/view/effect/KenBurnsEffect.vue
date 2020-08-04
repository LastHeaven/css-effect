<template>
<div class="body">
  <main>
    <ul class="ken-burns-slideshow">
      <li class="slide" id="slide1"></li>
      <li class="slide" id="slide2"></li>
      <li class="slide" id="slide3"></li>
      <li class="slide" id="slide4"></li>
    </ul>
    <section>
      <h1>Pure CSS Ken Burns Effect</h1>
    </section>
  </main>
</div>
</template>

<script>
export default {
  name: 'KenBurnsEffect'
}
</script>

<style scoped>
  @import url("https://fonts.googleapis.com/css?family=Lora:400,400i,700");
  .body {
    margin: 0;
    padding: 0;
    background: black;
  }

  main {
    position: relative;
    z-index: 0;
    height: 100vh;
  }

  .ken-burns-slideshow {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    list-style-type: none;
  }
  .ken-burns-slideshow .slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    opacity: 0;
    transform: scale(1.2);
    animation: kenburns 24s linear infinite;
  }
  .ken-burns-slideshow .slide:nth-child(1) {
    background-image: linear-gradient(rgba(16, 16, 16, 0.8), rgba(16, 16, 16, 0.8)), url("https://cdn.jsdelivr.net/gh/LastHeaven/picture@1.1/theme1.jpg");
    animation-delay: 0s;
  }
  .ken-burns-slideshow .slide:nth-child(2) {
    background-image: linear-gradient(rgba(16, 16, 16, 0.8), rgba(16, 16, 16, 0.8)), url("https://cdn.jsdelivr.net/gh/LastHeaven/picture@1.1/theme2.jpg");
    animation-delay: 6s;
  }
  .ken-burns-slideshow .slide:nth-child(3) {
    background-image: linear-gradient(rgba(16, 16, 16, 0.8), rgba(16, 16, 16, 0.8)), url("https://cdn.jsdelivr.net/gh/LastHeaven/picture@1.1/theme3.jpg");
    animation-delay: 12s;
  }
  .ken-burns-slideshow .slide:nth-child(4) {
    background-image: linear-gradient(rgba(16, 16, 16, 0.8), rgba(16, 16, 16, 0.8)), url("https://cdn.jsdelivr.net/gh/LastHeaven/picture@1.1/theme4.jpg");
    animation-delay: 18s;
  }

  @keyframes kenburns {
    10% {
      opacity: 1;
    }
    25% {
      opacity: 1;
      transform: scale(1);
    }
    40% {
      opacity: 0;
      transform: scale(1);
    }
  }
  section {
    display: grid;
    place-items: center;
    height: 100%;
    color: white;
  }
  section h1 {
    font-size: 250%;
    text-shadow: 0 2px 2px black;
  }
</style>
