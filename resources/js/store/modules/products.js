import shop from './../../api/shop';

export default {
    state: {
        items: []
    },

    getters: {
        availableProducts (state, getters) {
            return state.items.filter(product => product.inventory > 0);
        },

        productIsInStock () {
            return (product) => {
                return product.inventory > 0
            }
        }
    },

    mutations: {
        // same với phương thức set giá trị
        setProducts (state, products) { // every params have state and payload
            // update products
            state.items = products
        },

        decrementProductInventory (state, product) {
            product.inventory--
        }
    },

    actions: {
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
    }
}
