import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false
//导航守卫
router.beforeEach((to,from,next)=>{
  if(to.meta.needLogin){
    if(window.sessionStorage.data){
      next()
    }else{
      next('/login')
    }
  }else{
    next();
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
