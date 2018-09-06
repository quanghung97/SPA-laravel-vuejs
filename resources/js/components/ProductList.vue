<template>
    <div class="product-list">
        <h1>Product List</h1>
        <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif">

        <ul v-else>
            <li v-for="product in products">{{product.title}} - {{product.price}}</li>
        </ul>
    </div>
</template>

<script>
import store from './../store/index';

export default {
    data () {
        return {
            loading: false
        }
    },

    computed: {
        products () {
            return store.getters.availableProducts // get all available products in store throw getters
        }
    },

    created() {//when components created after that fetch to get data with action and save data in store
        this.loading = true;
        store.dispatch('fetchProducts')
            .then(() => {this.loading = false})
    }
}
</script>

<style lang="css">
</style>
