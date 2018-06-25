
<template>
  <!--  -->
  <button class="el-button " :class="[ type? 'el-button--' + type: '',{'is-disabled':buttonDisabled,'is-loading':loading} ]" :disabled="buttonDisabled">
    <i class="el-icon-loading" v-if="loading"></i>
    <i v-if="icon" :class="icon"></i>
    <slot></slot>
  </button>
</template>
<script>
//
export default {
  name: 'ELButton',
  props: {
    loading: Boolean,
    disabled: Boolean,
    type: {
      type: String,
      default: 'default'
    },
    icon: {
      type: String,
      default: ''
    }
  },
  computed: {
    buttonDisabled() {
      return this.disabled
    }
  }
}
</script>
<style>
</style>