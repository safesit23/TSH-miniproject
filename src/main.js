import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify';
import Hotjar from 'vue-hotjar'

Vue.use(Hotjar, {
    id: '1877936',  // Hotjar Site ID
    snippetVersion: 6
})

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

Vue.config.productionTip = false
library.add(fas);

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
