<template>
  <div class="mainpart">
    <div class="button">
        <button class="loop"><svg t="1649764996721" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8986" width="16" height="16"><path d="M768.234813 409.332675c-8.344881 8.272631-34.4994 4.804629-42.880407-3.468003V330.435617h-112.168207L304.570098 751.219925H164.260495c-15.497636 0-28.033021-14.955761-28.03302-30.236647 0-15.389261 12.535384-25.793269 28.03302-25.793269h112.276583l308.616101-420.784308h140.201227v-79.836308c8.344881-8.272631 34.4994-3.468003 42.880407 4.804628l119.031962 89.951316a21.086178 21.086178 0 0 1 0 29.983772l-119.031962 90.023566z m-357.999013 10.042757l-35.330275 45.806534-98.368447-134.746349H164.260495c-15.497636 0-28.033021-10.404008-28.03302-25.793269 0-15.317011 12.535384-30.236647 28.03302-30.236647H304.533973c7.152755 8.959007 105.701827 144.969731 105.701827 144.969731z m202.950399 275.778452h112.168207v-77.307556c8.344881-8.344881 34.4994-10.512383 42.880407-2.203627l119.031962 89.951316c8.344881 8.272631 8.344881 21.711141 0 30.056022l-119.031962 89.951316c-8.344881 8.272631-34.4994 11.921259-42.880407 3.648627v-80.522684h-140.201227l-106.496578-143.59698 35.330275-45.734283 99.199323 135.757849z" fill="#231815" p-id="8987"></path></svg></button>
        <button class="premusic"><svg t="1649764828252" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4568" width="16" height="16"><path d="M364.302083 465.602819L687.954365 218.588294c38.416414-29.327534 93.791393-1.929039 93.791392 46.396277v494.029051c0 48.325316-55.374979 75.725617-93.791392 46.398084L364.302083 558.397181c-30.600916-23.357989-30.600916-69.436372 0-92.794362zM238.945254 780.798397V451.684117v-164.562559c0-19.628152-5.904521-60.475733 17.057907-75.841215 25.523642-17.068744 59.747828 1.210165 59.747828 31.919454v493.676839c0 19.628152 5.915358 60.473927-17.047069 75.841215-25.53448 17.068744-59.758666-1.211971-59.758666-31.919454z" fill="#231815" p-id="4569"></path></svg></button>
        <!-- 播放/暂停 -->
        <div
            @click='playBtn'
            class="playButtCon"
            id="playButtCon">
            {{ playButtConText }}
        </div>
        <button class="nextmusic"><svg t="1649764917862" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6686" width="16" height="16"><path d="M655.706179 465.602819L332.053897 218.588294c-38.414608-29.327534-93.791393-1.929039-93.791392 46.396277v494.029051c0 48.325316 55.376785 75.725617 93.791392 46.398084l323.652282-247.014525c30.602722-23.357989 30.602722-69.436372 0-92.794362zM781.064814 780.798397V451.684117v-164.562559c0-19.628152 5.904521-60.475733-17.057907-75.841215-25.523642-17.068744-59.747828 1.210165-59.747828 31.919454v493.676839c0 19.628152-5.915358 60.473927 17.047069 75.841215 25.532673 17.068744 59.758666-1.211971 59.758666-31.919454z" fill="#231815" p-id="6687"></path></svg></button>
        <button class="words">词</button>

    </div>
    <!-- 操作盒子 -->
    <div class='operationBox'>
      
      <!-- 音频轨迹 -->
      <div
        @mousedown='trackDown'
        @mousemove='trackMove'
        @mouseup='trackUp'
        class="audioTrack"
        ref="audioTrack">
        <!-- 进度百分比 -->
        <div
          class="audioPercentage"
          ref='audioPercentage'
          :style="{ width: accomplishData + unit}">
        </div>
      </div>
      <!-- reset / time -->
      <div
        @click='retPlay'
        @mouseover='hoverFn'
        @mouseout='outFn'
        class="timerR">
        <span v-if='!showRet'>{{ countTime ? countTime : altogetherTimer }}s</span>
      </div>
    </div>
    <!-- 原生音频文件 -->
    <div class="originalAudio">
      <audio
        ref='audioEl'
        autobuffer
        controls="controls"
        id="myAudio"
        @canplaythrough="oncanplaythrough">
        <source
          :src="source"
          type="audio/mpeg">
      </audio>
    </div>
  </div>
</template>

