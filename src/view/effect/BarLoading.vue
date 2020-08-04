<template>
<div class="body">
  <div class="loading">
    <div class="bar" v-for="(item, idx) in list" :style="item" :key="idx"></div>
  </div>

</div>
</template>

<script>
export default {
  name: 'BarLoading',
  setup () {
    const list = []
    const styles = [
      ['bottom', 'top', 'scaleY(1)'],
      ['left', 'right', 'scaleX(1)'],
      ['top', 'bottom', 'scaleY(1)'],
      ['right', 'left', 'scaleX(1)'],
    ]
    for (let i = 0; i < 4; i++) {
      const style = styles[i]
      list.push({
        '--start': style[0],
        '--end': style[1],
        '--transform': style[2],
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
    background: #ECEFFC;
  }

  .loading {
    --loading-width: 45px;
    position: relative;
    width: var(--loading-width);
    height: var(--loading-width);
    transform: rotate(75deg);
  }
  .loading .bar {
    --start: bottom;
    --end: top;
    --transform: scaleY(1);
    position: absolute;
    animation: 1.5s cubic-bezier(0.645, 0.045, 0.355, 1) infinite;
    animation-name: slide;
  }
  .loading .bar:nth-child(1) {
    bottom: calc(var(--loading-width) / 3);
    width: calc(var(--loading-width) / 3);
    height: 100%;
    background: #0984e3;
    transform: scaleY(0);
    transform-origin: bottom;
  }
  .loading .bar:nth-child(2) {
    left: calc(var(--loading-width) / 3);
    width: 100%;
    height: calc(var(--loading-width) / 3);
    background: #d63031;
    transform: scaleX(0);
    transform-origin: left;
  }
  .loading .bar:nth-child(3) {
    top: calc(var(--loading-width) / 3);
    right: 0;
    width: calc(var(--loading-width) / 3);
    height: 100%;
    background: #fdcb6e;
    transform: scaleY(0);
    transform-origin: top;
  }
  .loading .bar:nth-child(4) {
    right: calc(var(--loading-width) / 3);
    bottom: 0;
    width: 100%;
    height: calc(var(--loading-width) / 3);
    background: #00b894;
    transform: scaleX(0);
    transform-origin: right;
  }

  @keyframes slide {
    50% {
      transform: var(--transform);
      transform-origin: var(--start);
    }
    50.1% {
      transform-origin: var(--end);
    }
    to {
      transform-origin: var(--end);
    }
  }
</style>
