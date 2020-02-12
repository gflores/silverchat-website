import Vue from 'vue'
import Router from 'vue-router'

import MainLayout from './layouts/MainLayout';

import Home from './pages/Home.vue';
import BookingDemo from './pages/BookingDemo.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: "/", component: Home},
    {path: "/demos/booking", component: BookingDemo},

  ]
})
