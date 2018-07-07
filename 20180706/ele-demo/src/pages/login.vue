
<template>
    <!-- <div>login</div> -->
    <div class="loginContainer">
        <head-top head-title="登录" goBack="true">
            <slot name="button"></slot>
        </head-top>
        <img :src="captchaCodeImg" alt="" v-if="captchaCodeImg" style="margin-top:10rem">
    </div>
</template>

<script>
import headTop from "@/components/headTop.vue"
import { getcaptchas } from '@/api/getData'
//业务经验一 navigationBar的封装
// history  title 居中
// 右边的buttons
export default {
    data(){
        return {
            captchaCodeImg:'',
            codeNumber:null
        } 
    },
    components: {
    'head-top': headTop
    },
    methods: {
       async getCaptchCode() {
            const res = await getcaptchas()
            this.captchaCodeImg = res.code;
        }
    },
    mounted(){
        this.getCaptchCode()
    }
}
</script>

<style>

</style>
