import Vue from 'vue';
import Router from 'vue-router';

import home from './pages/Home';
import login from './pages/Login';
import elementUI from './pages/ElementUI';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: home
  }, {
    path: '/login',
    name: 'login',
    component: login
  }, {
    path: '/element-ui',
    name: 'element-ui',
    component: elementUI
  }]
});
