<style lang="less">
  @import './login.less';
</style>

<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <!-- <login-form @on-success-valid="handleSubmit"></login-form> -->
          <Form ref="loginForm" :model="LoginUser" :rules="rules">
            <FormItem prop="username">
              <Input v-model="LoginUser.userName" placeholder="请输入用户名">
                <span slot="prepend">
                  <Icon :size="16" type="ios-person"></Icon>
                </span>
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input type="password" v-model="LoginUser.password" placeholder="请输入密码">
                <span slot="prepend">
                  <Icon :size="14" type="md-lock"></Icon>
                </span>
              </Input>
            </FormItem>
            <FormItem>
              <Button @click="handleSubmit" type="primary" long>登录</Button>
            </FormItem>
          </Form>
          <!-- <p class="login-tip">输入任意用户名和密码即可</p> -->
        </div>
      </Card>
    </div>
  </div>
</template>


<script>
import { Login } from '@/api/login'
import { setToken,setUsername } from '@/libs/util'
import jwt_decode from 'jwt-decode'
// import { mapActions } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      LoginUser: {
        userName: 'yangmv',
        password: '123456'
      },
      rules: {
        userName: [
          { required: true, message: '账号不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // ...mapActions([
    //   'handleLogin',
    //   'getUserInfo'
    // ]),
    // handleSubmit () {
    //   const userName = this.LoginUser.userName
    //   const password = this.LoginUser.password
    //   this.handleLogin({ userName, password }).then(res => {
    //     this.getUserInfo().then(res => {
    //       this.$router.push({
    //         name: this.$config.homeName
    //       })
    //     })
    //   })
    // },
    handleSubmit () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          setToken('MtrVHq2kWnGEZbDhtRY1FVCQpxDh6YS3hMdgtp1XSZc')
          setUsername('yangmingwei')
          this.$store.dispatch("setAuth",true);
          // this.$store.dispatch("setUser",decoded);
          this.$router.push({
            name: this.$config.homeName
          })
          // 显示提示信息
          this.$Message.success({   // $Message为全局消息提示信息
            content: '登陆成功',
            duration: 5 //提示显示5秒
          });

        }
      })
    },
    isEmpty(value) {
        return (
            value === undefined ||
            value === null ||
            (typeof value === "object" && Object.keys(value).length === 0) ||
            (typeof value === "string" && value.trim().length === 0)
        );
    }
  }
}
</script>