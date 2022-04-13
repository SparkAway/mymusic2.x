<template>
    <div class="footer">
        <div class="playsong">
            <div class="songimg"><img src="" alt=""></div>
            <div class="singer">
                <div class="songname">笑忘书(Live)</div>
                <div class="singername">李荣浩</div>
            </div>
        </div>
        <div class="audio">
            <my-audio></my-audio>
        </div>
        <div>歌单</div>
    </div>
</template>

<script>
import myAudio from './audio/myAudio.vue'
export default {
    //按钮:hover后颜色改变可以以后使用mouseover移入改变fill:值改变颜色
    //暂时不做
    name:'musicfooter',
    components:{
        myAudio
    }
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
        width: 700px;
        text-align: center;
    }
    .button{
        margin-top:-5px;
        .icon{
            position: relative;
            left: 2px;
            top:2px;
        }
        button{
            cursor: pointer;
            margin: 0 20px;
            width: 25px;
            height: 25px;
            border: none;
            background-color:rgb(255,255,255);
        }
    }
    .play{
        width: 33px !important;
        height: 33px !important;
        border-radius: 50%;
        border: none;
        background-color: rgb(239, 239, 239) !important;
        &:hover{
            color: black  !important;
            background-color: rgb(229, 229, 229)!important;
        }
    }
    .range {
        width: 400px;
        height: 3px;
        background: rgb(205, 205, 205);
        border-radius: 0.25rem;
        -webkit-appearance: none !important;
        &:hover{
            height: 6px;
            &::-webkit-slider-thumb{
                display: block;
            }
        }  
    }
    .range::-webkit-slider-thumb {
        display: none;
        width: 10px;
        height: 10px;
        background: rgb(113, 127, 249);
        cursor: pointer;
        border-radius: 50%;
        -webkit-appearance: none !important;
    }
    .rangetime{
        margin:0 10px;
        font-size: 3px;
        color: rgb(159, 159, 159);
    }
    .playsong{
        margin-left: 13px;
        width: 170px;
        height: 52px;
        img{
            width: 52px;
            height: 52px;
            margin-right: 10px;
        }
    }
    .songimg{
        width: 52px;
        height: 52px;
        display: inline-block;
        border-radius: 12px;
        vertical-align:middle
    }
    .singer{
        vertical-align:middle;
        text-align: left;
        display: inline-block;
        width: 100px;
        height: 52px;
        margin-left: 10px;
    }
    .songname{
        font-size:17px;
    }
    .singername{
        margin-top: 5px;
        font-size:10px;
    }
</style>