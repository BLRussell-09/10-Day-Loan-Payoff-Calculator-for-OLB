import Vue from 'vue';
import Router from 'vue-router';
import Form from '@/components/Form';
import VForm from '@/components/VuetifyForm';
import BForm from '@/components/BootForm';
import 'vue-material/dist/vue-material.min.css';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Form',
      component: Form
    },
    {
      path: '/vform',
      name: 'VForm',
      component: VForm
    },
    {
      path: '/bform',
      name: 'BForm',
      component: BForm
    }
  ]
});
