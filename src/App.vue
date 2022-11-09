<template>
  <div id="app">
    <!--
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
    -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>

const EMOJIPEDIA = 'https://emojipedia-us.s3.amazonaws.com/social/emoji/sun.png';

export default {
  name: 'App',
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
  data() {
    return {
      logo: EMOJIPEDIA,
    };
  },
};
</script>
