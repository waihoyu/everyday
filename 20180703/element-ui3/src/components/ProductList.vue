<template>
    <div>
        <ul>
            <li v-for="(product,index) in products" :key="index">
                {{product.title}} - {{product.price | currency}}
                <br>
                <button :disabled="!product.inventory" @click="addProductToCart(product)"> add to cart </button>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    computed: mapState({products: state => state.products.all}),
    methods: mapActions(['addProductToCart']),
    created () {this.$store.dispatch('getAllProducts')}
}
</script>

<style>

</style>
