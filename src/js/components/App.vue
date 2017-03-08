<template lang="pug">
  #app
    .wrapper
      router-view
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    padding: 1rem 1.5rem;
  }
</style>
