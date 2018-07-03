<template>
  <div id="app">
    <ele-alter title="111" center type="success" v-if="hasErr" @close="doAlertClose">
    </ele-alter>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import EleAlert from './components/EleAlert'
export default {
  name: 'App',
  data(){
    return{
      hasErr: false
    }
  },
  mounted(){
    setTimeout(()=>{
      this.hasErr = true
    },2000)
  },
  components: {
   "ele-alter":EleAlert
  },
  methods: {
    doAlertClose(){
      console.log("close");
    }
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
