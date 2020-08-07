<template>
  <div class="body">
    <ul class="menu-hover-fill flex flex-col items-start leading-none text-2xl uppercase space-y-4">
      <li><a href="#" data-text="home">home</a></li>
      <li><a href="#" data-text="archives">archives</a></li>
      <li><a href="#" data-text="tags">tags</a></li>
      <li><a href="#" data-text="categories">categories</a></li>
      <li><a href="#" data-text="about">about</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MenuHoverSlideFill'
}
</script>

<style scoped>
  .body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: black;
    --grey-color: #7f8c8d;
  }

  .uppercase {
    text-transform: uppercase;
  }

  .space-y-4>*~* {
    margin-top: 1rem!important;
  }

  .leading-none {
    line-height: 1;
  }
  .text-2xl {
    font-size: 1.5rem;
  }

  .items-start {
    align-items: flex-start;
  }
  .flex-col {
    flex-direction: column;
  }
  .flex {
    display: flex;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  .menu-hover-fill li {
    position: relative;
    z-index: 0;
  }
  .menu-hover-fill li::before {
    position: absolute;
    content: "";
    top: 0;
    left: -1rem;
    width: 0.25rem;
    height: 100%;
    background: var(--menu-link-active-color);
    transition: 0.6s;
  }
  .menu-hover-fill li a {
    --menu-link-color: var(--grey-color);
    position: relative;
    background: linear-gradient(var(--menu-link-active-color) 0 100%) left/0 no-repeat;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    transition: background-size 0.45s 0.04s;
  }
  .menu-hover-fill li a::before {
    position: absolute;
    content: attr(data-text);
    z-index: -1;
    color: var(--menu-link-color);
  }
  .menu-hover-fill li:nth-child(1) {
    --menu-link-active-color: var(--primary-color);
  }
  .menu-hover-fill li:nth-child(2) {
    --menu-link-active-color: var(--info-color);
  }
  .menu-hover-fill li:nth-child(3) {
    --menu-link-active-color: var(--success-color);
  }
  .menu-hover-fill li:nth-child(4) {
    --menu-link-active-color: var(--warning-color);
  }
  .menu-hover-fill li:nth-child(5) {
    --menu-link-active-color: var(--danger-color);
  }
  .menu-hover-fill li:hover::before {
    left: calc(100% + 1rem);
  }
  .menu-hover-fill li:hover a {
    background-size: 100%;
  }
</style>
