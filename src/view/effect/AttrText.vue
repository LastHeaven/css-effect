<template>
  <div class="body">
    <ul class="float-text-menu">
      <li><attr-link href="#" text="Home"/></li>
      <li><attr-link href="#" text="Archives"/></li>
      <li><attr-link href="#" text="Tags"/></li>
      <li><attr-link href="#" text="Categories"/></li>
      <li><attr-link href="#" text="About"/></li>
    </ul>
  </div>
</template>

<script>
import AttrLink from '@/view/effect/comps/AttrLink'
export default {
  name: 'AttrText',
  components: { AttrLink }
}
</script>

<style scoped>
  @import url(https://fonts.googleapis.com/css?family=Lato);
  .body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #1A1E23;
  }

  .float-text-menu {
    display: flex;
    flex-direction: column;
    list-style-type: none;
  }
</style>
