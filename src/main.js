import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import basicElementComponents from './element';

Vue.config.productionTip = false;

Vue.use(basicElementComponents);

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
