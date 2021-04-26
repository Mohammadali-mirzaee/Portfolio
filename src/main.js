import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import gsap from "gsap";
import VueEllipseProgress from 'vue-ellipse-progress';


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(gsap);
Vue.use(VueEllipseProgress);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
