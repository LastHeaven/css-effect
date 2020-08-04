<template>
<div class="body">
  <div class="loading">
    <div class="block" v-for="(item, idx) in list" :style="item" :key="idx"></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'SpiralStairLoader',
  setup () {
    const list = []
    const count = 240

    const zOffset = 500

    for (let i = 0; i < count; i++) {
      const idx = i + 1
      const ratio = idx / count
      list.push({
        '--ratio': ratio,
        '--z-ratio1': zOffset * ratio + 1.6 * idx + 'px',
        '--z-ratio2': zOffset * ratio + 12 * idx - 7200 + 'px',
      })
    }
    return {
      list
    }
  }
}
</script>

<style scoped>
.body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  filter: drop-shadow(0 0 15px var(--primary-color));
  overflow: hidden;
}
.loading {
  perspective: 240px;
  transform-style: preserve-3d;
  transform: rotateX(1deg) rotateY(-3deg) rotateZ(-15deg);
}

.block {
  --duration: 3s;
  --ring-radius: 5.5em;
  --ratio: 0;
  --z-ratio: 0;
  --z-ratio1: 0;
  --z-ratio2: 0;
  position: absolute;
  width: 5em;
  height: 0.6em;
  opacity: 0;
  background: white;
  transform: rotate(calc(var(--ratio) * 3240deg)) translateX(var(--ring-radius)) translateZ(var(--z-ratio1));
  animation: blink-in var(--duration) calc(var(--ratio) * var(--duration)) steps(1) infinite, go-forth calc(var(--duration) * 60) linear infinite;
}

@keyframes go-forth {
  to {
    transform: rotate(calc(var(--ratio) * 3240deg)) translateX(var(--ring-radius)) translateZ(var(--z-ratio2));
  }
}

@keyframes blink-in {
  from {
    opacity: 0.2;
  }

  50% {
    opacity: 0.6;
  }

  to {
    opacity: 0.4;
  }
}
</style>
