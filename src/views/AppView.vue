<template>
  <div class="home">
    <WrappedCmp />
  </div>
</template>

<script>
// @ is an alias to /src
import WrappedCmp from '@/components/WrappedCmp.vue';

export default {
  name: 'AppView',
  components: {
    WrappedCmp,
  },
};
</script>
