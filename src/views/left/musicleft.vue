<template>
<div class="leftbox">
  <div class="left">
      <ul class="base">
         <li 
         v-for="(item,index) in baselist" 
         :key="index" 
         @click="routergo(item.url,index)"
         :class="{ active: index == current }"
         >
            {{item.name}}
         </li>
      </ul>
      <p class="title">我的音乐</p>
      <ul class="mymusic">
        <li>本地与下载</li>
        <li>最近播放</li>
      </ul>
      <p class="title">创建的歌单</p>
      <ul class="songmenu">
            
      </ul>
  </div>
</div>
</template>

<script>
export default {
    name:'musicleft',
    data(){
        return{
            //用来保存当前导航栏所在位置
            current:0,
            baselist:[
                {
                    id:'01',
                    name:'发现音乐',
                    url:'/findmusic'
                },
                {
                    id:'02',
                    name:'博客',
                    url:'/boke'
                },
                {
                    id:'03',
                    name:'视频',
                    url:'/video'
                },
                {
                    id:'04',
                    name:'关注',
                    url:'/focus'
                },
                {
                    id:'05',
                    name:'直播',
                    url:'/zhibo'
                },
                {
                    id:'06',
                    name:'私人FM',
                    url:'/personFM'
                },

            ]
        }
    },
    methods:{
        routergo(url,index){
            //保存当前index
            this.current = index;
            //跳转
            this.$router.push(url)
        }
    },
    created(){
        //保证开始的时候内容页是发现音乐
        this.$router.push('/findmusic')
    }
}
</script>

<style lang="scss" scoped>
     .leftbox{
          position:absolute;
          height: 80%;
          min-width: 15%;
          left: 0;
          top:10%;
     }
     .left{
       float: left;
       width: 100%;
       background-color: rgb(255, 255, 255);
       height:100%;
       overflow-y: scroll;
    }
    .left::-webkit-scrollbar{  
        width: 1px;  
        height:10px;     
        background-color:#b5b1b1;
    }
    .title{
        color: rgb(153, 153, 153);
        text-indent: 40px;
        margin-top: 20px;
        margin-bottom: 10px;
    }
    .base{
        font-size: 19px;
    }
    .base li{
        color: rgb(51, 51, 51);
        line-height: 40px;
        text-indent: 40px;
        height: 40px;
        margin-top: 5px;
        &:hover{
            background-color: rgb(246, 246, 247);
            cursor: pointer;
        }
    }
    .mymusic{
        text-indent: 40px;
    }
    .active{
        color:rgb(0, 0, 0) !important;
        font-size: 24px;
        background-color: rgb(246, 246, 247);
    }
</style>