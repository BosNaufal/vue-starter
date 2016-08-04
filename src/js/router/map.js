export default {
  '/': {
    component: require('../components/home/index.vue'),
  },

  '*': {
    component: require('../components/not-found.vue'),
  },
}
