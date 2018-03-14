import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Counter from './components/Counter.vue';
import Inventory from './components/Inventory';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Home,
            children: [
                {
                    path: '/counter',
                    component: Counter
                },
                {
                    path: '/inventory',
                    component: Inventory,
                },
                {
                    path: '/alchemy',
                    component: Counter,
                },
                {
                    path: '/gallery',
                    component: Counter,
                },
                {
                    path: '/skin',
                    component: Counter,
                },
                {
                    path: '/market',
                    component: Counter,
                },
                {
                    path: '/data',
                    component: Counter,
                }
            ]
        },
    ]
});