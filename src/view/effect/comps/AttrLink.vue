<template>
  <a :href="href" :data-text="text">
    <span v-for="(span, idx) in spans" :key="idx" :data-text="span.letter" :style="span.style">{{span.letter}}</span>
  </a>
</template>

<script>
export default {
  name: 'AttrSpan',
  props: {
    href: String,
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
        style: `transition-delay: ${i / 20}s;`
      }
    })

    return {
      spans
    }
  }
}
</script>

<style scoped>
  a {
    display: flex;
    padding: 6px;
    color: white;
    font-family: Lato, sans-serif;
    text-decoration: none;
    overflow: hidden;
  }
  a span {
    position: relative;
    transition: 0.3s;
  }
  a span::before {
    position: absolute;
    content: attr(data-text);
    transform: translateY(130%);
  }
  a:hover span {
    transform: translateY(-130%);
  }
</style>
