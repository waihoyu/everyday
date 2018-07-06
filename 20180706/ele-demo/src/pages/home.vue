<template>
    <div>home
        <head-top signin-up="home">
            <span>default</span>
            <span slot="logo" class="head_logo">ele.me</span>
        </head-top>
    </div>
</template>

<script>
import headTop from "@/components/headTop.vue"
export default {
    components:{
        'head-top':headTop
    }
}
</script>

<style>

</style>
