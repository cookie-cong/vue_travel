// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'styles/reset.css'
import 'styles/border.css'//解决一像素边框的方案
// import fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../dist/css/swiper.css'
import '../dist/js/swiper'
import store from "./store"

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
