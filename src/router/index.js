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
