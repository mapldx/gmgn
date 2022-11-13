<h1 align="center">
  <br>
  <a href="http://www.amitmerchant.com/electron-markdownify"><img src="https://i.imgur.com/KjNQjQu.png" alt="Markdownify" width="200"></a>
  <br>
  ☀️ gm/gn
  <br>
</h1>

<h3 align="center">Ready for your 2022 blockchain wrapped?</h3>
<p align="center">https://gmgn.today/</p>
<p align="center">Inspired by Spotify Wrapped, gm/gn is a compilation of data about your cross-chain activity over the past year. Short for good morning/good night, gm/gn is a term to promote positivity and friendship among the Web 3 community.</p>

<p align="center">
  <img src="https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D">
  <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white">
  <img src="https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black">
  <img src="https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white">
</p>

![screenshot](https://i.imgur.com/Qq3ft9T.png)

## Development notes

* gm/gn utilizes the [RSS3.io](https://rss3.io/) API.
  - RSS3.io provies easy access to the on-chain data that gm/gn provides in its wrapped.
  - As can be found in `src/components/WrappedCmp.vue`, the data retrieved is cleaned and collated to be presented in what we thought would be useful and insightful for the everyday Web 3 user to know.
  - The data provided by RSS3.io is very extensive. Thus, gm/gn was built with easy extensibility in mind. With these two facts in mind, it would not need much to present additional activity insights.

* gm/gn currently supports 0x addresses, ENS domains (.eth), Crossbell domains (.csb), and Lens addresses (.lens). This is as per specification of RSS3.io itself.

* In itself, gm/gn is a [single-page application (SPA)](https://developer.mozilla.org/en-US/docs/Glossary/SPA). Thus, allowing deployment on a static web server.
  - It is currently on Cloudflare Pages.

* As it is an SPA, what is initially served is only a plain `HTML` page. On load, contents are later rendered by Webpack as instituted by Vue lifecycle hooks. Thus, requiring the need to prerender for production purposes.
  - It is currently making use of [Prerender.io](https://prerender.io/) alongside Cloudflare Workers. This is given the premise of development being done during a hackathon.
  - Should opportunities for further development and maintainance present itself, it would be beneficial to shift the development stack itself to [Vite](https://vitejs.dev/) and [NuxtJS](https://nuxtjs.org/).
  
* Maintaing the notion of zero-trust and privacy/security-first, gm/gn does not require a wallet connection. The need can be explored should additional components be added.

## Current build

As a service, gm/gn is currently fully-functional and publicly-accessible at [https://gmgn.today](https://gmgn.today/). Similar to Spotify Wrapped, the data can be shared as a nicely-presented, shareable image:

<p align="left">
  <a href="http://www.amitmerchant.com/electron-markdownify"><img src="https://i.imgur.com/BsNfsOH.png" width="350"></a>
</p>

## Deploying locally

```bash
# Clone this repository
$ git clone https://github.com/mapldx/gmgn

# Go into the repository
$ cd gmgn

# Install dependencies
$ yarn

# Run the app
$ yarn serve
```

## Contributing

* Email: alpinemail (at) zsy (dot) sh
* Discord: zachio (hashtag) 1557

> An experimental product of 🍕 from Manila, Philippines © 2022 mapldx
