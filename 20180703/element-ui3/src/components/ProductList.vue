<template>
    <div>
        <ul>
            <li v-for="(product,index) in products" :key="index">
                {{product.title}} - {{product.price | currency}}
                <br>
                <button> add to cart </button>
            </li>
        </ul>
    </div>
</template>

<script>

import {mapState} from 'vuex'

export default {
    computed: mapState({products: state => state.products.all}),
    created () {this.$store.dispatch('getAllProducts')}
}

</script>

<style>

</style>
