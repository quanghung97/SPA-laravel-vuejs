<template>
    <div class="product-list">
        <h1>Product List</h1>
        <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif">

        <ul v-else>
            <li v-for="product in products">
                {{product.title}} - {{product.prie}}
                <button @click="addProductToCart(product)">button</button>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    data () {
        return {
            loading: false
        }
    },

    computed: { // same getter in java
        products () {
            return this.$store.getters.availableProducts // get all available products in store throw getters
        }
    },

    methods: {
        addProductToCart (product) {
            this.$store.dispatch('addProductToCart', product)
        }
    },

    created() {//when components created after that fetch to get data with action and save data in store
        this.loading = true;
        this.$store.dispatch('fetchProducts')
            .then(() => {this.loading = false})
    }
}
</script>

<style lang="css">
</style>
