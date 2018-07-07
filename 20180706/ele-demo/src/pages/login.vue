
<template>
    <!-- <div>login</div> -->
    <div class="loginContainer">
        <head-top head-title="登录" goBack="true">
            <slot name="button"></slot>
        </head-top>
    </div>
</template>

<script>
import headTop from "@/components/headTop.vue"

//业务经验一 navigationBar的封装
// history  title 居中
// 右边的buttons
export default {
  components: {
    'head-top': headTop
  }
}
</script>

<style>

</style>
