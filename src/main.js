import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueTypedJs from 'vue-typed-js'
import Meta from 'vue-meta'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import 'bulma-helpers/css/bulma-helpers.min.css'
import VideoBackground from "./components/VideoBackground";


Vue.use(Buefy);
Vue.use(Meta);
Vue.use(VueTypedJs);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  components:{
    VideoBackground
  },
  render: h => h(App)
}).$mount('#app')
