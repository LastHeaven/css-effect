<template>
<div class="body">
  <h1 class="cross-bar-glitch" data-slice="20">
    <div class="glitch" style="--slice-count:20;">
      <span v-for="(item, idx) in glitchs" :key="idx" :style="item">{{text}}</span>
    </div>
    <div class="bars">
      <div class="bar" v-for="i in 5" :key="i"></div>
    </div>
  </h1>

</div>
</template>

<script>
import { random } from '@/utils/math'

export default {
  name: 'CrossBarGlitchText',
  setup () {
    const text = 'Steins;Gate'
    const slice = 20
    const glitchs = []
    for (let i = 0; i < slice; i++) {
      glitchs.push({
        '--i': i + 1,
        animationDelay: `${800 + random(100, 300)}ms`
      })
    }
    return {
      text,
      glitchs
    }
  }
}
</script>

<style scoped>
  .body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #1a1e23;
  }

  .cross-bar-glitch {
    position: relative;
  }
  .cross-bar-glitch .bars {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .cross-bar-glitch .bars .bar {
    width: 100%;
    flex: 1;
    background: currentColor;
    border-radius: 50px;
    animation: 0.6s cubic-bezier(0.4, 0.2, 0.175, 1) forwards;
  }
  .cross-bar-glitch .bars .bar:nth-child(odd) {
    transform: translateX(100%);
    animation-name: slide-left;
  }
  .cross-bar-glitch .bars .bar:nth-child(even) {
    transform: translateX(-100%);
    animation-name: slide-right;
  }
  .cross-bar-glitch .bars .bar:nth-child(1) {
    animation-delay: 0.3s;
  }
  .cross-bar-glitch .bars .bar:nth-child(2) {
    animation-delay: 0.2s;
  }
  .cross-bar-glitch .bars .bar:nth-child(3) {
    animation-delay: 0.5s;
  }
  .cross-bar-glitch .bars .bar:nth-child(4) {
    animation-delay: 0.3s;
  }
  .cross-bar-glitch .bars .bar:nth-child(5) {
    animation-delay: 0.4s;
  }
  .cross-bar-glitch .glitch {
    opacity: 0;
    animation: reveal forwards 0.3s;
    animation-delay: 0.6s;
  }
  .cross-bar-glitch .glitch span:not(:last-child) {
    --ratio: calc(100% / var(--slice-count));
    --top: calc(var(--ratio) * (var(--i) - 1));
    --bottom: calc(var(--ratio) * (var(--slice-count) - var(--i)));
    position: absolute;
    white-space: nowrap;
    clip-path: inset(var(--top) 0 var(--bottom) 0);
    animation-duration: 0.3s;
  }
  .cross-bar-glitch .glitch span:nth-child(odd) {
    animation-name: slide-from-left;
  }
  .cross-bar-glitch .glitch span:nth-child(even) {
    animation-name: slide-from-right;
  }
  .cross-bar-glitch .glitch span:last-child {
    opacity: 0;
    animation: reveal steps(1) forwards;
    animation-delay: 1.2s;
  }

  @keyframes slide-from-left {
    from {
      transform: translateX(-20%);
    }
    to {
      transform: translateX(0);
    }
  }
  @keyframes slide-from-right {
    from {
      transform: translateX(20%);
    }
    to {
      transform: translateX(0);
    }
  }
  @keyframes reveal {
    to {
      opacity: 1;
    }
  }
  @keyframes slide-left {
    to {
      transform: translateX(-100%);
    }
  }
  @keyframes slide-right {
    to {
      transform: translateX(100%);
    }
  }
  h1 {
    font-size: 3rem;
    color: white;
  }
</style>
