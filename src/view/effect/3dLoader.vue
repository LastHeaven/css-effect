<template>
<div class="body">
  <div class="loader">
    <div class="arc"></div>
    <div class="arc"></div>
    <div class="arc"></div>
  </div>
</div>
</template>

<script>
export default {
  name: '3DLoader'
}
</script>

<style scoped>
  .body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: black;
  }

  .loader {
    --loading-color: var(--info-color);
    position: relative;
    transform-style: preserve-3d;
    perspective: 800;
    width: 36px;
    height: 36px;
    display: flex;
    flex-wrap: wrap;
  }
  .loader .arc {
    --rotateX: 0;
    --rotateY: 0;
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border-bottom: 3px solid var(--primary-color);
    animation: rotate 1.15s linear infinite;
  }
  .loader .arc:nth-child(1) {
    --rotateX: 35deg;
    --rotateY: -45deg;
    animation-delay: -0.8s;
  }
  .loader .arc:nth-child(2) {
    --rotateX: 50deg;
    --rotateY: 10deg;
    animation-delay: -0.4s;
  }
  .loader .arc:nth-child(3) {
    --rotateX: 35deg;
    --rotateY: 55deg;
    animation-delay: 0s;
  }

  @keyframes rotate {
    from {
      transform: rotateX(var(--rotateX)) rotateY(var(--rotateY)) rotateZ(0);
    }
    to {
      transform: rotateX(var(--rotateX)) rotateY(var(--rotateY)) rotateZ(1turn);
    }
  }
</style>
