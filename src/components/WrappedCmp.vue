<!-- eslint-disable -->
<template>
  <section class="bg-white dark:bg-gray-900">

    <!-- <div v-if="loading" class="bg-indigo-600 px-4 py-3 text-white">
      <p class="text-center text-sm font-medium">
        Retrieving data...
        <a class="underline" href="/alpinejs"> Learn More &rarr; </a>
      </p>
    </div> -->
    <header v-if="loading" aria-label="Page Header" class="bg-gray-200">
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <div class="text-center sm:text-left">
            <div class="loader"></div>
          </div>

          <div class="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <p class="mt-2 text-lg font-extrabold text-gray-500">
              🚧 querying the blockchain, retrieving data... please wait!
            </p>
          </div>
        </div>
      </div>
    </header>
    <header v-else-if="!loading" aria-label="Page Header" class="bg-gray-200">
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <div class="text-center sm:text-left">
            <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">
              <a href="/">☀️ gm/gn,</a>
            </h1>

            <p class="mt-1.5 text-md text-gray-500">
              this is all about you... and what you've been up to on the blockchain thus far!
            </p>
          </div>

          <a class="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center" :href="'https://etherscan.io/address/' + this.owner" target="_blank">
            <button
              class="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring"
              type="button"
            >
              <span class="text-sm font-medium">View on Etherscan</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ml-1.5 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </header>
    <div class="mt-6 mx-auto max-w-screen-xl px-2 py-4 sm:py-6 sm:px-3 lg:px-4">
      <section class="bg-white">
        <div class="mx-auto max-w-screen-xl px-2 py-6 sm:px-3 md:py-8 lg:px-4">
          <div class="mx-auto max-w-3xl text-center">
            <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
              Welcome to the end of another year! 🚀 
            </h2>

            <p class="mt-4 text-gray-500 sm:text-lg">
              This past year was <b>huge</b> for Web 3. Other than Ethereum further cementing itself as a Layer 1 with its shift to proof-of-stake, the total amount of money invested in the space has reached approximately <a href="https://news.crunchbase.com/web3-startups-investors/" target="_blank">$90 billion</a>. 
              <br>
              <br>
              This has given an accelerated rise to builders and users of universal NFT/DAO tooling infrastructure, cross-chain bridges and marketplaces, social platforms, credit systems, among many others. 
              <br>
              <br>
              This has led to a rapid increase in value of many Layer 1 and Layer 2 blockchains by <a href="https://messari.io/pdf/messari-report-crypto-theses-for-2022.pdf" target="_blank">50 to 100x</a>. Let's see how you've been interacting with them up to this point...
              <br>
              <p class="mt-2 text-xs text-gray-400">Data fetched for: {{ this.owner }}</p>
            </p>
          </div>

          <div class="mt-8 sm:mt-12">
            <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div
                class="flex flex-col rounded-lg border border-gray-300 px-4 py-8 text-center"
              >
                <dt class="order-last text-lg font-medium text-gray-500">
                  total transactions
                </dt>

                <dd v-if="this.number_tx < 500" class="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  {{ this.number_tx }}
                </dd>
                <dd v-if="this.number_tx > 500" class="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  500+
                </dd>
              </div>

              <div
                class="flex flex-col rounded-lg border border-gray-300 px-4 py-8 text-center"
              >
                <dt class="order-last text-lg font-medium text-gray-500">
                  total chains
                </dt>

                <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">{{ this.total_chains }}</dd>
              </div>

              <div
                class="flex flex-col rounded-lg border border-gray-300 px-4 py-8 text-center"
              >
                <dt class="order-last text-lg font-medium text-gray-500">
                  total receipient addresses
                </dt>

                <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">{{ this.addresses_to.length }} </dd>
              </div>
            </dl>
            <div class="mx-auto mt-6 max-w-3xl text-center">
              <a
                class="relative text-md font-bold text-indigo-600 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-green-300 before:transition hover:before:scale-100"
                :href="'https://twitter.com/intent/tweet?url=https%3A%2F%2Fgmgn.today%2F&via=mapldx&text=To%20date%2C%20I%27ve%20made%20' + this.number_tx + '%20total%20cross-chain%20transactions%20on%20the%20blockchain.%20Between%20' + this.total_chains + '%20chain(s)%2C%20a%20total%20of%20' + this.addresses_to.length + '%20wallets%20are%20on%20the%20receiving%20end%20of%20my%20dApp%20activities.%0a%0aInspired%20by%20Spotify%20Wrapped%2C%20get%20your%20own%202022%20blockchain%20wrapped%20at%3A'"
              >
                Share this with <i>frens</i> on Twitter →
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <blockquote class="twitter-tweet" data-theme="light"><p lang="en" dir="ltr">BR3AKING: Reddit now has more NFT wallets than OpenSea.<br><br>The Polygon integration for Reddit collectibles has been a massive success: over 3 million Reddit Vault wallets have been created.</p>&mdash; The Metaverse (@themetav3rse) <a href="https://twitter.com/themetav3rse/status/1583112455940542466?ref_src=twsrc%5Etfw">October 20, 2022</a></blockquote>

            <div class="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
              <img
                alt="Student"
                src="https://i.seadn.io/gae/i5dYZRkVCUK97bfprQ3WXyrT9BnLSZtVKGJlKQ919uaUB0sxbngVCioaiyu9r6snqfi2aaTyIvv6DHm4m2R3y7hMajbsv14pSZK8mhs?auto=format&w=1920"
                class="h-40 w-full object-cover sm:h-56 md:h-full"
              />

              <img
                alt="Student"
                src="https://i.seadn.io/gae/4RYeNt3ET75VLMoCZz-fsOhXg8AW8qlkHfgkbA0FfEayNpsHvOZROygyy9IhY4LwrnJUXqkeDjBZBr8bCf0Ng_xUiRZqWRGng3sc?auto=format&w=1920"
                class="h-40 w-full object-cover sm:h-56 md:h-full"
              />
            </div>
          </div>
        </div>
      </section>
      <div class="max-w-screen-xl px-2 py-4 mx-auto text-center lg:py-8 lg:px-3">
          <dl class="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-2 dark:text-white">
              <div class="flex flex-col items-center justify-center">
                  <dt class="mb-2 text-3xl md:text-4xl font-extrabold">{{ this.max_day }}</dt>
                  <dd class="font-medium text-gray-500 dark:text-gray-400">was your most transactions in a day</dd>
              </div>
              <div class="flex flex-col items-center justify-center">
                  <dt class="mb-2 text-3xl md:text-4xl font-extrabold">{{ this.total_days }}%</dt>
                  <dd class="font-medium text-gray-500 dark:text-gray-400">of a year had at least one transaction in a day</dd>
              </div>
          </dl>
          <div class="mx-auto -mb-8 mt-6 max-w-3xl text-center">
            <a
              class="relative text-md font-bold text-indigo-600 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-green-300 before:transition hover:before:scale-100"
              :href="'https://twitter.com/intent/tweet?url=https%3A%2F%2Fgmgn.today%2F&via=mapldx&text=' + this.max_day + '%20was%20the%20most%20number%20of%20transactions%20I%27ve%20made%20in%20a%20day%20on%20the%20blockchain.%20I%27ve%20made%20at%20least%20one%20transaction%20a%20day%20on%20the%20blockchain%20for%20' + this.total_days + '%25%20of%20a%20year.%0a%0aInspired%20by%20Spotify%20Wrapped%2C%20get%20your%20own%202022%20blockchain%20wrapped%20at%3A'"
            >
              Share this with <i>frens</i> on Twitter →
            </a>
          </div>
      </div>
      <apexchart
        type="heatmap"
        :options="chartOptions"
        :series="series"
        class="mx-auto max-w-screen-xl px-2 py-6 sm:px-3 md:py-8 lg:px-4"
      ></apexchart>
      <section
        class="overflow-hidden bg-[url(https://images.unsplash.com/photo-1666635376182-347aa9fb37ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80)] bg-cover bg-center bg-no-repeat mt-12"
      >
        <div class="bg-black/25 p-4 md:p-6 lg:px-8 lg:py-12">
          <div class="max-w-lg text-center sm:text-left">
            <blockquote class="twitter-tweet" data-theme="light"><p lang="en" dir="ltr">instagram will start letting people mint and trade NFTs in app <br><br>only like 80 people knew what an nft was 24 months ago<br><br>h/t <a href="https://twitter.com/decryptmedia?ref_src=twsrc%5Etfw">@decryptmedia</a> <a href="https://t.co/CJm4cWTNOY">pic.twitter.com/CJm4cWTNOY</a></p>&mdash; Giancarlo (@GiancarloChaux) <a href="https://twitter.com/GiancarloChaux/status/1587930122723938306?ref_src=twsrc%5Etfw">November 2, 2022</a></blockquote>
          </div>
        </div>
      </section>
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Your 🔝 chains</h2>
              <p class="mb-5 font-normal text-gray-500 sm:text-xl dark:text-gray-400">This year, Ethereum core developers have placed a large emphasis on a pivotal focus, roll-ups. While the age-old conversations on scalability and costs remain, roll-ups emerged as world events place true security and decentralization under a spotlight.</p>
          </div>
          <div class="max-w-screen-xl px-2 py-4 mx-auto text-center lg:py-8 lg:px-3">
              <dl class="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-2 dark:text-white">
                  <div v-if="this.number_ethereum > 0" class="flex flex-col items-center justify-center">
                      <dt class="mb-2 text-3xl md:text-4xl font-extrabold">{{ this.number_ethereum }} </dt>
                      <dd v-if="this.number_ethereum > 1" class="font-medium text-gray-500 dark:text-gray-400">transactions on Ethereum</dd>
                      <dd v-if="this.number_ethereum == 1" class="font-medium text-gray-500 dark:text-gray-400">transaction on Ethereum</dd>
                  </div>
                  <div v-if="this.number_ethereum_classic > 0" class="flex flex-col items-center justify-center">
                      <dt class="mb-2 text-3xl md:text-4xl font-extrabold">{{ this.number_ethereum_classic }}</dt>
                      <dd v-if="this.number_ethereum > 1" class="font-medium text-gray-500 dark:text-gray-400">transactions on Ethereum Classic</dd>
                      <dd v-if="this.number_ethereum_classic == 1" class="font-medium text-gray-500 dark:text-gray-400">transaction on Ethereum Classic</dd>
                  </div>
                  <div v-if="this.number_binance_smart_chain > 0" class="flex flex-col items-center justify-center">
                      <dt class="mb-2 text-3xl md:text-4xl font-extrabold">{{ this.number_binance_smart_chain }}</dt>
                      <dd v-if="this.number_binance_smart_chain > 1" class="font-medium text-gray-500 dark:text-gray-400">transactions on Binance Smart Chain</dd>
                      <dd v-if="this.number_binance_smart_chain == 1" class="font-medium text-gray-500 dark:text-gray-400">transaction on Binance Smart Chain</dd>
                  </div>
                  <div v-if="this.number_polygon > 0" class="flex flex-col items-center justify-center">
                      <dt class="mb-2 text-3xl md:text-4xl font-extrabold">{{ this.number_polygon }}</dt>
                      <dd v-if="this.number_polygon > 1" class="font-medium text-gray-500 dark:text-gray-400">transactions on Polygon</dd>
                      <dd v-if="this.number_polygon == 1" class="font-medium text-gray-500 dark:text-gray-400">transaction on Polygon</dd>
                  </div>
                  <div v-if="this.number_zksync > 0" class="flex flex-col items-center justify-center">
                      <dt class="mb-2 text-3xl md:text-4xl font-extrabold">{{ this.number_zksync }}</dt>
                      <dd v-if="this.number_zksync > 1" class="font-medium text-gray-500 dark:text-gray-400">transactions on zkSync</dd>
                      <dd v-if="this.number_ethereum == 1" class="font-medium text-gray-500 dark:text-gray-400">transaction on zkSync</dd>
                  </div>
                  <div v-if="this.number_xdai > 0" class="flex flex-col items-center justify-center">
                      <dt class="mb-2 text-3xl md:text-4xl font-extrabold">{{ this.number_xdai }}</dt>
                      <dd v-if="this.number_xdai > 1" class="font-medium text-gray-500 dark:text-gray-400">transactions on xDAI</dd>
                      <dd v-if="this.number_xdai == 1" class="font-medium text-gray-500 dark:text-gray-400">transaction on xDAI</dd>
                  </div>
                  <div v-if="this.number_arweave > 0" class="flex flex-col items-center justify-center">
                      <dt class="mb-2 text-3xl md:text-4xl font-extrabold">{{ this.number_arweave }}</dt>
                      <dd v-if="this.number_arweave > 1" class="font-medium text-gray-500 dark:text-gray-400">transactions on Arweave</dd>
                      <dd v-if="this.number_arweave == 1" class="font-medium text-gray-500 dark:text-gray-400">transaction on Arweave</dd>
                  </div>
                  <div v-if="this.number_arbitrum > 0" class="flex flex-col items-center justify-center">
                      <dt class="mb-2 text-3xl md:text-4xl font-extrabold">{{ this.number_arbitrum }}</dt>
                      <dd v-if="this.number_arbitrum > 1" class="font-medium text-gray-500 dark:text-gray-400">transactions on Arbitrum</dd>
                      <dd v-if="this.number_ethereum == 1" class="font-medium text-gray-500 dark:text-gray-400">transaction on Arbitrum</dd>
                  </div>
                  <div v-if="this.number_optimism > 0" class="flex flex-col items-center justify-center">
                      <dt class="mb-2 text-3xl md:text-4xl font-extrabold">{{ this.number_optimism }}</dt>
                      <dd v-if="this.number_optimism > 1" class="font-medium text-gray-500 dark:text-gray-400">transactions on Optimism</dd>
                      <dd v-if="this.number_optimism == 1" class="font-medium text-gray-500 dark:text-gray-400">transaction on Optimism</dd>
                  </div>
                  <div v-if="this.number_fantom > 0" class="flex flex-col items-center justify-center">
                      <dt class="mb-2 text-3xl md:text-4xl font-extrabold">{{ this.number_fantom }}</dt>
                      <dd v-if="this.number_fantom > 1" class="font-medium text-gray-500 dark:text-gray-400">transactions on Fantom</dd>
                      <dd v-if="this.number_fantom == 1" class="font-medium text-gray-500 dark:text-gray-400">transaction on Fantom</dd>
                  </div>
                  <div v-if="this.number_avalanche > 0" class="flex flex-col items-center justify-center">
                      <dt class="mb-2 text-3xl md:text-4xl font-extrabold">{{ this.number_avalanche }}</dt>
                      <dd v-if="this.number_avalanche > 1" class="font-medium text-gray-500 dark:text-gray-400">transactions on Avalanche</dd>
                      <dd v-if="this.number_avalanche == 1" class="font-medium text-gray-500 dark:text-gray-400">transaction on Avalanche</dd>
                  </div>
              </dl>
          </div>
      </div>
      <div class="max-w-screen-xl px-2 py-8 sm:px-3 lg:px-4 -mt-8">
        <div
          class="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16"
        >
          <div class="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
            <h2 class="text-3xl font-bold sm:text-4xl mb-6">Your Web 3 ecosystem 🌐</h2>
            <blockquote class="twitter-tweet mt-4" data-theme="light"><p lang="en" dir="ltr">When crypto is accessible, users won’t even realize they’re using the blockchain<br><br>Mainstreamers don’t need to care about Ethereum, zk-SNARKs, smart contracts, or even NFTs<br><br>They can receive the benefits of the network without the complexity</p>&mdash; Cantino (@chriscantino) <a href="https://twitter.com/chriscantino/status/1574480025516003328?ref_src=twsrc%5Etfw">September 26, 2022</a></blockquote>
          </div>

          <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <a v-if="this.number_mint > 0"
              class="block rounded-xl border border-gray-300 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            >
              <span class="inline-block rounded-lg bg-gray-50 font-bold">
                {{ this.number_mint }}
              </span>

              <h2 v-if="this.number_mint > 1" class="font-black">mints</h2>
              <h2 v-if="this.number_mint == 1" class="font-black">mint</h2>

            </a>
            <a v-if="this.number_burn > 0"
              class="block rounded-xl border border-gray-300 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            >
              <span class="inline-block rounded-lg bg-gray-50 font-bold">
                {{ this.number_burn }}
              </span>

              <h2 v-if="this.number_burn > 1" class="font-black">burns</h2>
              <h2 v-if="this.number_burn == 1" class="font-black">burn</h2>
            </a>
            <a v-if="this.number_withdraw > 0"
              class="block rounded-xl border border-gray-300 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            >
              <span class="inline-block rounded-lg bg-gray-50 font-bold">
                {{ this.number_withdraw }}
              </span>

              <h2 v-if="this.number_withdraw > 1" class="font-black">withdrawals</h2>
              <h2 v-if="this.number_withdraw == 1" class="font-black">withdrawal</h2>
            </a>
            <a v-if="this.number_deposit > 0"
              class="block rounded-xl border border-gray-300 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            >
              <span class="inline-block rounded-lg bg-gray-50 font-bold">
                {{ this.number_deposit }}
              </span>

              <h2 v-if="this.number_deposit > 1" class="font-black">deposits</h2>
              <h2 v-if="this.number_deposit == 1" class="font-black">deposit</h2>
            </a>
            <a v-if="this.number_swap > 0"
              class="block rounded-xl border border-gray-300 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            >
              <span class="inline-block rounded-lg bg-gray-50 font-bold">
                {{ this.number_swap }}
              </span>

              <h2 v-if="this.number_swap > 1" class="font-black">swaps</h2>
              <h2 v-if="this.number_swap == 1" class="font-black">swap</h2>
            </a>
            <a v-if="this.number_trade > 0"
              class="block rounded-xl border border-gray-300 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            >
              <span class="inline-block rounded-lg bg-gray-50 font-bold">
                {{ this.number_trade }}
              </span>

              <h2 v-if="this.number_trade > 1" class="font-black">trades</h2>
              <h2 v-if="this.number_trade == 1" class="font-black">trade</h2>

            </a>
            <a v-if="this.number_poap > 0"
              class="block rounded-xl border border-gray-300 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            >
              <span class="inline-block rounded-lg bg-gray-50 font-bold">
                {{ this.number_poap }}
              </span>

              <h2 v-if="this.number_poap > 1" class="font-black">POAPs</h2>
              <h2 v-if="this.number_poap == 1" class="font-black">POAP</h2>

            </a>
            <a v-if="this.number_post > 0"
              class="block rounded-xl border border-gray-300 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            >
              <span class="inline-block rounded-lg bg-gray-50 font-bold">
                {{ this.number_post }}
              </span>

              <h2 v-if="this.number_post > 1" class="font-black">posts</h2>
              <h2 v-if="this.number_post == 1" class="font-black">post</h2>
            </a>
            <a v-if="this.number_comment > 0"
              class="block rounded-xl border border-gray-300 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            >
              <span class="inline-block rounded-lg bg-gray-50 font-bold">
                {{ this.number_comment }}
              </span>

              <h2 v-if="this.number_comment > 1" class="font-black">comments</h2>
              <h2 v-if="this.number_comment == 1" class="font-black">comment</h2>
            </a>
            <a v-if="this.number_donate > 0"
              class="block rounded-xl border border-gray-300 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            >
              <span class="inline-block rounded-lg bg-gray-50 font-bold">
                {{ this.number_donate }}
              </span>

              <h2 v-if="this.number_donate > 1" class="font-black">donations</h2>
              <h2 v-if="this.number_donate == 1" class="font-black">donation</h2>

            </a>
            <a v-if="this.number_propose > 0"
              class="block rounded-xl border border-gray-300 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            >
              <span class="inline-block rounded-lg bg-gray-50 font-bold">
                {{ this.number_propose }}
              </span>

              <h2 v-if="this.number_propose > 1" class="font-black">proposals</h2>
              <h2 v-if="this.number_poap == 1" class="font-black">proposal</h2>

            </a>
            <a v-if="this.number_vote > 0"
              class="block rounded-xl border border-gray-300 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            >
              <span class="inline-block rounded-lg bg-gray-50 font-bold">
                {{ this.number_vote }}
              </span>

              <h2 v-if="this.number_vote > 1" class="font-black">votes</h2>
              <h2 v-if="this.number_vote == 1" class="font-black">vote</h2>

            </a>
          </div>
        </div>
      </div>
    </div>
    <footer aria-label="Site Footer" class="bg-gray-200">
      <div class="mt-12 mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="flex justify-center text-teal-600 font-black text-lg">
          ☀️ gm/gn
        </div>

        <p class="mx-auto mt-6 max-w-full text-center text-xs leading-relaxed text-gray-500">
          The blockchain is a digitally-available, publicly-accessible record of your transactions. By using our service, you agree that the data provided is on an "as is" basis.
        <br>
        <br>
          This service does not require the a wallet connection. Thus, the service does not make any on-chain changes, nor does it have the permission or ability to fulfill, transact, or transfer any form of assets. At no time does it hold or possess, even beneficially, the assets within the queried address.
        <br>
        <br>
          We are not affiliated, associated, authorized, endorsed by, or in any way officially connected with any names, logos, images, and brands mentioned and presented on this page, unless otherwise specified. All names, logos, images, and brands are property of their respective owners.
        </p>

        <p class="mx-auto mt-6 max-w-full text-center text-md font-bold leading-relaxed text-gray-500">
          An <i>experimental</i> product of 🍕 from Manila, Philippines © 2022 mapldx
        </p>

        <ul class="mt-12 flex justify-center gap-6 md:gap-8">
          <li>
            <a
              href="https://twitter.com/mapldx"
              rel="noreferrer"
              target="_blank"
              class="text-gray-700 transition hover:text-gray-700/75"
            >
              <span class="sr-only">Twitter</span>
              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </section>
