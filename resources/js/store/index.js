import Vuex from 'vuex';
import Vue from 'vue';
import _ from 'lodash';
import shop from './../api/shop';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: { // = data
        products: [],
        // {id, quantity}(giỏ hàng có id của product và số lượng)
        cart: []
    },

    getters: { // = computed properties, perfect filter and calculate runtime
        //sơ chế dữ liệu cần thiết same phương thức get
        availableProducts (state, getters) {
            return state.products.filter(product => product.inventory > 0);
        },
        // sync data with computed in ShoppingCart component
        cartProducts (state, getters) {
            var result = state.cart.map(cartItem => {
                const product = state.products.find(product => product.id === cartItem.id)
                return {
                    title: product.title,
                    price: product.price,
                    quantity: cartItem.quantity
                }
            })
            return result
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
        },

        //add to Cart
        addProductToCart (context, product) {
            if (product.inventory > 0) {
                // find cartItem
                const cartItem = context.state.cart.find(item => item.id === product.id)
                var {commit} = context;
                if (!cartItem) {
                    //pushProductToCart
                    commit('pushProductToCart', product.id)
                } else {
                    // incrementItemQuantity
                    commit('incrementItemQuantity', cartItem)
                }
                    // decrementProductInventory
                    commit('decrementProductInventory', product)
            }
        }
    },

    mutations: {
        //nơi hứng dữ liệu từ các chỗ components đẩy lên khác nhau thông qua actions của store
        // same với phương thức set giá trị
        setProducts (state, products) { // every params have state and payload
            // update products
            state.products = products
        },

        // up cartItem = {id: 123, quantity: 2}
        pushProductToCart (state, productId) {
            state.cart.push({
                id: productId,
                quantity: 1
            })
        },

        incrementItemQuantity (state, cartItem) {
            cartItem.quantity++
        },

        decrementProductInventory (state, product) {
            product.inventory--
        }
    }
});
export default store;
