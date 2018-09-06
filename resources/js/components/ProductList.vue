<template>
    <div class="product-list">
        <h1>Product List</h1>
        <ul>
            <li v-for="product in products">{{product.title}} - {{product.price}}</li>
        </ul>
    </div>
</template>

<script>
import store from './../store/index';

export default {

    computed: {
        products () {
            return store.getters.availableProducts // get all available products in store throw getters
        }
    },

    created() {//when components created after that fetch to get data with action and save data in store
        store.dispatch('fetchProducts')
    }
}
</script>

<style lang="css">
</style>
