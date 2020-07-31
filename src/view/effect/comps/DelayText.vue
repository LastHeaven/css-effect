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
    }
  },
  setup (props) {
    const text = props.text
    const letters = text.split('')
    const spans = letters.map((letter, i) => {
      return {
        letter,
        style: `animation-delay: ${i / 20}s;`
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
