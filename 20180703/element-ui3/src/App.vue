<template>
  <!-- <div id="app">
    <ele-alter title="111" center type="success" v-if="hasErr" @close="doAlertClose">
    </ele-alter>
  </div> -->
  <div class="app">
    <h1>shopping cart example</h1>
    <h2>products</h2>
    <hr>
    <product-list>
    </product-list>
    <hr>
    <shopping-cart>
    </shopping-cart>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList'
import ShoppingCart from '@/components/ShoppingCart'
import HelloWorld from './components/HelloWorld'
import EleAlert from './components/EleAlert'
// import products from './api/shop'

export default {
  name: 'App',
  data(){
    return{
      hasErr: false,
      // products:[]
    }
  },
  created() {
        // products.getProducts((data)=>{
        //     // this.products = data
        // })
    },
  mounted(){
    setTimeout(()=>{
      this.hasErr = true
    },2000)
  },
  components: {
   "ele-alter":EleAlert,
   ProductList,
   ShoppingCart
  },
  methods: {
    doAlertClose(){
      console.log("close");
    }
  }
}
</script>


<style>

</style>
