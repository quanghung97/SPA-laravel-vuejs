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
import {mapState, mapGetters, mapActions} from 'vuex'

export default {
    data () {
        return {
            loading: false,
            productIndex: 1
        }
    },

    computed: {
        ...mapState({
            products: state => state.products.items
        }),

        ...mapGetters('products', {
            productIsInStock: 'productIsInStock'
        })
    },


    methods: {
        ...mapActions({
            fetchProducts: 'products/fetchProducts',
            addProductToCart: 'cart/addProductToCart'
        })
    },

    created() {//when components created after that fetch to get data with action and save data in store
        this.loading = true;
        this.fetchProducts()
            .then(() => {this.loading = false})
    }
}
</script>

<style lang="css">
</style>
