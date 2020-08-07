<template>
  <div class="body">
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
  name: 'MaskLoader'
}
</script>

<style scoped>
  .body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: black;
    --primary-color-transparent: hsla(196, 78%, 61%, 0.1);
  }

  .loader {
    --loader-width: 4em;
    --loader-stroke-color: var(--primary-color);
    --loader-stroke: 2px;
    --loader-border: 2px;
    --loader-border-color: var(--primary-color-transparent);
    --loading-color: var(--info-color);
    width: 36px;
    height: 36px;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    box-shadow: inset 0 0 0 var(--loader-border) var(--loader-border-color);
    border-radius: 50%;
  }

  .loader::before {
     position: absolute;
     content: "";
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     border-radius: inherit;
     box-shadow: inset 0 0 0 var(--loader-stroke) var(--loader-stroke-color);
     clip-path: inset(0 50% 0 0);
     mask: linear-gradient(black, transparent);
     animation: spin 1s linear infinite;
   }

  @keyframes spin {
    to {
      transform: rotate(1turn);
    }
  }

</style>
