<template>
    <div>
        <ProductList/>
        <hr>
        <ShoppingCart/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <router-view></router-view>
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
