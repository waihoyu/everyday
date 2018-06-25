<template>
  <div id="app">
    <el-button loading type="primary">提交</el-button>
    <el-button loading type="primary" icon="el-icon-edit"></el-button>
    <el-button :disabled="disabled" type="info">提交</el-button>
    <el-button :disabled="disabled" type="warning">提交</el-button>
    <el-button :disabled="disabled" type="danger">提交</el-button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import ELButton from '@/components/ELButton'
import { setTimeout } from 'timers'
export default {
  name: 'App',
  components: {
    'el-button': ELButton
  },
  data() {
    return {
      disabled: false
    }
  },
  mounted: function() {
    setTimeout(() => {
      this.disabled = true
      console.log(';;;')
    }, 2000)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
