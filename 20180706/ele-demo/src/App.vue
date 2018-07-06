<template>
  <div id="app">
    <router-link to="/login">login</router-link>
    <transition name="router-fade">
      <keep-alive>
        <router-view v-if="$route.meta.keepalive"/>
      </keep-alive>
    </transition>

     <transition name="router-fade">
        <keep-alive>
          <router-view v-if="!$route.meta.keepalive"/>
        </keep-alive>
     </transition>

  <!-- <div class="box"></div> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
@import './style/common'

//name + enter 进入的那一瞬间
  // .router-fade-enter
  // .router-fade-enter-active  会在进入的整个过程里
  // 完全进入后会移除整个类名

  .router-fade-enter,
  .router-fade-leave-active{
    opacity 0
    }
  .router-fade-enter-active,.router-fade-leave-active {
    transition opacity 3s
    }

  // *
  //   margin 0
  //   padding 0
  
  // .box
  //   width 16rem
  //   height 1rem
  //   background red

</style>
