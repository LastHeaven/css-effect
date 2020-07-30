<template>
  <div class="body">
    <div class="snow" v-for="(snow, idx) in snows" :style="snow.style" :key="idx"></div>
  </div>
</template>

<script>

function randomRange (min, max) {
  return Math.random() * (max - min) + min
}

export default {
  name: 'RandomParticle',
  setup () {
    const snows = []
    for (let i = 0; i < 200; i++) {
      const x = Math.random() * 100
      const offset = randomRange(-10, 10)
      const xEnd = x + offset
      const xEndYoyo = x + (offset / 2)
      const yoyoTime = randomRange(0.3, 0.8)
      const yoyoY = yoyoTime * 100
      const scale = Math.random()
      const fallDuration = randomRange(10, 30)
      const fallDelay = -Math.random() * 30

      snows.push({
        style: {
          opacity: Math.random(),
          transform: `translate(${x}vw,-10px)`,
          // animation: `fall-snow ${fallDuration}s ${fallDelay}s linear infinite`,
          animationDuration: `${fallDuration}s`,
          animationDelay: `${fallDelay}s`,
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
          '--random-x-end': xEnd + 'vw',
          '--random-yoyo-y': yoyoY + 'vw',
          '--random-x-end-yoyo': xEndYoyo + 'vw',
          '--random-scale': scale
        }
      })
    }
    return {
      snows
    }
  }
}
</script>

<style scoped>
  .body {
    position: relative;
    height: 100vh;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    overflow: hidden;
    --random-x-end: 0;
    --random-yoyo-y: 0;
    --random-x-end-yoyo: 0;
    --random-scale: 0;
  }

  .snow {
    position: absolute;
    filter: drop-shadow(0 0 10px white);
    width: 10px;
    height: 10px;
    background: white;
    border-radius: 50%;
    animation: fall-snow;
  }

  @keyframes fall-snow {
    50% {
      transform: translate(var(--random-x-end), var(--random-yoyo-y)) scale(var(--random-scale));
    }
    to {
      transform: translate(var(--random-x-end-yoyo), 100vh) scale(var(--random-scale));
    }
  }
</style>
