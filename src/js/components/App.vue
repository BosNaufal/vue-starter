
<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>

  import '../../sass/main.sass'

  import Store from '../vuex/index.js';

  export default {
    store: Store,
  };

</script>
