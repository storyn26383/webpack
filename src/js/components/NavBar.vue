<template lang="pug">
  nav.navbar.fixed-top.navbar-toggleable-xl.navbar-inverse.bg-inverse
    .container
      h1.mb-0.navbar-brand Vue.js
      .collapse.navbar-collapse
        ul.navbar-nav.mr-auto
          router-link.nav-item.nav-link(to="/", active-class="active", exact) Home
          router-link.nav-item.nav-link(to="/element-ui", active-class="active", exact) Element UI
        ul.navbar-nav
          router-link.nav-item.nav-link(to="/login", active-class="active", exact) Login
</template>

<script>
  export default {
    name: 'nav-bar'
  }
</script>

<style lang="scss">
  .wrapper {
    padding-top: 3.5rem;
  }
</style>
