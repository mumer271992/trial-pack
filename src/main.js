import Vue from 'vue';
import App from './App.vue';
import mixins from './shared/mixins';
import store from './store/index';

import './assets/scss/main.scss';

Vue.config.productionTip = false;
Vue.mixin(mixins);
new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
