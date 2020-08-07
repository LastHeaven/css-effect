<template>
  <div class="body">
    <div class="diamond-grid">
      <div></div>
      <img src="https://picsum.photos/200" alt="" class="diamond-grid__item">
      <div></div>
      <img src="https://picsum.photos/300" alt="" class="diamond-grid__item">
      <div></div>
      <img src="https://picsum.photos/400" alt="" class="diamond-grid__item">
      <div></div>
      <img src="https://picsum.photos/500" alt="" class="diamond-grid__item">
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DiamondGrid'
}
</script>

<style scoped>
  .body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #f7f7fd;
  }

  .diamond-grid {
    --diamond-grid-gap: 0.2rem;
    --diamond-grid-offset: calc(50% - var(--diamond-grid-gap));
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.2));
    transform: rotateZ(0);
  }
  .diamond-grid__item {
    position: relative;
    width: 160px;
    height: 160px;
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  }
  .diamond-grid__item:nth-child(2) {
    top: var(--diamond-grid-offset);
  }
  .diamond-grid__item:nth-child(8) {
    bottom: var(--diamond-grid-offset);
  }
  .diamond-grid__item:nth-child(4) {
    left: var(--diamond-grid-offset);
  }
  .diamond-grid__item:nth-child(6) {
    right: var(--diamond-grid-offset);
  }
</style>
