import Vue from 'vue'
import VueRouter from 'vue-router'
import FrontPage from '../components/front-page/front-page'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: FrontPage
  },
  {
    path: '/category/:categoryName',
    name: 'category',
    component: () => import('../components/category-page/category-page')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
