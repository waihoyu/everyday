<template>
    <div>home
        <head-top signin-up="home">
            <span>default</span>
            <span slot="logo" class="head_logo">ele.me</span>
        </head-top>
        <nav class="city_nav">
            <div class="city_tip">
                <span>当前定位的城市：</span>
                <span>定位不准时，请在城市列表中选择</span>
            </div>
        </nav>
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

<style lang="stylus">
    @import "../style/mixin.styl"
    .city_nav
        padding-top 2.35rem
        border-top 1px solid $bc
        background-color #fff
        margin-bottom 0.4rem
        .city_tip
            fj()
            line-height 1.45rem
            padding 0 0.45rem 
            span:nth-of-type(1)
                sc(0.55rem,#666)
            span:nth-of-type(2)
                font-weight 900
                sc(0.475rem,#9f9f9f)
</style>
