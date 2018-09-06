import Vuex from 'vuex';
import Vue from 'vue';
import shop from './../api/shop';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: { // = data
        products: []
    },

    getters: { // = computed properties, perfect filter and calculate runtime
        //sơ chế dữ liệu cần thiết same phương thức get
        availableProducts (state, getters) {
            return state.products.filter(product => product.inventory > 0);
        }
    },

    actions: { // = methods

        /*
        1 số cách call API có thể delay khá nhiều thì chúng ta nên sử dụng Promise mới ra của javascript
        1 số cách viết function mới ES6 là arrow function () => {} và rút gọn khai báo {commit} = context <=> commit = context.commit
        */

        fetchProducts ({commit}) { // when some component call dispatch (action), this method sync data
            var callApi = new Promise((resolve) => {
                //make the call (liên quan đến call API)
                //run setProducts mutations
                shop.getProducts(products => {
                    commit('setProducts', products);//send data to store
                    resolve();
                });
            });
            return callApi;
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
