import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/articles/index'
  },
  {
    path: '/articles/create',
    name: 'article-create',
    component: () => import(/* webpackChunkName: "create" */ '../views/CreateArticle.vue')
  },
  {
    path: '/articles/index',
    name: 'article-list',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "articles" */ '../views/ListArticle.vue')
  },
  {
    path: '/articles/:id/edit',
    name: 'article-edit',
    component: () => import(/* webpackChunkName: "edit" */ '../views/EditArticle.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
