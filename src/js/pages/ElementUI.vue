<template lang="pug">
  .page
    .jumbotron
      .container.text-center
        h1.display-4
          i.fa.fa-code(aria-hidden="true")
          | Element UI
        p.lead
          a.text-muted(href="http://element.eleme.io/")
            | http://element.eleme.io/
    main.container
      .card
        form
          h4
            | Date Picker
            small
              a.text-muted(href="http://element.eleme.io/#/en-US/component/date-picker")
                | http://element.eleme.io/#/en-US/component/date-picker
          .form-group
            label(for="date") Pick a day
            p: el-date-picker#date(type="date", placeholder="Pick a day", v-model="date")
          .form-group
            label(for="daterange") Pick a range
            p: el-date-picker#daterange(type="daterange", placeholder="Pick a range", v-model="daterange")
</template>

<script>
  import { DatePicker } from 'element-ui';

  import 'element-ui/lib/theme-default/icon.css';
  import 'element-ui/lib/theme-default/date-picker.css';

  export default {
    name: 'bootstarp',
    components: {
      elDatePicker: DatePicker
    },
    data () {
      return {
        date: '',
        daterange: ''
      };
    }
  }
</script>

<style lang="scss" scoped>
  .page {
    form {
      h4 {
        margin-bottom: 1rem;

        small {
          padding-left: 1rem;
          font-size: 50%;
        }
      }

      .form-group:last-child {
        &, p {
          margin-bottom: 0;
        }
      }
    }
  }
</style>
