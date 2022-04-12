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
            <div class="button">
                <button class="loop"><svg t="1649764996721" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8986" width="16" height="16"><path d="M768.234813 409.332675c-8.344881 8.272631-34.4994 4.804629-42.880407-3.468003V330.435617h-112.168207L304.570098 751.219925H164.260495c-15.497636 0-28.033021-14.955761-28.03302-30.236647 0-15.389261 12.535384-25.793269 28.03302-25.793269h112.276583l308.616101-420.784308h140.201227v-79.836308c8.344881-8.272631 34.4994-3.468003 42.880407 4.804628l119.031962 89.951316a21.086178 21.086178 0 0 1 0 29.983772l-119.031962 90.023566z m-357.999013 10.042757l-35.330275 45.806534-98.368447-134.746349H164.260495c-15.497636 0-28.033021-10.404008-28.03302-25.793269 0-15.317011 12.535384-30.236647 28.03302-30.236647H304.533973c7.152755 8.959007 105.701827 144.969731 105.701827 144.969731z m202.950399 275.778452h112.168207v-77.307556c8.344881-8.344881 34.4994-10.512383 42.880407-2.203627l119.031962 89.951316c8.344881 8.272631 8.344881 21.711141 0 30.056022l-119.031962 89.951316c-8.344881 8.272631-34.4994 11.921259-42.880407 3.648627v-80.522684h-140.201227l-106.496578-143.59698 35.330275-45.734283 99.199323 135.757849z" fill="#231815" p-id="8987"></path></svg></button>
                <button class="premusic"><svg t="1649764828252" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4568" width="16" height="16"><path d="M364.302083 465.602819L687.954365 218.588294c38.416414-29.327534 93.791393-1.929039 93.791392 46.396277v494.029051c0 48.325316-55.374979 75.725617-93.791392 46.398084L364.302083 558.397181c-30.600916-23.357989-30.600916-69.436372 0-92.794362zM238.945254 780.798397V451.684117v-164.562559c0-19.628152-5.904521-60.475733 17.057907-75.841215 25.523642-17.068744 59.747828 1.210165 59.747828 31.919454v493.676839c0 19.628152 5.915358 60.473927-17.047069 75.841215-25.53448 17.068744-59.758666-1.211971-59.758666-31.919454z" fill="#231815" p-id="4569"></path></svg></button>
                <button class="play"><svg t="1649764326136" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2673" width="24px" height="24px"><path d="M128 138.666667c0-47.232 33.322667-66.666667 74.176-43.562667l663.146667 374.954667c40.96 23.168 40.853333 60.8 0 83.882666L202.176 928.896C161.216 952.064 128 932.565333 128 885.333333v-746.666666z" fill="#3D3D3D" p-id="2674"></path></svg></button>
                <button class="nextmusic"><svg t="1649764917862" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6686" width="16" height="16"><path d="M655.706179 465.602819L332.053897 218.588294c-38.414608-29.327534-93.791393-1.929039-93.791392 46.396277v494.029051c0 48.325316 55.376785 75.725617 93.791392 46.398084l323.652282-247.014525c30.602722-23.357989 30.602722-69.436372 0-92.794362zM781.064814 780.798397V451.684117v-164.562559c0-19.628152 5.904521-60.475733-17.057907-75.841215-25.523642-17.068744-59.747828 1.210165-59.747828 31.919454v493.676839c0 19.628152-5.915358 60.473927 17.047069 75.841215 25.532673 17.068744 59.758666-1.211971 59.758666-31.919454z" fill="#231815" p-id="6687"></path></svg></button>
                <button class="words">词</button>
            </div>
            <div class="rangebox">
                <span class="rangetime">00:00</span>
                <input type="range" min=0 max=100 class='range' value=0>
                <span class="rangetime">13:21</span>
            </div>
        </div>
        <div>歌单</div>
    </div>
</template>

<script>
export default {
    //按钮:hover后颜色改变可以以后使用mouseover移入改变fill:值改变颜色
    //暂时不做
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