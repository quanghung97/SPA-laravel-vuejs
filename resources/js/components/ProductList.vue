<template>
    <div class="product-list">
        <h1>Product List</h1>
        <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif">

        <ul v-else>
            <li v-for="product in products">
                {{product.title}} - {{product.price | currency}} - {{product.inventory}}
                <button
                    :disabled="!productIsInStock(product)"
                    @click="addProductToCart(product)"

                    >button
                </button>
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
            return this.$store.state.products
        },
        //dynamic getters send value (object) to getters product and compare inventory in store
        productIsInStock () {
            return this.$store.getters.productIsInStock
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
