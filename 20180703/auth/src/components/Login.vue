<template>
    <div>login
        <form @submit.prevent="login">
            <label for="">
                <input type="text"
                       v-model="email"
                       placeholder="email">
            </label>
            <label for="">
                <input type="password"
                       v-model="pass"
                       placeholder="password">
            </label>
            <button type="submit">Login</button>
        </form>
    </div>
</template>
<script>
import auth from '@/auth.js'
export default {
  data() {
    return {
      email: '11@163.com',
      pass: ''
    }
  },
  methods: {
    login() {
      auth.login(this.email, this.pass, loggedIn => {
        console.log(loggedIn)
        if (loggedIn) {
            this.$router.replace(this.$route.query.redirect || '/')
            console.log("---");
        }
      })
    }
  },
  mounted () {
      console.log(this.$route.query);
  }
}
</script>
<style>
</style>