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
        component:()=>import('../views/centercontent/searchmusic/searchmusic.vue'),
        children:[
          {
            path:'/danqu',
            name:'danqu',
            component:()=>import('../views/centercontent/searchmusic/children/danqu/danqu.vue')
          },
          {
            path:'/geci',
            name:'geci',
            component:()=>import('../views/centercontent/searchmusic/children/geci/geci.vue')
          },
          {
            path:'/gedan',
            name:'gedan',
            component:()=>import('../views/centercontent/searchmusic/children/gedan/gedan.vue')
          },
          {
            path:'/geshou',
            name:'geshou',
            component:()=>import('../views/centercontent/searchmusic/children/geshou/geshou.vue')
          },
          {
            path:'/searchboke',
            name:'searchboke',
            component:()=>import('../views/centercontent/searchmusic/children/searchboke/searchboke.vue')
          },
          {
            path:'/shengyin',
            name:'shengyin',
            component:()=>import('../views/centercontent/searchmusic/children/shengyin/shengyin.vue')
          },
          {
            path:'/shipin',
            name:'shipin',
            component:()=>import('../views/centercontent/searchmusic/children/shipin/shipin.vue')
          },
          {
            path:'/yonghu',
            name:'yonghu',
            component:()=>import('../views/centercontent/searchmusic/children/yonghu/yonghu.vue')
          },
          {
            path:'/zhuanji',
            name:'zhuanji',
            component:()=>import('../views/centercontent/searchmusic/children/zhuanji/zhuanji.vue')
          }
        ]  
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
