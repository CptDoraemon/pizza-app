import Vue from 'vue'
import VueRouter from 'vue-router'
import FrontPage from '../components/front-page/front-page'

Vue.use(VueRouter);

export const routeNames = {
  home: 'home',
  category: 'category',
  pizzaCustomizer: 'pizzaCustomizer'
};

export const routeParams = {
  [routeNames.category]: {
    categoryName: 'categoryName'
  },
  [routeNames.pizzaCustomizer]: {
    pizza: 'pizza'
  }
};

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
  },
  {
    path: '/pizza-customizer/:pizza',
    name: 'pizzaCustomizer',
    component: () => import("../components/pizza-customizer/pizza-customizer")
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
