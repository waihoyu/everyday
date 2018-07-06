<template>
<header id="head_top">
    <div>
        headTop
        <slot name="logo"></slot>
    </div>
</header>

</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
    @import '../style/mixin'
    #head_top
        background-color $blue
        position fixed
        z-index 100
        left 0
        top 0
        wh(100%,1.95rem)
</style>

