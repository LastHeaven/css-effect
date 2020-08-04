import '@/assets/css/base.css'
import '@/assets/css/reset.css'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { router } from '@/router'
import { createApp } from 'vue'
import App from './App.vue'

// 用于transition
if ('registerProperty' in CSS) {
  CSS.registerProperty({
    name: '--pos',
    syntax: '<length-percentage>',
    initialValue: '0',
    inherits: true
  })

  CSS.registerProperty({
    name: '--color',
    syntax: '<color>',
    initialValue: 'transparent',
    inherits: true
  })

  CSS.registerProperty({
    name: '--color1',
    syntax: '<color>',
    initialValue: 'transparent',
    inherits: true
  })

  CSS.registerProperty({
    name: '--color2',
    syntax: '<color>',
    initialValue: 'transparent',
    inherits: true
  })
}

const app = createApp(App)
app.use(router)

app.mount('#app')
