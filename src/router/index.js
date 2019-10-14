import Vue from 'vue';
import VueRouter from 'vue-router';

import test from '../components/test.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/test',
    name: 'test',
    components: {
      content: test,
    },
  },
]


export const router = new VueRouter({
  //mode: 'history',
  routes
  // get rid of #
});
