<template>
  <div class="home">
    <ExportCmp />
  </div>
</template>

<script>
// @ is an alias to /src
import ExportCmp from '@/components/ExportCmp.vue';

export default {
  name: 'ExportView',
  components: {
    ExportCmp,
  },
};
</script>
