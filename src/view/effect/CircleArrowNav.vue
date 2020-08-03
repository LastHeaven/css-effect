<template>
  <div class="body">
    <div class="circle-arrow left">
      <svg
          viewBox="0 0 31.61 28.38"
          id="arrow"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
      >
        <path
            d="M17 .16l-2 2.07A.54.54 0 0 0 15 3l8.29 8.29a.53.53 0 0 1-.38.91H.54a.54.54 0 0 0-.54.54v2.93a.54.54 0 0 0 .54.53h22.34a.54.54 0 0 1 .38.92L15 25.4a.54.54 0 0 0 0 .76l2 2.07a.54.54 0 0 0 .76 0l13.69-13.66a.54.54 0 0 0 0-.76L17.79.16a.54.54 0 0 0-.79 0z"
        ></path>
      </svg>
    </div>
    <div class="circle-arrow right">
      <svg
          viewBox="0 0 31.61 28.38"
          id="arrow"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
      >
        <path
            d="M17 .16l-2 2.07A.54.54 0 0 0 15 3l8.29 8.29a.53.53 0 0 1-.38.91H.54a.54.54 0 0 0-.54.54v2.93a.54.54 0 0 0 .54.53h22.34a.54.54 0 0 1 .38.92L15 25.4a.54.54 0 0 0 0 .76l2 2.07a.54.54 0 0 0 .76 0l13.69-13.66a.54.54 0 0 0 0-.76L17.79.16a.54.54 0 0 0-.79 0z"
        ></path>
      </svg>
    </div>

  </div>
</template>

<script>
// 用于transition
if ('registerProperty' in CSS) {
  CSS.registerProperty({
    name: '--pos',
    syntax: '<integer>',
    initialValue: '0',
    inherits: true
  })
}
export default {
  name: 'CircleArrowNav',
  setup () {
    // CSS.registerProperty({
    //   name: '--color',
    //   syntax: '<color>',
    //   initialValue: 'transparent',
    //   inherits: true
    // })
    //
  }
}
</script>

<style scoped>
  .body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #1a1e23;
  }

  .circle-arrow {
    --color: white;
    --radius: 1rem;
    --diameter: calc(var(--radius) * 2);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--diameter);
    height: var(--diameter);
    margin: calc(var(--radius) / 2);
    color: white;
    border-radius: 50%;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.4);
    cursor: pointer;
    transition: --pos 0.8s cubic-bezier(0.77, 0, 0.175, 1);
  }
  .circle-arrow svg {
    --arrow-width: calc(0.2 * var(--diameter));
    width: var(--arrow-width);
    height: var(--arrow-width);
    transform: rotate(-90deg);
  }
  .circle-arrow::before, .circle-arrow::after {
    position: absolute;
    content: "";
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: conic-gradient(var(--color) calc(var(--pos) * 1%), transparent 0);
    border-radius: inherit;
    mask: radial-gradient(transparent var(--radius), grey calc(var(--radius) + 0.5px), black var(--radius));
  }
  .circle-arrow::after {
    transform: scaleX(-1);
  }
  .circle-arrow:hover {
    --pos: 50;
  }
  .circle-arrow.left {
    transform: rotate(-90deg);
  }
  .circle-arrow.right {
    transform: rotate(90deg);
  }
</style>
