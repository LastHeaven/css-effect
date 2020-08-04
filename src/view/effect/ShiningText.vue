<template>
  <div class="body">
    <p class="shining">fushigi no monogatari</p>
  </div>
</template>

<script>
export default {
  name: 'ShiningText'
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

  .shining {
    font-size: 2em;
    font-family: Lato, sans-serif;
    letter-spacing: 4px;
    text-transform: uppercase;
    background: linear-gradient(90deg, black 0%, white 50%, black 100%) no-repeat;
    background-size: 80%;
    color: transparent;
    background-clip: text;
    animation: shining 3s linear infinite;
  }

  @keyframes shining {
    from {
      background-position: -500%;
    }
    to {
      background-position: 500%;
    }
  }
</style>
