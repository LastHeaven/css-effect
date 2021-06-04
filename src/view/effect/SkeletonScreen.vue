<template>
  <div class="padding">
    <div v-for="(item, idx) in [1,1,1]" :key="idx" class="skeleton-item anim-opacity mb-2" :class="`animation-delay-${idx}`">
      <div class="skeleton-text" style="height: 300px;width: 300px"></div>
      <div class="skeleton-text"></div>
      <div class="skeleton-text" style="width:70%"></div>
      <div class="skeleton-text" style="width:40%"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkeletonScreen'
}
</script>

<style scoped>
  .padding {
    padding: 20px;
  }

  .mb-2 {
    margin-bottom: 20px;
  }

  .skeleton-item {
    padding: 16px;
    border: 1px solid #eeeeee;
    border-bottom: 3px solid #eee;
  }

  .skeleton-text {
    height: 16px;
    background: #e2e2e2;
    margin-top: 12px;
    border-radius: 4px;
  }

  .skeleton-text:first-child {
    margin-top: 0;
  }
  .anim-opacity {
    animation: 1.5s opacity2 0s infinite;
  }
  .animation-delay-0 {
    animation-delay: 0s;
  }
  .animation-delay-1 {
    animation-delay: 0.5s;

  }
  .animation-delay-2 {
    animation-delay: 1s;
  }

  @keyframes opacity2 {
    0% {
      opacity: 0.5
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }
</style>
