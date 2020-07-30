<template>
  <div>
    <div v-for="(item, idx) in pages" :key="idx">
      <router-link :to="item.link">{{item.title}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  setup (props, { emit }) {
    return {
      pages: [
        {
          title: '1、交错动画',
          link: '/cross-animation'
        },
        {
          title: '2、用JS分割文本',
          link: '/text-split'
        },
        {
          title: '3、随机粒子动画',
          link: '/random-particle'
        },
        {
          title: '4、伪类',
          link: '/pseudo-class'
        },
        {
          title: '5、绝对定位实现多重边框',
          link: '/multi-border'
        }
      ]
    }
  }
}
</script>

<style scoped>
  img {
    width: 200px;
  }

  h1 {
    font-family: Arial, Helvetica, sans-serif;
  }
</style>
