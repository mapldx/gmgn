<!-- eslint-disable max-len -->
<template>
  <section class="bg-white">
    <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
      <section
        class="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6"
      >
        <img
          alt="Night"
          src="https://images.unsplash.com/photo-1642525027649-00d7397a6d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          class="absolute inset-0 h-full w-full object-cover opacity-20"
        />

        <div class="hidden lg:relative lg:block lg:p-12">

          <h2 class="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            ☀️ gm/gn,
            <br>
            ready for your 2022 blockchain wrapped?
          </h2>

          <p class="mt-4 leading-relaxed text-white/90 text-lg">
            Inspired by Spotify Wrapped, gm/gn is a compilation of data about your cross-chain activity over the past year. Short for good morning/good night, gm/gn is a term to promote positivity and friendship among the Web 3 community.
          </p>
        </div>
      </section>

      <main
        aria-label="Main"
        class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
      >
        <div class="max-w-xl lg:max-w-3xl">
          <div class="relative -mt-16 block lg:hidden">
            <a
              class="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
              href="/"
            >
              <span class="sr-only "></span>
              ☀️
            </a>

            <h1
              class="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
            >
              gm/gn,
              <br>
              ready for your 2022 blockchain wrapped?
            </h1>

            <p class="mt-4 leading-relaxed text-gray-500">
              Inspired by Spotify Wrapped, gm/gn is a compilation of data about your cross-chain activity over the past year. Short for good morning/good night, gm/gn is a term to promote positivity and friendship among the Web 3 community.
            </p>
          </div>

          <form class="mt-8 grid grid-cols-6 gap-6" @submit.stop.prevent="submit">
            <div class="col-span-6">
              <label for="Email" class="block text-lg font-medium text-gray-700">
                Your <b>Ethereum-based</b> wallet address

              <input
                type="text"
                id="address"
                name="address"
                v-model="address"
                class="mt-2 w-full rounded-md border-gray-300 bg-white text-xl text-gray-700 shadow-sm placeholder-gray-300"
                placeholder="0x, ENS (.eth), Crossbell (.csb), Lens (.lens)"
              />
              </label>
              <!-- eslint-disable -->
              <p class="mt-2 leading-relaxed text-gray-500 text-sm">
                Feeling lucky? Try clicking one of <button class="text-cyan-500" @click="lucky('0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045')">0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045</button>, <button class="text-cyan-500" @click="lucky('vitalik.eth')">vitalik.eth</button>, <button class="text-cyan-500" @click="lucky('diygod.csb')">diygod.csb</button>, <button class="text-cyan-500" @click="lucky('stani.lens')">stani.lens</button>
              </p>
              <!-- eslint-enable -->
            </div>
            <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
              <button
                class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-bold text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                type="submit"
                @click.stop.prevent="submit()"
              >
                I'm ready for my wrapped!
              </button>

              <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                Stay updated with related products from
                <a href="https://twitter.com/mapldx" target="_blank" class="text-gray-700 underline">@mapldx →</a>
              </p>
            </div>
          </form>

          <div class="col-span-6">
            <p class="mt-6 text-xs text-gray-400">
              The blockchain is a digitally-available, publicly-accessible record of your transactions. By using our service, you agree that the data provided is on an "as is" basis. This service does not require the a wallet connection. Thus, the service does not make any on-chain changes, nor does it have the permission or ability to fulfill, transact, or transfer any form of assets. At no time does it hold or possess, even beneficially, the assets within the queried address.
            </p>
            <p class="mt-4 text-sm font-bold text-gray-500">
              An <i>experimental</i> product of 🍕 from Manila, Philippines © 2022 mapldx
            </p>
          </div>
        </div>
      </main>
    </div>
  </section>
</template>
<!-- eslint-enable max-len -->

<script>
export default {
  name: 'LandingCmp',
  data() {
    return {
      address: null,
    };
  },
  metaInfo() {
    return {
      meta: [
        { name: 'title', content: 'gm/gn: your 2022 blockchain wrapped' },
        { name: 'description', content: 'Inspired by Spotify Wrapped, gm/gn is a compilation of data about your cross-chain activity over the past year. Short for good morning/good night, gm/gn is a term to promote positivity and friendship among the Web 3 community.' },
        { property: 'og:url', content: 'https://gmgn.today' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'gm/gn: your 2022 blockchain wrapped' },
        { property: 'og:description', content: 'Inspired by Spotify Wrapped, gm/gn is a compilation of data about your cross-chain activity over the past year. Short for good morning/good night, gm/gn is a term to promote positivity and friendship among the Web 3 community.' },
        { property: 'og:image', content: 'https://i.imgur.com/KjNQjQu.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:domain', content: 'gmgn.today' },
        { property: 'twitter:url', content: 'https://gmgn.today' },
        { name: 'twitter:title', content: 'gm/gn: your 2022 blockchain wrapped' },
        { name: 'twitter:description', content: 'Inspired by Spotify Wrapped, gm/gn is a compilation of data about your cross-chain activity over the past year. Short for good morning/good night, gm/gn is a term to promote positivity and friendship among the Web 3 community.' },
        { name: 'twitter:image', content: 'https://i.imgur.com/KjNQjQu.png' },
      ],
    };
  },
  mounted() {
    document.title = '2022 Blockchain Wrapped';
  },
  methods: {
    submit() {
      this.$router.push({
        name: 'app',
        query: {
          address: this.address,
        },
      });
    },
    lucky(value) {
      this.$router.push({
        name: 'app',
        query: {
          address: value,
        },
      });
    },
  },
};
</script>
