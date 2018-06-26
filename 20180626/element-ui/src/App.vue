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
          <div class="step1">
            <el-form class="demo-ruleForm" ref="ruleForm" label-position="top" :model="ruleForm">
              <el-form-item label="活动名称" prop="name">
                <el-input v-model="ruleForm.name" size="larget"></el-input>
              </el-form-item>
              <el-form-item label="" prop="fenLei" required>
                <el-row style="hegiht:35px" type="flex" align="middle">
                  <el-col :span="3" style="width:90px">
                    <div class="el-form-item__label">活动分类</div>
                  </el-col>
                  <el-col :span="2">
                    <el-button @click.prevent="dialogFormFenLeiVisible=true" type="text" style="margin: 0;padding: 0;">设置</el-button>
                  </el-col>
                </el-row>
                <el-radio-group v-model="ruleForm.fenLei">
                  <el-radio v-for="item of ruleForm.fenLeis" :key="item.name" :label="item.name"></el-radio>
                </el-radio-group>
              </el-form-item>
              <!--  -->
              <el-form-item label="活动标签" required>
                <el-tag v-for="tag in ruleForm.tags" :key="tag" :closable="true" type="primary" @close="handleClose(tag)">
                  {{tag.name}}
                </el-tag>
                <el-button icon="el-icon-plus" size="large" @click.native="showDialog" style="vertical-align: middle;margin: 10px;"></el-button>
                <transition name="fade">
                  <div class="el-form-item__error" v-show="tagsValid">{{tagsError}}</div>
                </transition>
              </el-form-item>

            </el-form>
            <!-- 弹框 -->
            <!-- 弹框 -->
            <el-dialog title="添加活动标签" :visible.sync="dialogFormVisible" top="35%">
              <el-form :model="dialogForm">
                <el-form-item>
                  <el-input v-model="dialogForm.name" auto-complete="off"></el-input>
                </el-form-item>
              </el-form>
              <span slot="footer" class="dialog-footer">
                <el-button @click.native="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click.native="handleTagAdd(dialogForm.name,dialogForm,ruleForm.tags)">添加</el-button>
              </span>
            </el-dialog>
            <!-- 设置活动分类 -->
            <el-dialog title="设置活动分类" :visible.sync="dialogFormFenLeiVisible">
              <el-form :model="dialogFormFenLei">
                <el-form-item>
                  <el-tag v-for="fenLei of ruleForm.fenLeis" :key="fenLei.name" :closable="true" type="primary" @close="handleCloseFenLei(fenLei)" style="margin:5px">
                    {{fenLei.name}}
                  </el-tag>
                </el-form-item>
                <el-form-item>
                  <el-input v-model="dialogFormFenLei.name" auto-complete="off"></el-input>
                </el-form-item>
              </el-form>
              <span slot="footer" class="dialog-footer">
                <el-button @click.native="dialogFormFenLeiVisible = false">取 消</el-button>
                <el-button type="primary" @click.native="handleAddItem(dialogFormFenLei.name,dialogFormFenLei,ruleForm.fenLeis)">添加</el-button>
              </span>
            </el-dialog>

          </div>
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
      tagsValid: false,
      tagsError: false,
      disabled: false,
      isLoading: false,
      step: 0,
      preStep: true,
      nextStep: true,
      dialogForm: { name: '' },
      dialogFormFenLei: { name: '' },
      dialogFormVisible: false,
      dialogFormFenLeiVisible: false,
      ruleForm: {
        name: '',
        fenLeis: [
          {
            name: '未发布'
          },
          {
            name: '测试活动'
          },
          {
            name: '精彩活动'
          }
        ],
        fenLei: '测试活动',
        tags: []
      }
    }
  },
  methods: {
    handleTagAdd: function(tag, form, tags) {
      if (tag && tag.trim().length !== 0) {
        var isExist = false
        tag = tag.trim()
        for (var i = 0; i < tags.length; i++) {
          if (tags[i].name == tag) {
            isExist = true
            break
          }
        }
        if (isExist) {
          this.$message({
            message: '该标签已存在',
            type: 'warning'
          })
        } else {
          this.dialogFormVisible = false
          this.dialogFormFenLeiVisible = false
          tags.push({
            name: tag
          })
        }
      } else {
        this.$message({
          message: '标签不能为空',
          type: 'warning'
        })
      }
    },
    showDialog: function() {
      if (this.ruleForm.tags.length >= 5) {
        this.$message({
          message: '最多设置5个标签',
          type: 'warning'
        })
      } else {
        this.dialogFormVisible = true
        this.dialogForm = {}
      }
    },
    handleAddItem: function(tag, form, tags) {
      if (tag && tag.trim().length !== 0) {
        var isExist = false
        tag = tag.trim()
        for (var i = 0; i < tags.length; i++) {
          if (tags[i].name == tag) {
            isExist = true
            break
          }
        }
        if (isExist) {
          this.$message({
            message: '该标签已存在',
            type: 'warning'
          })
        } else {
          this.dialogFormVisible = false
          this.dialogFormFenLeiVisible = false
          tags.push({
            name: tag
          })
        }
      } else {
        this.$message({
          message: '标签不能为空',
          type: 'warning'
        })
      }
    },
    handleCloseFenLei: function(fenLei) {
      var index = this.ruleForm.fenLeis.indexOf(fenLei)
      this.ruleForm.fenLeis.splice(index, 1)
    },
    handleClose: function(tag) {
      this.dialogFormFenLeiVisible = false
    },
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
