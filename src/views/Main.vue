<template>
    <div class="app">
        <musicheader></musicheader>
        <left></left>
        <div class="center">
            <div class="content">
               <router-view ></router-view>
            </div>
        </div>
        <musicfooter></musicfooter>
    </div>
</template>

<script>
import musicfooter from '../views/musicfooter/musicfooter.vue'
import musicheader from '../views/musicheader/musicheader.vue'
import musiccenter from '../views/musiccenter/musiccenter.vue'
import left from '../views/left/musicleft.vue'
export default {
    name:'Main',
    components:{
        musicfooter,
        musicheader,
        musiccenter,
        left
    },
    computed: {
        key() {
            return this.$route.fullPath
        }
    }
}
</script>

<style lang="scss" scoped>
    .app{
        position: relative;
       height: 100vh;
    }
     .center{
       position:absolute;
       height: 80%;
       width: 85%;
       left: 15%;
       top:10%;
    }
   
    .content{
        float: left;
        width: 100%;
        height: 100%;
        overflow-y: scroll;
    }
    .content::-webkit-scrollbar{  
        width: 6px;  
        height:10px;     
        background-color:rgb(255, 255, 255);
    }
    .content::-webkit-scrollbar-thumb{
        border-radius:10px;
        box-shadow:inset000pxrgba(240,240,240,.5);
        background-color:rgb(181, 177, 177);
        height: 140px;
    }
</style>
