
<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>


  require('../../vendor/bootstrap/css/bootstrap.min.css')
  require('../../vendor/ionicons/css/ionicons.min.css')
  
  require('../../stylus/main.styl')

  import Store from '../vuex/index.js';

  export default {
    store: Store,
  };

</script>
