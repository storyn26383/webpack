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

    .fa {
      padding-right: 1rem;
    }

    .jumbotron {
      background-color: #fff;
    }

    .card {
      border: 0;
      border-radius: 0;
      padding: 1rem;
    }
  }
</style>
