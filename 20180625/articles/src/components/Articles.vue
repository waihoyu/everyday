<template>
  <div class="articles">
    <h1>{{ msg }}</h1>
    <ul v-for="(key, i) in artilces">
      <Article :artilce-val="key" />
    </ul>

  </div>
</template>

<script>
import Article from './Article'
export default {
  name: 'Articles',
  components: {
    Article
  },
  data() {
    return {
      msg: '新闻列表',
      artilces: [
        {
          title: '[杂谈]了解一些额外知识，让前端开发锦上添花',
          datetime: '2018年5月30日'
        },
        {
          title: '为何我们要用 React 来写小程序 - Taro 诞生记',
          datetime: '2018年6月30日'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  border: 1px solid green;
  text-align: center;
}
</style>
