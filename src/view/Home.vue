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
        },
        {
          title: '6、伪元素',
          link: '/pseudo-element'
        },
        {
          title: '7、attr()生成文本内容',
          link: '/attr-text'
        },
        {
          title: '8、闪光按钮',
          link: '/bling-button'
        },
        {
          title: '9、自定义input',
          link: '/custom-input'
        },
        {
          title: '10、名片',
          link: '/profile-card'
        },
        {
          title: '11、不规则的曲边形状',
          link: '/nav-tab'
        },
        {
          title: '12、box-shadow',
          link: '/box-shadow'
        },
        {
          title: '13、内发光',
          link: '/loading'
        },
        {
          title: '14、发光文本',
          link: '/staggered-glow-in-text'
        },
        {
          title: '15、霓虹文本',
          link: '/neon-text'
        },
        {
          title: '16、伪3D文本',
          link: '/fake-3d-text'
        },
        {
          title: '17、background-clip:text',
          link: '/menu-hover-fill-text'
        },
        {
          title: '18、linear-gradient',
          link: '/confirm-modal'
        },
        {
          title: '19、particle-button',
          link: '/particle-button'
        },
        {
          title: '20、conic-gradient',
          link: '/gauge'
        },
        {
          title: '21、融合效果',
          link: '/snow-scratch'
        },
        {
          title: '22、backdrop-filter',
          link: '/frosted-glass'
        }
      ]
    }
  }
}
</script>

<style></style>
