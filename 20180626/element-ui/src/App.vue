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
    <!-- <form action="http://www.baidu.com" method="get">
      <el-button type="primary" native-type="button" @click="doSubmit"> 提交</el-button>
    </form> -->
    <header class="header header-fixed">
      <el-row>
        <el-col :span="24">
          <el-menu class="el-menu-demo" mode="horizontal" default-active="1">
            <el-menu-item index="1">高级插件</el-menu-item>
            <el-menu-item index="2">在线商城</el-menu-item>
            <el-menu-item index="3">客户管理</el-menu-item>
            <el-menu-item index="4">系统设置</el-menu-item>
            <el-menu-item index="5">活动发布</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </header>
    <main>
      <div class="main-left">
        <el-menu class="el-menu-vertical-demo">
          <el-menu-item index="1">活动发布</el-menu-item>
          <el-menu-item index="2">活动管理</el-menu-item>
          <!-- <el-menu-item>活动发布</el-menu-item> -->
        </el-menu>
      </div>
      <div class="main-right">
        <div class="activePublic">
          <el-steps :space="200" :active="step">
            <el-step title="活动信息"></el-step>
            <el-step title="报名签名"></el-step>
            <el-step title="分享设置"></el-step>
            <el-step title="个性设置"></el-step>
          </el-steps>
          <!-- 按钮组  上一步  下一步  发布活动 -->
          <el-button-group>
            <el-button v-show="preStep" @click.native.prevent="handlePreStep">上一步</el-button>
            <el-button type="primary" v-show="nextStep" @click.native.prevent="handlePreNextStep">下一步</el-button>
            <el-button type="primary">发布活动</el-button>
          </el-button-group>
        </div>
      </div>
    </main>
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
    // 'el-button': ELButton,
    // 'el-button-group': ELButtonGroup
  },
  data() {
    return {
      disabled: false,
      isLoading: false,
      step: 0,
      preStep: true,
      nextStep: true
    }
  },
  methods: {
    change: function(event) {
      this.isLoading = !this.isLoading
      console.log(event)
    },
    doSubmit: function(event) {
      console.log(event)
    },
    handlePreStep: function(event) {
      this.step--
      this.goStep(this.step)
    },
    handlePreNextStep: function(event) {
      this.step++
      this.goStep(this.step)
    },
    goStep: function(n) {
      switch (n) {
        case 0:
          this.preStep = false
          this.nextStep = true
          break
        case 1:
          this.preStep = true
          this.nextStep = true
          break
        case 2:
          this.preStep = true
          this.nextStep = true
          break
        case 3:
          this.preStep = true
          this.nextStep = true
          break
        case 4:
          this.preStep = true
          this.nextStep = false
          break
        default:
          break
      }
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
* {
  margin: 0;
  padding: 0;
}
#app {
  min-width: 1200px;
  margin: 0 auto;
  font-family: sans-serif;
}
header {
  z-index: 1000;
  min-width: 1200px;
  transition: all 0.5s ease;
  border-top: 4px solid #3091f2;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
}
header.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
header.el-menu-demo {
  padding-left: 300px !important;
}
main {
  margin-top: 60px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  min-height: 800px;
  border: solid 40px #e9ecf1;
  background-color: #fcfcfc;
}
main .main-left {
  text-align: center;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 200px;
  flex: 0 0 200px;
}
main .main-right {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  background-color: #fff;
  padding: 50px 70px;
}
main .el-menu {
  background-color: transparent !important;
}
</style>
