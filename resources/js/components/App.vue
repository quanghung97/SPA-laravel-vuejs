<template>
    <div>
        <ProductList/>
        <hr>
        <ShoppingCart/>
    </div>
</template>

<script>
    import ProductList from './ProductList.vue';
    import ShoppingCart from './ShoppingCart.vue';
    export default {
        components: {
            ProductList,
            ShoppingCart
        }
    }
</script>
