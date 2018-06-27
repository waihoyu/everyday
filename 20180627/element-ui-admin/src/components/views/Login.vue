<template>
    <div class="login-container">
        <el-form class="login-form" autoComlete="on" :model="loginForm" :rules="loginRules">

        </el-form>
    </div>
</template>
<script>
import { isvalidUsername } from '@/utils/validate'
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
      }
      esle
      {
        callback()
      }
    }
    return {
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
      }
    }
  }
}
</script>
<style>
</style>