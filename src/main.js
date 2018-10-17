import Vue from 'vue'
//import App from './App2.vue'
import App from './App.vue'
//registering a component globally (can be used in any other component)
//import Ninjas from './Ninjas.vue'
//Vue.component("ninjas", Ninjas);

export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
