<template>
    <div class="app">
        <musicheader></musicheader>
        <left></left>
        <musiccenter>
            <router-view></router-view>
        </musiccenter>
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
    }
}
</script>

<style lang="scss" scoped>
    .app{
        position: relative;
       height: 100vh;
    }
</style>
