export default {

  '/': {
    component: function (resolve) {
      require(['../components/Home/index.vue'], resolve)
    }
  },

  '/about': {
    component: function(resolve){
      require(['../components/About/index.vue'], resolve)
    },
  },

}
