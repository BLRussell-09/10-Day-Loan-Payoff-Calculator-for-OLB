import Vue from 'vue';
import Router from 'vue-router';
import Form from '@/components/Form';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Form',
      component: Form
    }
  ]
});