</template>
<!-- eslint-enable -->

<script>
import VueApexCharts from 'vue-apexcharts';
import Vue from 'vue';

const date = require('date-fns');

export default {
  name: 'WrappedCmp',
  components: {
    apexchart: VueApexCharts,
  },
  metaInfo() {
    return {
      meta: [
        { name: 'title', content: 'gm/gn: your 2022 blockchain wrapped' },
        { name: 'description', content: 'Inspired by Spotify Wrapped, gm/gn is a compilation of data about your cross-chain activity over the past year. Short for good morning/good night, gm/gn is a term to promote positivity and friendship among the Web 3 community.' },
        { property: 'og:url', content: 'https://gmgn.today' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'gmgn.today' },
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
  data() {
    return {
      loading: false,
      response: '',
      owner: '',
      number_tx: 0,
      addresses_interacted: 0,
      total_chains: 0,
      number_transfer: 0,
      number_mint: 0,
      number_burn: 0,
      number_bridge: 0,
      number_withdraw: 0,
      number_deposit: 0,
      number_swap: 0,
      number_liquidity: 0,
      number_trade: 0,
      number_poap: 0,
      number_post: 0,
      number_revise: 0,
      number_comment: 0,
      number_share: 0,
      number_profile: 0,
      number_launch: 0,
      number_donate: 0,
      number_propose: 0,
      number_vote: 0,
      addresses_to: [],
      number_ethereum: 0,
      number_ethereum_classic: 0,
      number_binance_smart_chain: 0,
      number_polygon: 0,
      number_zksync: 0,
      number_xdai: 0,
      number_arweave: 0,
      number_arbitrum: 0,
      number_optimism: 0,
      number_fantom: 0,
      number_avalanche: 0,
      total_days: 0,
      max_day: 0,
      timestamp: [],
      chartOptions: {
        dataLabels: {
          enabled: false,
        },
        chart: {
          toolbar: {
            show: false,
          },
        },
        colors: ['#008FFB'],
        xaxis: {
          type: 'category',
        },
      },
      series: [],
    };
  },
  /* eslint-disable */
  methods: {
    generateData(month) {
      var i = 1;
      var series = [];
      while (i <= 31) {
        var x = `${i}`.toString();
        var y = 0;
        for (var j = 0; j < this.response.length; j += 1) {
          var curr = this.response[j].timestamp;

          var format = date.parse(curr, "yyyy-MM-dd'T'HH:mm:ssXXX", new Date());
          var mm = date.format(format, 'MM').replace(/\b0/g, '');
          var dd = date.format(format, 'dd').replace(/\b0/g, '');

          if (parseInt(mm, 10) === parseInt(month, 10) && parseInt(dd, 10) === parseInt(i, 10)) {
            y += 1;
          }
        }
        series.push({
          x: x,
          y: y,
        });
        i++;
        if (y > this.max_day) {
          this.max_day = y;
        }
        if (y > 0) {
          this.total_days += 1;
        }
      }
      return series;
    },
  },
  /* eslint-enable */
  async created() {
    this.loading = true;
    let i = 0;
    const options = { method: 'GET', headers: { accept: 'application/json' } };

    const twitter = document.createElement('script');
    twitter.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    document.head.appendChild(twitter);

    await fetch(`https://pregod.rss3.dev/v1/notes/${this.$route.query.address}?refresh=true&limit=500&include_poap=true&count_only=false&query_status=false`, options)
      .then((response) => response.json())
      .then((response) => {
        this.response = response.result;
        this.number_tx = response.total;
        this.owner = this.response[0].owner;

        while (i < this.response.length) {
          if (this.response[i].address_to !== this.owner
            && this.response[i].address_to !== undefined
            && this.response[i].address_to !== null) {
            if (!this.addresses_to.includes(this.response[i].address_to)) {
              this.addresses_to.push(this.response[i].address_to);
            }
          }
          switch (this.response[i].type) {
            case 'transfer':
              this.number_transfer += 1;
              break;
            case 'mint':
              this.number_mint += 1;
              break;
            case 'bridge':
              this.number_bridge += 1;
              break;
            case 'withdraw':
              this.number_withdraw += 1;
              break;
            case 'deposit':
              this.number_deposit += 1;
              break;
            case 'swap':
              this.number_swap += 1;
              break;
            case 'liquidity':
              this.number_liquidity += 1;
              break;
            case 'trade':
              this.number_trade += 1;
              break;
            case 'poap':
              this.number_poap += 1;
              break;
            case 'post':
              this.number_post += 1;
              break;
            case 'revise':
              this.number_revise += 1;
              break;
            case 'comment':
              this.number_comment += 1;
              break;
            case 'share':
              this.number_share += 1;
              break;
            case 'profile':
              this.number_profile += 1;
              break;
            case 'launch':
              this.number_launch += 1;
              break;
            case 'donate':
              this.number_donate += 1;
              break;
            case 'propose':
              this.number_propose += 1;
              break;
            case 'vote':
              this.number_vote += 1;
              break;
            default:
          }
          switch (this.response[i].network) {
            case 'ethereum':
              this.number_ethereum += 1;
              break;
            case 'ethereum_classic':
              this.number_ethereum_classic += 1;
              break;
            case 'binance_smart_chain':
              this.number_binance_smart_chain += 1;
              break;
            case 'polygon':
              this.number_polygon += 1;
              break;
            case 'zksync':
              this.number_zksync += 1;
              break;
            case 'xdai':
              this.number_xdai += 1;
              break;
            case 'arweave':
              this.number_arweave += 1;
              break;
            case 'arbitrum':
              this.number_arbitrum += 1;
              break;
            case 'optimism':
              this.number_optimism += 1;
              break;
            case 'fantom':
              this.number_fantom += 1;
              break;
            case 'avalanche':
              this.number_avalanche += 1;
              break;
            default:
          }

          i += 1;
        }

        if (this.number_ethereum > 0) this.total_chains += 1;
        if (this.number_ethereum_classic > 0) this.total_chains += 1;
        if (this.number_binance_smart_chain > 0) this.total_chains += 1;
        if (this.number_polygon > 0) this.total_chains += 1;
        if (this.number_zksync > 0) this.total_chains += 1;
        if (this.number_xdai > 0) this.total_chains += 1;
        if (this.number_arweave > 0) this.total_chains += 1;
        if (this.number_arbitrum > 0) this.total_chains += 1;
        if (this.number_optimism > 0) this.total_chains += 1;
        if (this.number_fantom > 0) this.total_chains += 1;
        if (this.number_avalanche > 0) this.total_chains += 1;

        console.log('Retrieving data...');

        /* eslint-disable */

        this.series.push({ name: 'Dec', data: this.generateData(12) });
        this.series.push({ name: 'Nov', data: this.generateData(11) });
        this.series.push({ name: 'Oct', data: this.generateData(10) });
        this.series.push({ name: 'Sept', data: this.generateData(9) });
        this.series.push({ name: 'Aug', data: this.generateData(8) });
        this.series.push({ name: 'Jul', data: this.generateData(7) });
        this.series.push({ name: 'Jun', data: this.generateData(6) });
        this.series.push({ name: 'May', data: this.generateData(5) });
        this.series.push({ name: 'Apr', data: this.generateData(4) });
        this.series.push({ name: 'Mar', data: this.generateData(3) });
        this.series.push({ name: 'Feb', data: this.generateData(2) });
        this.series.push({ name: 'Jan', data: this.generateData(1) });

        this.total_days = this.total_days / 365 * 100;
        this.total_days = (this.total_days).toFixed(2);

        Vue.use(VueApexCharts);
        Vue.component('apexchart', VueApexCharts);

        this.loading = false;

        /* eslint-enable */
      })
      .catch(() => this.$router.push({ name: 'home' }));
  },
  mounted() {
    document.title = '2022 Blockchain Wrapped';
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.loader {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
