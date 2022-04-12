<template>
        <div class="center">
            <div class="content">
                中间内容
            </div>
        </div>
</template>

<script>
export default {
    name:'center',
}
</script>

<style lang="scss" scoped>
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
        width: 5px;  
        height:10px;     
        background-color:#b5b1b1;
    }
</style>