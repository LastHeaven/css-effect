<template>
  <div class="body">
    <div class="mawaru">
      <div class="circle" v-for="(item, idx) in list" :style="item" :key="idx"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mawaru',
  setup () {
    const list = []
    const colors = ['#50514F',
      '#F25F5C',
      '#FFE066',
      '#247BA0',
      '#70C1B3',
      '#1D3557',
      '#88ABC0',
      '#FFCDB2']

    for (let i = 0; i < 10; i++) {
      const r = 4 * (i + 1) + 'em'
      const delay = 0.4 * (i + 1) + 's'
      list.push({
        '--color': colors[i],
        '--color1': colors[i],
        zIndex: 8 - i,
        width: r,
        height: r,
        animationDelay: delay
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
    height: 100vh;
    justify-content: center;
    align-items: center;
    background: #b3e5fc;
  }

  .mawaru {
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .mawaru .circle {
    position: absolute;
    background: conic-gradient(var(--color1) var(--pos), var(--color2) 0);
    border-radius: 50%;
    animation: pos 0.6s linear 2, color1 1.2s step-end, color2 1.2s step-end;
  }

  @keyframes pos {
    to {
      --pos: 100%;
    }
  }
  @keyframes color1 {
    50% {
      --color1: transparent;
    }
  }

  @keyframes color2 {
    50% {
      --color2: var(--color);
    }
  }
</style>
