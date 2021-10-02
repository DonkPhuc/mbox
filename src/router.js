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
        name:Invoice
    }, {
        path: '/product/:id',
        component: PDetail,
        props: true
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes

})

export default router