<template lang="pug">
  footer
    .container.text-center.text-muted
      | &copy;
      a(href="https://github.com/storyn26383", target="_blank") &nbsp;Sasaya&nbsp;
      | 2017
</template>

<script>
  export default {
    name: 'my-footer'
  }
</script>

<style lang="scss">
  html {
    min-height: 100%;
    position: relative;
  }

  .wrapper {
    padding-bottom: 3.5rem;
  }
</style>

<style lang="scss" scoped>
  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 3.5rem;
    line-height: 3.5rem;
    background-color: #fff;
  }
</style>
