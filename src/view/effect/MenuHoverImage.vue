<template>
  <div class="body">
    <ul class="menu-hover-image">
      <li
          v-for="(item, idx) in list" :key="idx"
          class="menu-item"
          @mousemove="onMouseMove"
          @mouseleave="onMouseLeave"
          @mouseenter="onMouseEnter">
        <a href="#">
          <h1>{{item.title}}</h1>
          <span>{{item.desc}}</span>
        </a>
      </li>
      <li class="cursor" ref="$cursor"></li>
    </ul>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'MenuHoverImage',
  setup () {
    const state = reactive({
      $cursor: null
    })

    const getXY = (e) => [
      e.clientX,
      e.clientY
    ]

    return {
      ...toRefs(state),
      list: [
        { title: 'Home', desc: 'alphardex' },
        { title: 'Projects', desc: 'CSS Creations' },
        { title: 'Blogs', desc: 'Memories' },
        { title: 'About', desc: 'CSS Wizard' }
      ],
      onMouseEnter (e) {
        const cursor = state.$cursor
        const [x, y] = getXY(e)
        cursor.animate(
          [
            {
              opacity: 0,
              transform: `translate(${x}px, ${y}px) scale(0)`
            },
            {
              opacity: 1,
              transform: `translate(${x}px, ${y}px) scale(1)`
            }
          ],
          { duration: 300, fill: 'forwards' }
        )
        console.log('onMouseEnter')
      },
      onMouseMove (e) {
        const cursor = state.$cursor
        const [x, y] = getXY(e)
        cursor.animate(
          [
            {
              transform: `translate(${x}px, ${y}px)`
            },
            {
              transform: `translate(${x}px, ${y}px)`
            }
          ],
          { duration: 500, delay: 50, fill: 'forwards' }
        )
      },
      onMouseLeave (e) {
        const cursor = state.$cursor
        const [x, y] = getXY(e)
        cursor.animate(
          [
            {
              opacity: 1,
              transform: `translate(${x}px, ${y}px) scale(1)`
            },
            {
              opacity: 0,
              transform: `translate(${x}px, ${y}px) scale(0)`
            }
          ],
          { duration: 300, fill: 'forwards' }
        )
      }
    }
  }
}
</script>

<style scoped>
  @import url("https://fonts.googleapis.com/css?family=Lora:400,400i,700");
  .body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 120vh;
    background: #121212;
    font-size: 16px;
    position: relative;
  }

  .menu-hover-image {
    position: relative;
    width: 56rem;
    margin-bottom: 12rem;
    font-family: Lora, serif;
    list-style-type: none;
    z-index: 1;
  }
  .menu-hover-image .cursor {
    position: absolute;
    top: -50%;
    left: -25%;
    z-index: -1;
    width: 600px;
    height: 400px;
    background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
    background-position: 50% 50%;
    background-size: cover;
    opacity: 0;
  }
  .menu-hover-image .menu-item:nth-child(1):hover ~ .cursor {
    background-image: url("https://i.loli.net/2019/10/18/buDT4YS6zUMfHst.jpg");
  }
  .menu-hover-image .menu-item:nth-child(2):hover ~ .cursor {
    background-image: url("https://i.loli.net/2019/10/18/uXF1Kx7lzELB6wf.jpg");
  }
  .menu-hover-image .menu-item:nth-child(3):hover ~ .cursor {
    background-image: url("https://i.loli.net/2019/11/23/cnKl1Ykd5rZCVwm.jpg");
  }
  .menu-hover-image .menu-item:nth-child(4):hover ~ .cursor {
    background-image: url("https://i.loli.net/2019/11/03/RtVq2wxQYySDb8L.jpg");
  }
  .menu-hover-image .menu-item a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    text-decoration: none;
    color: white;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    mix-blend-mode: difference;
    transform: translate3d(0, 0, 0);
  }
</style>
