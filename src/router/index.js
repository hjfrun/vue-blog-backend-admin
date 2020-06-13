import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateArticle from '../views/CreateArticle'
import EditArticle from '../views/EditArticle'

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
    component: CreateArticle
  },
  {
    path: '/articles/index',
    name: 'article-list',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "posts" */ '../views/ListArticle.vue')
  },
  {
    path: '/articles/:id/edit',
    name: 'article-edit',
    component: EditArticle
  }
]

const router = new VueRouter({
  routes
})

export default router
