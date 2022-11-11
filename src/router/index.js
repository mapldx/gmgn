import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/export',
    name: 'export',
    component: () => import('../views/ExportView.vue'),
    props: (route) => ({
      top_chain: route.query.top_chain,
      total_days: route.query.total_days,
      on_1: route.query.on_1,
      txs_on_1: route.query.txs_on_1,
      on_2: route.query.on_2,
      txs_on_2: route.query.txs_on_2,
      number_tx: route.query.number_tx,
      max_day: route.query.max_day,
    }),
  },
  {
    path: '/app',
    name: 'app',
    component: () => import('../views/AppView.vue'),
    props: (route) => ({ address: route.query.address }),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
