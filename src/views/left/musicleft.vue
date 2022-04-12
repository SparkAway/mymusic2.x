<template>
<div class="leftbox">
  <div class="left">
      <ul class="base">
          <li>发现音乐</li>
          <li>博客</li>
          <li>视频</li>
          <li>关注</li>
          <li>直播</li>
          <li>私人FM</li>
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
    name:'musicleft'
}
</script>

<style lang="scss" scoped>
     .leftbox{
          position:absolute;
          height: 80%;
          width: 15%;
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
        width: 5px;  
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
        text-indent: 40px;
        height: 40px;
        margin-top: 5px;
    }
    .mymusic{
        text-indent: 40px;
    }
</style>