import {
    createRouter,
    createWebHistory
} from "vue-router";

import Home from "./components/Home.vue";
import Products from "./components/Products.vue";
import Rule from "./components/Rule.vue";
import AProducts from "./components/About-prod.vue";
import Aus from "./components/About-us.vue";
import Cart from "./components/Cart.vue";
import error from "./components/error.vue";
import PDetail from "./components/ProductsDetail.vue";
import Invoice from "./components/Invoice.vue"
import Search from "./components/render/ProductForSearch.vue"
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
import User from "./components/auth/User.vue"

import './configs/firebase'
import {
    getAuth
} from 'firebase/auth'

const requireAuth = (to, from, next) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) next({
        name: 'Login',
        params: {}
    })
    next()
}

export const routes = [{
        path: '/',
        component: Home,
    },
    {
        path: '/products',
        component: Products,
    },
    {
        path: '/about-us',
        component: Aus,
    },
    {
        path: '/about-products',
        component: AProducts,
    },
    {
        path: '/chinh-sach-bao-mat',
        component: Rule,
    },
    {
        path: '/cart',
        component: Cart,
    },
    {
        path: '/:pathMatch(.*)*',
        component: error
    }, {
        path: '/cart/order-received',
        component: Invoice,
        name: Invoice
    }, {
        path: '/product/:id',
        component: PDetail,
        props: true
    }, {
        path: '/search',
        component: Search,
        props: true
    }, {
        path: '/user/login',
        component: Login,
        name: "Login"
    }, {
        path: '/user/register',
        component: Register,
    }, {
        path: '/user',
        component: User,
        beforeEnter: (to, from, next) => {
            requireAuth(to, from, next)
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes

})

export default router