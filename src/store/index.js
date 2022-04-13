import Vue from 'vue'
import Vuex from 'vuex'
import pwdlogin from '@/api/pwdlogin'
import getCaptcha from '@/api/captcha'
import phonelogin from '@/api/phonelogin'
import loginstatus from '@/api/loginstatus'
import userinfo from '@/api/userinfo'
import verifycaptcha from '@/api/verifycaptcha'
import router from '../router/index'
import usersubcount from '@/api/usersubcount'
import search from '@/api/search'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginform:{
      phone:'',
      password:''
    },
    phoneform:{
      phone:'',
      captcha:''
    },
    userinfo:{
      icon:'',
      nickname:''
    },
    search:'',
    songs:{

    },
    songCount:''
  },
  getters: {
  },
  mutations: {
    setUser(state,newval){
      state.loginform.email = newval;
    },
    setPwd(state,newval){
      state.loginform.password = newval;
    },
    setPhone(state,newval){
      state.phoneform.phone = newval;
      state.loginform.phone = newval;
    },
    setCaptcha(state,newval){
      state.phoneform.captcha = newval;
    },
    setsearch(state,newval){
      state.search = newval;
    }
  },
  actions: {
    //别的方式的登录函数
    getLogin(){
        pwdlogin(this.state.loginform.phone,this.state.loginform.password).then((res)=>{
        console.log(res);
        let ses = window.sessionStorage;
        if(res.data.token){
          ses.setItem("data", res.data.token);
          //获取用户信息
          console.log(res.data.account.id);
          userinfo(res.data.account.id).then((res)=>{
            console.log('用户信息',res);
            ses.setItem("profile",JSON.stringify(res.data.profile));
          })
          // usersubcount().then((res)=>{
          //   console.log('用户收藏歌单',res);
          // })
          console.log(ses,'ses')
          router.push('/Main');
        }
      });
    },
    //手机号形式登录的函数
    getphoneLogin(){
        phonelogin(this.state.phoneform.phone,this.state.phoneform.captcha).then((res)=>{
          console.log('手机号登录',res);
          let ses = window.sessionStorage;
              if(res.data.token){
                ses.setItem("data", res.data.token);
                //获取用户信息
                console.log(res.data.account.id);
                userinfo(res.data.account.id).then((res)=>{
                  console.log('用户信息',res);
                  this.state.userinfo.icon = res.data.profile.avatarUrl;
                  console.log(this.state.userinfo.icon)
                  this.state.userinfo.nickname = res.data.profile.nickname;
                  console.log(this.state.userinfo.nickname)
                })
                console.log(ses,'ses')
                router.push('/Main');
              }
        })
    },
    //检验验证码正确的函数
    verifycaptcha(){
      console.log(this.state.phoneform.phone,this.state.phoneform.captcha)
        verifycaptcha(this.state.phoneform.phone,this.state.phoneform.captcha).then((res)=>{
            console.log(res);
        })
    },
    //获得手机验证码的函数
    getCaptcha(){
      console.log(this.state.phoneform.phone);
      getCaptcha(this.state.phoneform.phone).then((res)=>{
          console.log('验证码',res);
      })
    },
    //获取登陆状态
    getloginstatus(){
      loginstatus().then((res)=>{
        console.log('登录状态',res)
      })
    },
    //获取用户信息
    getUserinfo(){
      userinfo().then((res)=>{
        console.log('用户信息',res)
      })
    },
    //搜索歌曲
    searchmusic(){
      console.log(this.state.search)
      search(this.state.search).then((res)=>{
        console.log(res);
        this.state.songs = res.data.result.songs;
        this.state.songCount = res.data.result.songCount;
        console.log(this.state.songs);
        console.log(this.state.songCount)
      })
    }
  },
  modules: {
  }
})
