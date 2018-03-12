import Vue from 'vue';
// import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from './components/Home.vue';
import nav1 from './components/nav1.vue';
// import axios from 'axios';
// import VueAxios from 'vue-axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import store from './store/'

// use module
// Vue.use(Vuex);
Vue.use(VueRouter);
// Vue.use(VueAxios, axios);
Vue.use(ElementUI);

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/nav1', component: nav1},
  ]
});

Vue.config.productionTip = false

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
