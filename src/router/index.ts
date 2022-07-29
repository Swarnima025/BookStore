import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () => import('@/components/signupComp/SignUp.vue')

  },

  // {
  //   path: "/about",
  //   name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/components/LoginPage/Login.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/components/CartComp/Cart.vue')
  },
  {
    path: '/wishlist',
    name: 'Wishlist',
    component: () => import('@/components/WishlistComp/Wishlist.vue')
  },
  {
    path: '/BookDesc/:id',
    name: 'BookDesc',
    component: () => import('@/components/DescComp/BookDesc.vue')
  },
  {
    path: '/Filter/:id',
    name: 'Filter',
    component: () => import('@/components/FilterComp/Filter.vue')
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
