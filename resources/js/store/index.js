import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: { // = data
        products: []
    },

    getters: { // = computed properties, perfect filter and calculate runtime
        //sơ chế dữ liệu cần thiết same phương thức get
        availableProducts (state, getters) {
            return state.products.filter(product => product.inventory > 0)
        }
    },

    actions: {
        fetchProducts () {
            //make the call
            //run setProducts mutations
        }
    },

    mutations: {
        //nơi hứng dữ liệu từ các chỗ components đẩy lên khác nhau
        // same phương thức set
        setProducts (state, products) { // every params have state and payload
            // update products
            state.products = products
        }
    }
});
export default store;
