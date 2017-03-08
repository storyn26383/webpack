<template lang="pug">
  h1
    span.pr-3: i.fa.fa-code(aria-hidden="true")
    | {{ message }}
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        message: 'Hello Webpack'
      };
    },
    mounted () {
      console.log('Component mounted.');
    }
  }
</script>
