import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  { name:'login', path: '/login', component: () => import('@/views/Login') },
  {
    path: '',
    component: () => import('@/views/WorkSpace'),
    children: [
      { path: '', redirect: {name: 'login'} },
      { name: 'staff', path: '/staff', component: () => import('@/views/Staff') }
    ]
  },
  {path: '*', component: () => import('@/views/404')}
];

const router = new VueRouter({routes, mode: 'history'});
export default router;
