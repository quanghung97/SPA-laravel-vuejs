import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: { // = data
        products: []
    },

    getters: { // = computed properties
        productsCount () {
            //..
        }
    },

    actions: {
        fetchProducts () {
            //make the call
            //run setProducts mutations
        }
    },

    mutations: {
        setProducts (state, products) { // every params have state and payload
            // update products
            state.products = products
        }
    }
});
export default store;
