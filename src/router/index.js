import Vue from 'vue';
import Router from 'vue-router';
import BForm from '@/components/BootForm';
import 'vue-material/dist/vue-material.min.css';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'BForm',
      component: BForm
    }
  ]
});
