<template>
    <div class="cart">
        <h2>Your Cart</h2>
        <P v-show="!items.length"><i>please add some products to Cart</i></P>
        <ul>
            <li v-for="product in products" :key="product.id">
                 {{product.title}}-{{product.price | currency}} x  {{product.quantity}}
            </li>
        </ul>
        <p>total:{{total | currency}}</p>
    </div>
</template>

<script>
import {mapGetters,mapState} from 'vuex'

export default {
    computed:{
     ...mapState({
        items: state => state.cart.items,
        checkoutStatus: status => state.cart.checkoutStatus
    }),
    ...mapGetters({
        products:'cartProducts',
        total:'cartTotalPrice'
    })
    }
}
</script>

<style>

</style>
