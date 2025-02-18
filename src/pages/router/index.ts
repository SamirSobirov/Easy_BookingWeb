import { createRouter, createWebHistory } from 'vue-router';
import Result from '../Result/result.vue';
import Home from "../Home.vue";
import EasyBookingShop from "../Shop/EasyBookingShop.vue";
import AboutProduct from "../Shop/AboutProduct.vue";

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/result',
        name: 'Result',
        component: Result,
    },
    {
        path: '/shop',
        component: EasyBookingShop,
    },
    {
        path: '/shop/:id',
        name: 'AboutProduct',
        component: AboutProduct,
        props: true
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../NoResult.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
