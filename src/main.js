import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './routes';

Vue.use(Vuex);

const router = new VueRouter({
  routes
});

Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
