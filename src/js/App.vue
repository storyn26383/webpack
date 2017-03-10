<template lang="pug">
  #app
    .wrapper
      my-nav-bar
      router-view
      my-footer
</template>

<script>
  import myNavBar from './components/NavBar';
  import myFooter from './components/Footer';

  export default {
    name: 'app',
    components: { myNavBar, myFooter }
  };
</script>

<style lang="scss">
  .wrapper {
    letter-spacing: 1px;
  }
</style>
