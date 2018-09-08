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
        <router-link to="/home">Home</router-link>
        <br/>
        <br/>
        <router-link to="/articles/10">Articles 10</router-link>
        <router-link to="/articles/12">Articles 12</router-link>
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
