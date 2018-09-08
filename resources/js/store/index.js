import Vuex from 'vuex';
import Vue from 'vue';
import _ from 'lodash';
import cart from './modules/cart';
import products from './modules/products';


Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        cart,
        products
    }
    // state: { // = data
    //
    // },
    //
    // getters: { // = computed properties, perfect filter and calculate runtime
    //     //sơ chế dữ liệu cần thiết same phương thức get
    //
    // },
    //
    // actions: actions,
    //
    // mutations: {
    //     //nơi hứng dữ liệu từ các chỗ components đẩy lên khác nhau thông qua actions của store
    //
    // }
});
export default store;
