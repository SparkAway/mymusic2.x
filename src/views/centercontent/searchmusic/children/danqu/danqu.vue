<template>
    <div class="danqu">
        <el-table
        :data="tableData"
        stripe
        class="table"
        style="width: 100%">
            <el-table-column
            prop="index"
            label=""
            width="37">
            </el-table-column>
            <el-table-column
            prop=""
            label=""
            width="30">
                <button class="btn1"><svg t="1649857093940" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3767" width="16" height="16"><path d="M716.8 60.235294c-81.317647 0-153.6 36.141176-204.8 96.376471-51.2-60.235294-123.482353-96.376471-204.8-96.376471C153.6 60.235294 30.117647 192.752941 30.117647 358.4c0 45.176471 6.023529 87.341176 21.082353 126.494118 0 0 12.047059 36.141176 21.082353 57.223529C189.741176 798.117647 512 963.764706 512 963.764706s322.258824-165.647059 439.717647-424.658824c0 0 15.058824-33.129412 21.082353-57.223529 12.047059-39.152941 21.082353-81.317647 21.082353-126.494118C993.882353 192.752941 870.4 60.235294 716.8 60.235294z m198.776471 406.588235c-6.023529 15.058824-15.058824 42.164706-18.070589 48.188236-87.341176 192.752941-307.2 334.305882-385.505882 379.482353-78.305882-45.176471-298.164706-186.729412-385.505882-379.482353-6.023529-15.058824-15.058824-36.141176-18.070589-51.2-12.047059-33.129412-18.070588-72.282353-18.070588-105.411765C90.352941 225.882353 189.741176 120.470588 307.2 120.470588c60.235294 0 117.458824 27.105882 159.623529 75.294118L512 246.964706l45.176471-51.2C599.341176 147.576471 656.564706 120.470588 716.8 120.470588c120.470588 0 216.847059 105.411765 216.847059 234.917647 0 36.141176-6.023529 72.282353-18.070588 111.435294z" fill="rgb(192, 192, 192)" p-id="3768"></path></svg></button>
            </el-table-column>
             <el-table-column
            prop=""
            label=""
            width="30">
                <button class="btn1"><svg t="1649857223372" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4706" width="16" height="16"><path d="M952.8 668.48a40.16 40.16 0 0 0-39.2 39.2c0 86.24-57.6 156.96-130.88 156.96H241.28C168 864 110.4 793.92 110.4 707.68a40.16 40.16 0 0 0-39.2-39.2A40.16 40.16 0 0 0 32 707.68c0 130.72 94.24 235.36 209.28 235.36h541.44C897.76 943.04 992 838.4 992 707.68a40.16 40.16 0 0 0-39.2-39.2z" fill="rgb(192, 192, 192)" p-id="4707"></path><path d="M484.48 686.72a45.12 45.12 0 0 0 57.6 0l149.12-149.12a38.88 38.88 0 0 0-54.88-54.88l-81.12 81.12V119.04a39.36 39.36 0 0 0-78.56 0v444.8l-81.12-81.12a38.88 38.88 0 0 0-54.88 54.88z" fill="#bfbfbf" p-id="4708"></path></svg></button>
            </el-table-column>
            <el-table-column
            prop="name"
            label="音乐标题"
            width="420"
            @row-click="openmusic"
            >
                <template slot-scope="scope">
                      <div class="musictitle" @click="openmusic(scope.row.id)">{{ scope.row.name }}</div>
                </template>
            </el-table-column>
            <el-table-column
            prop="artists[0].name"
            label="歌手"
            width="180">
            </el-table-column>
            <el-table-column
            prop="album.name"
            label="专辑"
            width="200">
            </el-table-column>
             <el-table-column
            prop="shichang"
            label="时长"
            width="100">
            </el-table-column>
            <el-table-column
            prop="redu"
            label="热度">
            </el-table-column>
        </el-table>
        <el-pagination
        class="page"
        background
        :page-size="100"
        layout="prev, pager, next"
        :total="600"
        @current-change="currentchange"
        >
        </el-pagination>
    </div>
</template>

<script>
export default {
    data() {
      return {
        tableData:[],
      }
    },
    methods:{
      getSongs(){
          this.$store.dispatch('searchmusic');
          setTimeout(() => {
            this.tableData = this.$store.state.songs;
          }, 1000);
      },
      openmusic(id){
          this.$store.commit('setsongid',id);
          this.$store.dispatch('getsongurl');
      },
      currentchange(current){
          this.currentPage = current;
          this.$store.state.songpage = this.currentPage;
          this.$store.dispatch('searchmusic');
          setTimeout(() => {
            this.tableData = this.$store.state.songs;
          }, 1000);
      }
    },
    created(){
        this.getSongs();
    }
}
</script>

<style lang="scss" scoped>
    .danqu{
        text-align: center;
    }
    .table{
        font-size: 13px;
    }
    .btn1,.btn2{
        cursor: pointer;
        border:0;
        background-color:white;
        svg{
            position: relative;
            top: 5px;
        }
    }
    .musictitle{
        cursor: pointer;
    }
</style>