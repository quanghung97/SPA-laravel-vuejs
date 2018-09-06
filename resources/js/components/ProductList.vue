<template>
    <div class="product-list">
        <h1>Product List</h1>
        <ul>
            <li v-for="product in products">{{product.title}} - {{product.price}}</li>
        </ul>
    </div>
</template>

<script>
import shop from './../api/shop';
import store from './../store/index';

export default {

    computed: {
        products () {
            return store.getters.availableProducts // get all available products in store throw getters
        }
    },

    created() {
        shop.getProducts(products => {
            store.commit('setProducts', products)//send data to store
        })
    }
}
</script>

<style lang="css">
</style>
