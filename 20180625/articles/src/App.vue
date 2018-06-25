<template>
  <div id="app">
    <Articles/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Articles from './components/Articles'

export default {
  name: 'App',
  data() {
    return {}
  },
  components: {
    HelloWorld,
    Articles
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
