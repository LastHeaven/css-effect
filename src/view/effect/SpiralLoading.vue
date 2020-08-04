<template>
<div class="body">
  <div class="loading">
    <div class="circle" v-for="(item, idx) in list" :style="item" :key="idx"></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'SpiralLoading',
  setup () {
    const list = []
    const count = 60

    for (let i = 0; i < count; i++) {
      const idx = i + 1
      const ratio = idx / count
      list.push({
        '--ratio': ratio
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
    background: black;
  }

  .circle {
    --ratio: 0;
    position: absolute;
    width: 0.5em;
    height: 0.5em;
    border-radius: 50%;
    background: white;
    opacity: 0;
    animation: move-to-center 3s ease-in-out infinite;
    transform: rotate(calc(var(--ratio) * 720deg)) translateX(4em);
    animation-delay: calc(var(--ratio) * 3s)
  }

  @keyframes move-to-center {
    to {
      opacity: 1;
      transform: translate(0, 0);
    }
  }
</style>
