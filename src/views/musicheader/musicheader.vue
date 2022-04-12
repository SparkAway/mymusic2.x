<template>
        <div class="header">
            <div class="icon"><img src="@/img/音乐.png" alt=""/>MYMUSIC</div>
            <div class="search">
                <input type="text" v-model="searchmes" @keyup.enter="enter">
            </div>
            <div class="user">
                <img class="usericon" :src="icon"/><span class="nackname">{{nickname}}</span>
            </div>
            <div class="set">设置</div>
        </div>
</template>


<script>
export default {
    data(){
        return {
            icon:'',
            nickname:'',
            searchmes:''
        }
    },
    methods:{
        //获取用户信息的函数
        getUserinfo(){
            let profile = JSON.parse(window.sessionStorage.profile);
            this.icon =  profile.avatarUrl;
            this.nickname = profile.nickname;
        },
        enter(){
            console.log(this.searchmes);
            //完成搜索功能
            this.$store.commit('setsearch',this.searchmes);
            this.$store.dispatch('searchmusic');
            //清除搜索框内容
            this.searchmes = '';
            this.$router.push('/searchmusic')
        }
    },
    created(){
       setTimeout(()=>{
           this.getUserinfo();
        },800)
    }
}
</script>

<style lang="scss" scoped>
    .icon{
        font-size: 20px;
        color: white;
        width:20%;
    }
    .search{
        width: 30%;
        text-align: right;
    }
    .search input{
        background: url('@/img/搜索.png') no-repeat;
        background-position: 10px;
        background-size: 20px;
        color: white;
        background-color: rgb(108, 121, 238);
        text-indent: 35px;
	    outline: none;
	    border: none;
        height: 25px;
        border-radius: 15px;
    }
    .user{
        width: 30%;
        text-align: right;
    }
    .set{
        width: 20%;
        text-align: right;
    }
    .icon img{
        vertical-align: -50%;
        margin-right: 10px;
        margin-left: 35px;
        width: 40px;
        height: 40px;
    }
     .header{
       position: absolute;
       width: 100%;
       top: 0;
       height: 9%;
       display: flex;
       align-items: center;
       flex-wrap: nowrap;
       background-color: rgb(113, 127, 249);
       
    }
    .usericon{
        vertical-align: -50%;
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    .nackname{
        margin-left: 10px;
        font-size: 14px;
        color: rgb(223, 227, 253);
    }
</style>