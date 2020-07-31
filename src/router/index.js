import { createRouter, createWebHashHistory } from 'vue-router'

export const routerHistory = createWebHashHistory()
export const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '',
      component: () => import('@/view/Home')
    },
    {
      path: '/cross-animation',
      component: () => import('@/view/effect/CrossAnimation')
    },
    {
      path: '/text-split',
      component: () => import('@/view/effect/TextSplit')
    },
    {
      path: '/random-particle',
      component: () => import('@/view/effect/RandomParticle')
    },
    {
      path: '/pseudo-class',
      component: () => import('@/view/effect/PseudoClass')
    },
    {
      path: '/multi-border',
      component: () => import('@/view/effect/MultiBorder')
    },
    {
      path: '/pseudo-element',
      component: () => import('@/view/effect/PseudoElement')
    },
    {
      path: '/attr-text',
      component: () => import('@/view/effect/AttrText')
    },
    {
      path: '/bling-button',
      component: () => import('@/view/effect/BlingButton')
    },
    {
      path: '/custom-input',
      component: () => import('@/view/effect/CustomInput')
    },
    {
      path: '/profile-card',
      component: () => import('@/view/effect/ProfileCard')
    },
    {
      path: '/nav-tab',
      component: () => import('@/view/effect/NavTab')
    },
    {
      path: '/box-shadow',
      component: () => import('@/view/effect/BoxShadow')
    },
    {
      path: '/loading',
      component: () => import('@/view/effect/Loading')
    },
    {
      path: '/staggered-glow-in-text',
      component: () => import('@/view/effect/StaggeredGlowInText')
    },
    {
      path: '/neon-text',
      component: () => import('@/view/effect/NeonText')
    },
    {
      path: '/fake-3d-text',
      component: () => import('@/view/effect/Fake3dText')
    },
    {
      path: '/menu-hover-fill-text',
      component: () => import('@/view/effect/MenuHoverFillText')
    },
    {
      path: '/confirm-modal',
      component: () => import('@/view/effect/ConfirmModal')
    }
  ],
  async scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
