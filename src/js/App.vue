<template lang="pug">
  #app
    .wrapper
      nav-bar
      router-view
      my-footer
</template>

<script>
  import navBar from './components/NavBar';
  import footer from './components/Footer';

  export default {
    name: 'app',
    components: {
      'nav-bar': navBar,
      'my-footer': footer
    }
  };
</script>

<style lang="scss">
  .wrapper {
    letter-spacing: 1px;
  }
</style>
