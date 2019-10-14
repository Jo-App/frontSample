import Vue from 'vue';
import VueRouter from 'vue-router';

import test from '../components/test.vue';
import MultiUploader from '../components/MultiUploader.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/test',
    name: 'test',
    components: {
      content: test,
    },
  },
  {
    path: '/MultiUploader',
    name: 'MultiUploader',
    components: {
      content: MultiUploader,
    },
  }
]


export const router = new VueRouter({
  //mode: 'history',
  routes
  // get rid of #
});
