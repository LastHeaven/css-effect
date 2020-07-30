<template>
  <div class="body">
    <div class="reveal"><span v-for="(span,idx) in spans" :key="idx" :style="span.style">{{span.letter}}</span></div>
  </div>
</template>

<script>
export default {
  name: 'TextSplit',
  setup () {
    const text = 'sword art online'
    const delay = 0.3
    const letters = text.split('')
    const middle = letters.filter(e => e !== ' ').length / 2
    const spans = letters.map((letter, i) => {
      return {
        letter,
        style: `animation-delay: ${delay + Math.abs(i - middle) * 0.1}s;`
      }
    })

    return {
      spans
    }
  }
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
    background: #222;
  }

  .reveal {
    position: relative;
    display: flex;
    color: #6ee1f5;
    font-size: 2em;
    font-family: Raleway, sans-serif;
    letter-spacing: 3px;
    text-transform: uppercase;
    white-space: pre;
  }
  .reveal span {
    opacity: 0;
    transform: scale(0);
    animation: fadeIn 2.4s forwards;
  }
  .reveal::before, .reveal::after {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    width: 2px;
    height: 100%;
    background: white;
    opacity: 0;
    transform: scale(0);
  }
  .reveal::before {
    left: 50%;
    animation: slideLeft 1.5s cubic-bezier(0.7, -0.6, 0.3, 1.5) forwards;
  }
  .reveal::after {
    right: 50%;
    animation: slideRight 1.5s cubic-bezier(0.7, -0.6, 0.3, 1.5) forwards;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  @keyframes slideLeft {
    to {
      left: -6%;
      opacity: 1;
      transform: scale(0.9);
    }
  }
  @keyframes slideRight {
    to {
      right: -6%;
      opacity: 1;
      transform: scale(0.9);
    }
  }
</style>
