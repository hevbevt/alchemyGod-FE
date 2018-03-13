import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// use module
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,  
  store,
  render: h => h(App)
});
