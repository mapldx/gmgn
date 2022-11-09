<template>
  <div class="home">
    <WrappedCmp />
  </div>
</template>

<script>
// @ is an alias to /src
import WrappedCmp from '@/components/WrappedCmp.vue';

const EMOJIPEDIA = 'https://emojipedia-us.s3.amazonaws.com/social/emoji/sun.png';

export default {
  name: 'AppView',
  components: {
    WrappedCmp,
  },
  data() {
    return {
      logo: EMOJIPEDIA,
    };
  },
  metaInfo: {
    meta: [
      { name: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:domain', content: 'yearin.gmgn.today' },
      { property: 'twitter:url', content: 'https://yearin.gmgn.today/' },
      { name: 'twitter:title', content: '☀️ gm/gn: your 2022 blockchain wrapped' },
      { name: 'twitter:description', content: 'Inspired by Spotify Wrapped, gm/gn is a compilation of data about your cross-chain activity over the past year. Short for good morning/good night, gm/gn is a term to promote positivity and friendship among the Web 3 community.' },
      { name: 'twitter:image', content: 'this.logo' },
    ],
  },
};
</script>
