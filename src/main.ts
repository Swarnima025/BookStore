import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBookOpen,faMagnifyingGlass,faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { faHeart} from '@fortawesome/free-regular-svg-icons' 
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faBookOpen,faMagnifyingGlass,faCartShopping,faHeart)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
