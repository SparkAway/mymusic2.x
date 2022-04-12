import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login'
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect:'/Login',
    meta:{needLogin:true}
  },
  {
    path:'/Main',
    name:'Main',
    component:()=>import('../views/Main.vue'),
    meta:{needLogin:true},
    children:[
      {
        path:'/searchmusic',
        name:'searchmusic',
        component:()=>import('../views/searchmusic/searchmusic.vue')
      }
    ]
  },
  {
    path:'/login',
    name:'login',
    component:login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
