<template>
    <div class="login-container">
        <el-form class="login-form" ref="loginForm" autoComlete="on" :model="loginForm" :rules="loginRules" label-position="left">
            <div class="title-container">
                <h3 class="title">
                    系统登录
                </h3>
            </div>
            <el-form-item prop="username">
                <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input name="password" type="password" v-model="loginForm.password" autoComplete="on" @keyup.enter.native="handleLogin"></el-input>
            </el-form-item>
            <el-button type="primary" :loading="loading" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">登录</el-button>
        </el-form>
    </div>
</template>
<script>
import { isvalidUsername } from '../../utils/validate'
export default {
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码至少6位'))
      } else {
        callback()
      }
    }
    const validate = () => {}
    return {
      loading: false,
      loginRules: {
        username: [
          {
            required: true,
            trigger: 'blur',
            validator: validateUsername
          }
        ],
        password: [
          {
            required: true,
            trigger: 'blur',
            validator: validatePassword
          }
        ]
      },
      loginForm: {
        username: 'admin',
        password: '111111'
        // validate: validate
      }
    }
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          console.log('提交')
        } else {
          console.log('error submit')
          return false
        }
      })
    }
  }
}
</script>
<style>
</style>