<template>
  <div class="body">
    <div class="star" v-for="(style, idx) in list" :style="style" :key="idx"></div>
  </div>
</template>

<script>
import { randomRange, random } from '@/utils/math'

export default {
  name: 'StarBurst',
  setup () {
    const list = []
    const starColors = ['#4FC1E9', '#5D9CEC', '#F5F7FA']
    const count = 100
    const basicDuration = 1
    const timeScale = 3

    for (let i = 0; i < count; i++) {
      const starColor = starColors[random(starColors.length)]
      list.push({
        '--star-color': starColor,
        '--star-tail-color': starColor + (75).toString(16),
        '--star-tail-rate': randomRange(500, 1000) / 100,
        '--rotate-deg': random(360) + 'deg',
        '--shoot-duration': (randomRange(0, 1000) / 1000 + basicDuration - 0.6) * timeScale + 's',
        '--shoot-delay': (-randomRange(0, 1000) / 1000 - basicDuration) * timeScale + 's'
      })
    }

    return { list }
  }
}
</script>

<style scoped>
  .body {
    background: radial-gradient(ellipse at bottom, #0d1d31 0%, #0c0d13 100%);
    margin: 0;
    overflow: hidden;
    height: 100vh;
  }

  .star {
    --star-width: 1em;
    --star-tail-rate: 4;
    --star-tail-width: calc(var(--star-tail-rate) * var(--star-width));
    --star-tail-radius-rate: calc(50% / var(--star-tail-rate));
    --easing-function: cubic-bezier(0.45, 0, 0.55, 1);
    --rotate-deg: 0;
    --shoot-duration: 0s;
    --shoot-delay: 0s;
    --star-tail-color: #000;

    position: absolute;
    top: 50vh;
    left: 50vw;
    width: var(--star-width);
    height: var(--star-width);
    background: var(--star-color);
    border-radius: 50%;
    transform: rotate(var(--rotate-deg)) translateX(0);
    will-change: transform;
    filter: blur(1px) contrast(2);
    animation: shoot var(--shoot-duration) var(--shoot-delay) var(--easing-function) infinite;
  }

  .star:before {
    position: absolute;
    content: "";
    width: var(--star-tail-width);
    height: 100%;
    background: linear-gradient(
        90deg,
        var(--star-tail-color),
        transparent
    );
    border-radius: var(--star-tail-radius-rate) 0% 0% var(--star-tail-radius-rate) / 50% 0% 0% 50%;
  }

  @keyframes shoot {
    to {
      transform: rotate(var(--rotate-deg)) translateX(-70vw);
    }
  }
</style>
