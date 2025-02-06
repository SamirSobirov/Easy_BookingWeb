import {createRouter, createWebHistory} from 'vue-router';
import Result from '../Result/result.vue';
import Home from "../Home.vue";

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
