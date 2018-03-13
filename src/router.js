import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Counter from './components/Counter.vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/counter', component: Counter },
    ]
});