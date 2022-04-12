<template>
  <div class="login_container">
        <div class="login_box" >
            <!--头像-->
            <div class="avator_box">
                <img src="../assets/img/wench.png">
            </div>
            <!--表单-->
          <el-form ref="loginform" :model="loginform" :rules="loginRules" label-width="0px" class="login_Form" id="pwd" v-if="type==='pwd'">
            <el-form-item  prop="phone">
              <el-input v-model="loginform.phone" prefix-icon="el-icon-user-solid"></el-input>
            </el-form-item>
            <el-form-item  prop="password">
              <el-input v-model="loginform.password" prefix-icon="el-icon-lock" show-password></el-input>
            </el-form-item>
            <el-form-item class="login_btn">
              <el-button @click="submitForm('loginform')" >立即登录</el-button>
              <el-button @click="resetForm('loginform')" >重置</el-button>
            </el-form-item>
          </el-form>
          <el-form ref="phoneform" :model="phoneform" :rules="phoneRules" label-width="0px" class="login_Form" id="phone" v-else>
            <el-form-item  prop="phone">
              <el-input v-model="phoneform.phone" prefix-icon="el-icon-user-solid"></el-input>
            </el-form-item>
            <el-form-item  prop="captcha">
              <el-input  v-model="phoneform.captcha" prefix-icon="el-icon-lock">
                  <el-button slot="append" class="captchabutton" @click="sendCaptcha">发送验证码</el-button>
              </el-input>
              
            </el-form-item>
            <el-form-item class="login_btn">
              <el-button @click="submitphoneForm('loginform')" >立即登录</el-button>
              <el-button @click="resetForm('phoneform')" >重置</el-button>
            </el-form-item>
          </el-form>
        </div>
    </div>
</template>

<script>
export default {
    name:'login',
   data() {
    return {
      type:'pwd',
      loginform: {
          phone:'',
          password:''
      },
      phoneform:{
          phone:'',
          captcha:'',
      },
      emailform:{
          email:'',
          password:''
      },  
      loginRules:{
        phone:[
          {required:true ,message:'请输入手机号',trigger:'blur'},
          {min:11,max:11,message: '长度为11位的正确手机号',trigger: 'blur'}
        ],
        password:[
          {required:true ,message:'请输入登录密码',trigger:'blur'},
          {min:6,max:11,message: '长度在7到11个字符之间',trigger: 'blur'}
        ]
      },
      phoneRules:{
        phone:[
          {required:true ,message:'请输入手机号',trigger:'blur'},
          {min:11,max:11,message: '长度为11位的正确手机号',trigger: 'blur'}
        ],
      }
    }
  },
  methods: {
    submitForm(formName) {
        this.phone = this.loginform.phone;
        this.password = this.loginform.password;
        this.$refs.loginform.validate((valid)=>{
            if(valid){
                this.$store.dispatch('getLogin');
            }
        })
    },
    submitphoneForm(formName) {
       this.phone = this.phoneform.phone;
       this.captcha = this.phoneform.captcha;
       this.$refs.phoneform.validate((valid)=>{
            if(valid){
                this.$store.dispatch('getphoneLogin');
                
            }
        })
    },
    resetForm(formName){
        this.$refs[formName].resetFields();
    },
    sendCaptcha(){
        this.phone = this.phoneform.phone;
        this.$store.dispatch('getCaptcha');
    }
  },
  computed:{
      user:{
          get(){
            return this.$store.state.loginform.email;
          },
          set(newval){
            this.$store.commit('setUser',newval)
          }
      },
       password:{
          get(){
            return this.$store.state.loginform.password;
          },
          set(newval){
            this.$store.commit('setPwd',newval)
          }
      },
      phone:{
          get(){
              return this.$store.state.phoneform.phone;
          },
          set(newval){
              this.$store.commit('setPhone',newval)
          }
      },
      captcha:{
          get(){
              return this.$store.state.phoneform.captcha;
          },
          set(newval){
              this.$store.commit('setCaptcha',newval)
          }
      }
  }
}
</script>

<style lang="scss" scoped>
  .login_container{
    height: 100%;
  }
  .login_box{
    width:450px;
    height: 300px;
    background-color:rgba(248,248,255,0.5);
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  .avator_box{
    color: green;
    width: 130px;
    height: 130px;
    border: 1px solid #eeeeee;
    border-radius: 50%;
    padding: 12px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
    margin: -70px auto;
    background-color: #FFFFFF;
    &:hover{
        box-shadow: 0 2px 12px rgb(108, 238, 238,0.7);
        padding: 14px;
    }
  }
  img{
    height: 100%;
    width: 100%;
    border-radius: 50%;
  }
  .login_Form{
    position: absolute;
    bottom: 15px;
    width: 100%;
    padding: 0px 20px;
    box-sizing: border-box;
    .login_btn{
      display: flex;
      justify-content: center;
    }
  }
</style>