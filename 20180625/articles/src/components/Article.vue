<template>
  <div class="article">
    <li>
      <h3>{{artilceVal['title']}}</h3>
      <h3>{{artilceVal['datetime']}}</h3>
    </li>
  </div>
</template>
//v-for="(value, key) in artilceVal"
<script>
export default {
  name: 'Article',
  data() {
    return {
      msg: 'This is Article'
    }
  },
  props: ['artilceVal']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
li {
  border: 1px solid red;
  width: 400px;
  text-align: center;
}
</style>
