<template>
  <div id="app">
    <h1>Basic</h1>
    <ul>
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="/foo">Foo</router-link>
      </li>    
      
    </ul>
   <router-view></router-view> 
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
   
  }
}
</script>

<style>

</style>
