import Vue from 'vue'
import VueRouter from 'vue-router'
// import { Trans } from '@/plugins/Translation'

import About from "@/views/About.vue";
import Detail from "@/views/Detail.vue";
import Home from "@/views/Home.vue";

// function load(component) {
//   // '@' is aliased to src/components
//   return () => import(`@/views/${component}.vue`)
// }

Vue.use(VueRouter)


const routes = [{
    path: '',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
  ];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
