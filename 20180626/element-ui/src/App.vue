<template>
  <div id="app">
    <!-- <el-button-group>
      <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
      <el-button type="primary">下一页
        <i icon="el-icon-arrow-right el-icon-right"></i>
      </el-button>
    </el-button-group>
    <el-button-group>
      <el-button type="primary" icon="el-icon-edit"> </el-button>
      <el-button type="primary" icon="el-icon-share"> </el-button>
      <el-button type="primary" icon="el-icon-delete">
      </el-button>
    </el-button-group>

    <el-button loading type="primary">提交</el-button>
    <el-button :loading='isLoading' type="primary" icon="el-icon-edit" @click="change"></el-button>
    <el-button :disabled="disabled" type="info">提交</el-button>
    <el-button :disabled="disabled" type="warning">提交</el-button> -->
    <!-- <el-button :disabled="disabled" type="danger">提交</el-button>
     -->
    <form action="http://www.baidu.com" method="get">
      <el-button type="primary" native-type="button" @click="doSubmit"> 提交</el-button>
    </form>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import ELButton from '@/components/ELButton'
import ELButtonGroup from '@/components/ELButtonGroup'
import { setTimeout } from 'timers'
export default {
  name: 'App',
  components: {
    'el-button': ELButton,
    'el-button-group': ELButtonGroup
  },
  data() {
    return {
      disabled: false,
      isLoading: false
    }
  },
  methods: {
    change: function(event) {
      this.isLoading = !this.isLoading
      console.log(event)
    },
    doSubmit: function(event) {
      console.log(event)
    }
  },
  mounted: function() {
    setTimeout(() => {
      this.disabled = true
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
