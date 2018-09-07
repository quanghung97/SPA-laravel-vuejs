import shop from './../../api/shop';

export default {
    state: {
        // {id, quantity}(giỏ hàng có id của product và số lượng)
        items: [],
        setCheckoutStatus: null
    },

    getters: {
        // sync data with computed in ShoppingCart component
        cartProducts (state, getters, rootState) {
            var result = state.items.map(cartItem => {
                const product = rootState.products.items.find(product => product.id === cartItem.id)
                return {
                    title: product.title,
                    price: product.price,
                    quantity: cartItem.quantity
                }
            })
            return result
        },

        cartTotal (state, getters) {
            var total = 0
            getters.cartProducts.forEach(product => {
                total += product.price * product.quantity
            })
            return total
            // can use reduce to collapse code
            //return getters.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0)
        }
    },

    mutations: {
        // up cartItem = {id: 123, quantity: 2}
        pushProductToCart (state, productId) {
            state.items.push({
                id: productId,
                quantity: 1
            })
        },

        incrementItemQuantity (state, cartItem) {
            cartItem.quantity++
        },


        setCheckoutStatus (state, status) {
            state.checkoutStatus = status
        },

        emptyCart (state) {
            state.items = []
        }
    },

    actions: {
        //add to Cart
        addProductToCart (context, product, rootState) {
            if (context.getters.productIsInStock(product)) {
                // find cartItem
                const cartItem = context.state.items.find(item => item.id === product.id)
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
        },

        checkout ({state, commit}) {
            shop.buyProducts(
                state.items,
                () => {
                    commit('emptyCart')
                    commit('setCheckoutStatus', 'success')
                },
                () => {
                    commit('setCheckoutStatus', 'fail')
                }
            )
        }
    }
}
