<template>
    <div>
        <h1>Shopping Cart</h1>
        <ul>
            <li v-for="product in products">
                {{product.title}} - {{product.price | currency}} - {{product.quantity}}
            </li>
        </ul>
        <p>Total : {{total | currency}}</p>
        <button type="button" @click="checkoutCart">button</button>
        <p v-if="$store.state.checkoutStatus">{{$store.state.checkoutStatus}}</p>
    </div>
</template>

<script>
export default {
    computed: {
        products () {
            return this.$store.getters.cartProducts
        },
        total () {
            return this.$store.getters.cartTotal
        }
    },

    methods: {
        checkoutCart () {
            this.$store.dispatch('checkout');
        }
    }
}
</script>

<style lang="css">
</style>
