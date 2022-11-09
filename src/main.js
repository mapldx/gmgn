import Vue from 'vue';
import Meta from 'vue-meta';

import App from './App.vue';
import router from './router';
import './assets/tailwind.css';

Vue.config.productionTip = false;
Vue.use(Meta);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
