<template>
  <div class="body">
    <div class="loading"><delay-text text="Loading" :duration="0.1"/></div>
  </div>

</template>

<script>
import DelayText from '@/view/effect/comps/DelayText'
export default {
  name: 'Fake3dText',
  components: { DelayText }
}
</script>

<style scoped>
  @import url("https://fonts.googleapis.com/css?family=Baloo+Bhaijaan&display=swap");
  .body {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #2980b9;
  }

  .loading {
    display: flex;
    color: white;
    font-size: 5em;
    font-family: "Baloo Bhaijaan", cursive;
    text-transform: uppercase;
  }
  .loading >>> span {
    text-shadow: 0 1px #bbb, 0 2px #bbb, 0 3px #bbb, 0 4px #bbb, 0 5px #bbb, 0 6px transparent, 0 7px transparent, 0 8px transparent, 0 9px transparent, 0 10px 10px rgba(0, 0, 0, 0.4);
    transform: translateY(20px);
    animation: bounce 0.3s ease infinite alternate;
  }

  @keyframes bounce {
    to {
      text-shadow: 0 1px #bbb, 0 2px #bbb, 0 3px #bbb, 0 4px #bbb, 0 5px #bbb, 0 6px #bbb, 0 7px #bbb, 0 8px #bbb, 0 9px #bbb, 0 50px 25px rgba(0, 0, 0, 0.2);
      transform: translateY(-20px);
    }
  }
</style>
