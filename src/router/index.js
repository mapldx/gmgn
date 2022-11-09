import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true,
});

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/app',
    name: 'app',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AppView.vue'),
    props: (route) => ({ address: route.query.address }),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
