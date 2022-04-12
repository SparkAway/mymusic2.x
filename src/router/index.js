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
        component:()=>import('../views/centercontent/searchmusic/searchmusic.vue')
      },
      {
        path:'/findmusic',
        name:'findmusic',
        component:()=>import('../views/centercontent/base1_findmusic/findmusic.vue')
      },
      {
        path:'/boke',
        name:'boke',
        component:()=>import('../views/centercontent/base2_boke/boke.vue')
      },
      {
        path:'/video',
        name:'video',
        component:()=>import('../views/centercontent/base3_video/video.vue')
      },
      {
        path:'/focus',
        name:'focus',
        component:()=>import('../views/centercontent/base4_focus/focus.vue')
      },
      {
        path:'/zhibo',
        name:'zhibo',
        component:()=>import('../views/centercontent/base5_zhibo/zhibo.vue')
      },
      {
        path:'/personFM',
        name:'personFM',
        component:()=>import('../views/centercontent/base6_personFM/personFM.vue')
      },
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
