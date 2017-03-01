import Vue from 'vue';
import app from './components/App';

import '../scss/app.scss';
import 'font-awesome';

new Vue({
  el: '#app',
  template: '<app/>',
  components: { app }
});
