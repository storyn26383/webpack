<template lang="pug">
  .wrapper
    h1
      span.pr-3: i.fa.fa-code(aria-hidden="true")
      | Hello Webpack
</template>

<script>
  export default {
    mounted () {
      console.log('Component mounted.');
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    padding: 1rem 1.5rem;
  }
</style>
