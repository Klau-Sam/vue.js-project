import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/details/:id',
        name: 'details',
        component: () => import(/* webpackChunkName: "about" */ '../views/DetailsView.vue')
      }
    ]
  },
  {
    path: '/add',
    name: 'add',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AddView.vue')
  },
  // {
  //   path: '/details/:id',
  //   name: 'details',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/DetailsView.vue')
  // },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
