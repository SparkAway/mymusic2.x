<template>
    <div class="searchmusic">
        <div class="title">
            <h1>搜索 {{search}}</h1>
        </div>
        <div class="interested">
            <p>你可能感兴趣</p>
            <div class="bigbox">
                <div class="box1"></div>
                <div class="box2"></div>
            </div>
        </div>
        <div class="nav">
            <ul>
                <li 
                v-for="(item,index) in navlist" 
                :key="index"
                @click="routergo(index,item.url)"
                :class="{ active: index == current }"
                >
                    {{item.name}}
                </li>
            </ul>
            <div class="searchCount">找到{{this.$store.state.songCount}}首单曲</div>
        </div>
        <div class="button">
            <div class="button1">
                <button id="btn1">▶ 播放全部</button>
                <button id="btn2">+</button>
            </div>
            <button class="button2">
                <svg t="1649836055388" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3331" width="20" height="20"><path d="M490.155 696.835c5.703 5.703 13.229 8.617 20.753 8.496 7.524 0 15.05-2.791 20.875-8.496l179.739-179.739c11.408-11.408 11.408-29.855 0-41.142-5.703-5.703-13.107-8.496-20.631-8.496s-14.928 2.791-20.631 8.496L540.038 606.176V122.787c0-16.142-12.986-29.127-29.127-29.127s-29.127 12.986-29.127 29.127v483.267L351.562 475.832c-5.703-5.703-13.107-8.496-20.631-8.496s-14.928 2.791-20.631 8.496c-11.408 11.408-11.408 29.855 0 41.142l179.86 179.86z" p-id="3332"></path><path d="M883.007 497.194a29.057 29.057 0 0 0-29.127 29.127c0 189.084-153.767 342.85-342.85 342.85s-342.85-153.767-342.85-342.85c0-16.142-12.986-29.127-29.127-29.127s-29.127 12.986-29.127 29.127c0 54.128 10.559 106.678 31.554 156.194 20.146 47.818 49.152 90.658 85.925 127.553 36.773 36.773 79.735 65.778 127.553 85.925 49.516 20.875 102.066 31.554 156.194 31.554 54.128 0 106.678-10.559 156.194-31.554 47.818-20.146 90.658-49.152 127.553-85.925 36.773-36.773 65.778-79.735 85.925-127.553 20.875-49.516 31.554-102.066 31.554-156.194-0.242-16.02-13.349-29.127-29.37-29.127z" p-id="3333"></path></svg>
                下载全部
            </button>
        </div>
        <div class="searchpage">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name:'searchmusic',
    data(){
        return{
            current:0,
            search:'',
            navlist:[
                {
                    id:'01',
                    name:'单曲',
                    url:'/danqu'
                },
                {
                    id:'02',
                    name:'歌手',
                    url:'/geshou'
                },
                {
                    id:'03',
                    name:'专辑',
                    url:'/zhuanji'
                },
                {
                    id:'04',
                    name:'视频',
                    url:'/shipin'
                },
                {
                    id:'05',
                    name:'歌单',
                    url:'/gedan'
                },
                {
                    id:'06',
                    name:'歌词',
                    url:'/geci'
                },
                {
                    id:'07',
                    name:'播客',
                    url:'/searchboke'
                },
                {
                    id:'08',
                    name:'声音',
                    url:'/shengyin'
                },
                {
                    id:'09',
                    name:'用户',
                    url:'/yonghu'
                },
            ]
        }
    },
    methods:{
        routergo(index,url){
            this.current = index;
            
            this.$router.push(url);
        },
        rendersearch(){
            this.search = window.sessionStorage.search;
        }
    },
    computed: {
        key() {
            return this.$route.path
        }
    },
    created(){
        console.log('创建了搜索页')
        this.rendersearch();
        this.$router.push('/danqu');
    }
}
</script>

<style lang="scss" scoped>
    .searchmusic{
        padding-top:10px;
        padding-left: 30px;
    }
    .title{
        font-size: 12px;
        margin-bottom: 22px;
    }
    .interested p{
        font-size: 13px;
        color:rgb(103, 103, 103);
        margin-bottom: 10px;
    }
    .bigbox{
        display: flex;
        margin-bottom: 20px;
    }
    .box1,
    .box2{
        width: 270px;
        height: 60px;
        background-color: rgb(244, 244, 244);
        margin-right: 20px;
    }
    .nav ul{
        list-style: none;
        display: flex;
        margin-bottom: 27px;
        li{
            position: relative;
            margin-right: 25px;
            font-size: 17px;
            color:rgb(55, 55, 55);
            cursor: pointer;
            &:hover{
                color:rgb(0, 0, 0);
            }
        }
    }
    .active{
        &::before{
            content: "";
            position: absolute;
            left: 15%;
            bottom: -8px;
            width: 70%;
            height: 100%;
            border-bottom: 3px solid rgb(113, 127, 249); 
        }
    }
    //两个按钮
    .button{
        margin-bottom: 15px;
        display: flex;
        .button1{
            display: flex;
            vertical-align: center;
            align-items: center;
            width: 130px;
            height: 30px;
            margin-right: 10px;
            border-radius: 20px;
            background-color: rgb(113, 127, 249);
            overflow: hidden;
            #btn1{
                cursor: pointer;
                height: 100%;
                width: 78%;
                color: rgb(255,255,255);
                font-size: 14px;
                outline: none;
                border: 0;
                text-indent: 15px;
                background-color: inherit;
                &:hover{
                    background-color:rgb(87, 109, 224);
                }
            }
            #btn2{
                cursor: pointer;
                width: 22%;
                height: 100%;
                outline: none;
                border: 0;
                border-left: 1px solid rgb(126, 139, 248);
                color:rgb(213, 219, 248);
                font-size:26px;
                background-color: inherit;
                &:hover{
                    background-color:rgb(87, 109, 224);
                }
            }
        }
        .button2{
            display: flex;
            vertical-align: center;
            justify-content: center;
            font-size: 14px;
            width: 110px;
            height: 30px;
            line-height: 30px;
            border-radius: 15px;
            background-color: white;
            border: 1px solid rgb(219, 219, 219);
            svg{
                position: relative;
                top: 5px;
            }
        }
    }
</style>