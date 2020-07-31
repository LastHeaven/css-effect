<template>
  <span v-for="(span, idx) in spans" :key="idx" :style="span.style">{{span.letter}}</span>
</template>

<script>
export default {
  name: 'DelayText',
  props: {
    text: {
      type: String,
      default: ''
    },
    duration: {
      type: Number,
      default: 0.05
    }
  },
  setup (props) {
    const text = props.text
    const letters = text.split('')
    const spans = letters.map((letter, i) => {
      return {
        letter,
        style: `animation-delay: ${i * props.duration}s;`
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
