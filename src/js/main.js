import Vue from 'vue';
import app from './App';
import router from './router';

import '../scss/app.scss';
import 'font-awesome';

new Vue({
  el: '#app',
  router,
  template: '<app/>',
  components: { app }
});
