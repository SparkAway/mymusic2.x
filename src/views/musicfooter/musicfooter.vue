<template>
    <div class="footer">
        <div>歌名</div>
        <audio src="" controls class="audio"></audio>
        <div>歌单</div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .footer{
        position: absolute;
        width: 100%;
        bottom: 0;
        height: 10%;
        background-color: rgb(255, 255, 255);
        border-top: 1px solid rgb(225, 225, 225);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .audio{
        height: 40px;
        width: 400px;
    }
</style>