<script>
let timer
export default {
  name: 'audio-vue',
  props: {
    source: {
      type: String,
      default: 'http://music.163.com/song/media/outer/url?id=431795489.mp3'
    },
    title: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      playButtConText: '▶',
      altogetherTimer: null, //音频总时长
      scheduleTimer: 0, //当前播放进度时间
      accomplishData: null, // 当前播放进度比
      countTime: null, // 倒计时时间
      unit: '%', //单位
      showRet: false,
      isTransition: true,
      ismouseDown: false,
      lastMoveVal: 0,
    }
  },
  methods: {
    // oncanplaythrough 事件在视频/音频（audio/video）可以正常播放且无需停顿和缓冲时触发
    oncanplaythrough () {
      this.altogetherTimer = Math.round(this.$refs.audioEl.duration) === Infinity ? 0 : Math.round(this.$refs.audioEl.duration)
    },
    hoverFn () {
      this.showRet = true
    },
    outFn () {
      this.showRet = false
    },
    // 正在播放时音频轨迹的状态
    myAudioPlay (PercentageData) {
      let audioEl = this.$refs.audioEl
      this.unit = '%'
      this.accomplishData = PercentageData * 100
      if (audioEl.currentTime == audioEl.duration) {
        this.playButtConText = '▶'
        clearInterval(timer)
      }
    },
    playBtn () {
      let audioEl = this.$refs.audioEl
      let percentEl = this.$refs.audioPercentage
      if (this.$refs.audioEl.paused) {
        if (audioEl.currentTime == audioEl.duration) {
          this.accomplishData = 0
        }
        audioEl.play()
        clearInterval(timer) // 清除计时器
        this.playButtConText = '■'
        timer = setInterval(() => {
          this.myAudioPlay(audioEl.currentTime / audioEl.duration) // 计算播放进度百分比
          this.countTime = this.altogetherTimer - Math.round(audioEl.currentTime)
        }, 1000)
      } else {
        audioEl.pause()
        clearInterval(timer) // 清除计时器
        this.playButtConText = '▶'
      }
    },
    retPlay () {
      let audioEl = this.$refs.audioEl
      audioEl.currentTime = 0
      this.accomplishData = 0
      this.countTime = null
      audioEl.pause()
      this.playBtn()
    },
    trackFn (ev) {
      let audioTrack = this.$refs.audioTrack // 音频轨迹
      let audioEl = this.$refs.audioEl
      let audioTrackW = audioTrack.offsetWidth // 读取音频轨迹的长度
      this.unit = 'px'
      this.accomplishData = ev.layerX
      let cilckPercentage = ev.layerX / audioTrackW
      audioEl.currentTime = cilckPercentage * audioEl.duration
      this.countTime = this.altogetherTimer - Math.round(audioEl.currentTime)
    },
    // 点击音频轨迹
    trackDown (ev) {
      this.ismouseDown = true
      this.unit = 'px'
      this.accomplishData = ev.layerX
    },
    trackMove (ev) {
      if (this.ismouseDown) {
        this.trackFn(ev)
      }
    },
    trackUp (ev) {
      this.ismouseDown = false
      this.trackFn(ev)
      if (this.$refs.audioEl.paused) {
        this.playBtn()
      }
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.playButtCon{
      cursor: pointer;
      width: 33px;
      height: 33px;
      line-height: 30px;
      border-radius: 50%;
      font-size: 19px;
      color: rgb(46, 46, 46);
      font-weight: 700;
      background-color: rgb(229, 229, 229);
}
.button{
    display: flex;
    justify-content: center;
    button{
        cursor: pointer;
        margin: 0 20px;
        width: 25px;
        height: 33px;
        border: none;
        background-color:rgb(255,255,255);
    }
}
.mainpart{
  width: 700px;
  height: 40px;
  text-align: center;
  .operationBox{
    width: 700px;
    height: 20px;
    font-size: 14px;
    display: flex;
    align-items: center;
    .audioTrack{
      width: 580px;
      height: 4px;
      &:hover{
          height: 7px;
          border-radius: 3px;
      }
      margin: 0 auto;
      position: relative;
      background-color: rgb(229, 229, 229);
      .audioPercentage{
        height: 100%;
        position: absolute;
        top: 0;
        left: 0 ;
        background-color: rgb(113, 127, 249);
        opacity: .85;
        transition: all .05s;
      }
    }
    .timerR{
      width: 50px;
      height: 100%;
      color: rgb(205, 205, 205);
      span{
        width: 100%;
        height: 100%;
      }
    }
  }
}
.originalAudio{
  width: 0;
  height: 0;
  audio{
    width: 0;
    height: 0;
  }
}

</style>