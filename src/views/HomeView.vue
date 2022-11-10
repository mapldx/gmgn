<template>
  <div class="home">
    <LandingCmp />
  </div>
</template>

<script>
// @ is an alias to /src
import LandingCmp from '@/components/LandingCmp.vue';

export default {
  name: 'HomeView',
  components: {
    LandingCmp,
  },
};
</script>
