import Vue from 'vue';
import store from '@/store';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './routes';

const router = new VueRouter({
  routes
});

Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
