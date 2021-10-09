import {
    createStore
} from "vuex"


const store = createStore({
    state: {
        cart: [],
        invoice: [],
        tongtienincart: 0,
        search_string: null,
        // login: false
    },
    mutations: {
        addToCart(state, item) {
            var exist = false;
            var its = this.state.cart
            if (its == 0) {
                exist == false;
            } else {
                for (let i = 0; i < its.length; i++) {
                    if (its[i].id == item.id) {
                        exist = true;
                    }
                }
            }
            if (exist == false) {
                state.cart.push({
                    ...item
                })
            } else {
                for (let i = 0; i < its.length; i++) {
                    if (its[i].id == item.id) {
                        its[i].quantity++
                    }
                }
            }
        },
        xoaCart() {
            var its = this.state.cart
            its.splice(this.id);
        },
        // setLogin(state, status) {
        //     state.login = status
        // }
    },
})

export default store