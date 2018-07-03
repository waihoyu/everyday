<template>
    <transition name="el-alter-fade">
        <!-- 居中 -->
        <div class="el-altert" :class="[typeClass,center?'is-center':'']" v-show="visible">{{title}}
          <div class="el-alert__content">
            <span class="el-alert__title" v-if="title">{{title}}</span>
            <i class="el-alert__closebtn el-icon-close" @click="close()"></i>
          </div>
        </div>
    </transition>
</template>
<script>
export default {
  data(){
  return {
    visible:true
  } 
  },
  props: {
    title: {
      type: String,
      default: '',
      required: true
    },
    type: {
      type: String,
      default: '',
      required: true
    },
    center: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  computed: {
    close(){
      this.visible = false
      this.$emit('close')
    },
    typeClass() {
      return `el-alert--${this.type}`
    }
  }
}
</script>
<style>

</style>