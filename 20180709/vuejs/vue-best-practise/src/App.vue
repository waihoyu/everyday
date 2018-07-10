<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
export default {
  name: 'App',
  component: {
    Sidebar
  }
}
</script>

<style>

</style>
