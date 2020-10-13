import Vue from 'vue'
import VueRouter from 'vue-router'
import Hpage from '../views/Hpage.vue'
import Video from '../views/Video.vue'
import Type from '../views/Type.vue'
import Menu from '../views/Menu.vue'
import Collection from '../views/Collection.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/:id?/',
    name: 'Hpage',
    component: Hpage
  },
  {
    path: '/video/:id?/',
    name: 'Video',
    component: Video
  },
  {
    path: '/type/:id?/',
    name: 'Type',
    component: Type
  },
  {
    path: '/menu/:id?/',
    name: 'Menu',
    component: Menu
  },
   {
    path: '/collection/:id?/',
    name: 'Collection',
    component: Collection
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
