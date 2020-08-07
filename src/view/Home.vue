<template>
  <div>
    <div v-for="(item, idx) in pages" :key="idx">
      <router-link :to="item.link">{{item.title}}</router-link>
    </div>
    <div class="padding">转载自<a href="https://codepen.io/alphardex" target="_blank">https://codepen.io/alphardex</a></div>
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
        },
        {
          title: '23、mix-blend-mode',
          link: '/video-mask-text'
        },
        {
          title: '24、clip-path',
          link: '/name-card-hover-expand'
        },
        {
          title: '25、故障效果',
          link: '/cross-bar-glitch-text'
        },
        {
          title: '26、镂空效果',
          link: '/circle-arrow-nav'
        },
        {
          title: '27、-webkit-box-reflect',
          link: '/card-flip-reflection'
        },
        {
          title: '28、跟踪鼠标的位置',
          link: '/menu-hover-image'
        },
        {
          title: '29、让渐变动起来',
          link: '/mawaru'
        },
        {
          title: '30、慎重勇者风格的菜单',
          link: '/shinchou-menu'
        },
        {
          title: '31、Shining Text',
          link: '/shining-text'
        },
        {
          title: '32、Menu Hover Underline',
          link: '/menu-hover-underline'
        },
        {
          title: '33、Toggle',
          link: '/toggle'
        },
        {
          title: '34、Transparent Material Login Form',
          link: '/transparent-material-login-form'
        },
        {
          title: '35、Spiral Stair Loader',
          link: '/spiral-stair-loader'
        },
        {
          title: '36、流星雨',
          link: '/shooting-star'
        },
        {
          title: '37、Ken Burns Effect',
          link: '/ken-burns-effect'
        },
        {
          title: '38、Spiral Loading',
          link: '/spiral-loading'
        },
        {
          title: '39、Bar Loading',
          link: '/bar-loading'
        },
        {
          title: '40、Flex Frosted Image Gallery',
          link: '/flex-frosted-image-gallery'
        },
        {
          title: '41、3d loader',
          link: '/3d-loader'
        },
        {
          title: '42、Mask Loader',
          link: '/mask-loader'
        },
        {
          title: '43、Star Burst',
          link: '/star-burst'
        },
        {
          title: '44、Clock Loader',
          link: '/clock-loader'
        }
      ]
    }
  }
}
</script>

<style>
  .padding {
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
  }
</style>
