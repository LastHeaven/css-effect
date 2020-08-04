<template>
  <a href="javascript: void (0)">
    <span v-for="(span, idx) in spans" :key="idx" :class="span.class" :style="span.style">{{span.letter}}</span>
  </a>
</template>

<script>
export default {
  name: 'ShinchouMenuText',
  props: {
    text: {
      type: String,
      default: ''
    },
    duration: {
      type: Number,
      default: 0.1
    }
  },
  setup (props) {
    const text = props.text
    const letters = text.split('')
    const spans = letters.map((letter, i) => {
      let classes = ''
      if (i < 2) {
        classes = 'highlight'
      }
      return {
        letter,
        style: `transition-delay: ${i * props.duration}s;`,
        class: classes
      }
    })

    return {
      spans
    }
  }
}
</script>

<style scoped>

</style>
