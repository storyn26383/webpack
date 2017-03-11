<template lang="pug">
  .page
    .jumbotron
      .container.text-center
        h1.display-4
          i.fa.fa-code(aria-hidden="true")
          | {{ title }}
        p.lead.text-muted
          | A Vue.js project template build with Webpack and vue-loader.
        p.m-0
          a.btn.btn-primary.btn-lg(
            href="https://github.com/storyn26383/webpack",
            target="_blank",
            role="button"
          )
            i.fa.fa-github(aria-hidden="true")
            | GitHub
    main.container
      .row
        .card.col-md-4(v-for="i in 12")
          img(src="../../images/356x280.png")
          h4.card-title Heading
          p.card-text.text-muted
            | Lorem necessitatibus ipsa soluta corrupti ipsam, dicta placeat Error optio sunt odio quaerat numquam
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        title: 'Hello Webpack'
      };
    },
    mounted () {
      console.log('Component mounted.');
    }
  }
</script>

<style lang="scss" scoped>
  .page {
    .card {
      margin-bottom: 2rem;

      img {
        margin-bottom: 1rem;
      }
    }
  }
</style>
