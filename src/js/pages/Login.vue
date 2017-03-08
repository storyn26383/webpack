<template lang="pug">
  .page
    form
      h2.mb-3 Login
      label.sr-only(for="email") E-mail
      input#email.form-control(type="email", placeholder="E-mail", required, autofocus)
      label.sr-only(for="password") Password
      input#password.form-control(type="password", placeholder="Password", required)
      .checkbox
        label.my-2
          input(type="checkbox").mr-2
          | Remember me
      button.btn.btn-primary.btn-block(type="submit") Login
</template>

<script>
  export default {
    name: 'login'
  }
</script>

<style lang="scss" scoped>
  .page {
    margin: 100px auto;
    max-width: 300px;

    form {
      #email {
        border-bottom: 0;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }

      #password {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    }
  }
</style>
