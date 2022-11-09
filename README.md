# yearin-gmgn

![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)

As a challenge submission to Gitcoin Social Hour, yearin.gmgn.today allows Web 3 users to view a compilation of data about their cross-chain activity over the past year and invites them to share it on social media.

https://yearin.gmgn.today/

# Table of Contents

- [How RSS3 is Used](#rss3)
- [Demo](#demo)
- [Contributing](#contributing)

# RSS3

RSS3 is an information dissemination protocol for Web 3 data. gm/gn makes use of it as seen in `src/components/WrappedCmp.vue`. Here, the API result for a queried user's notes are retrieved.

Following a series of manipulation on the data, this is parsed to different parts of the generated _blockchain wrapped_ page. In short, RSS3 is used to serve as a single source of truth for giving value to each of the variables thought to be insightful and important, as made present in the loaded page.

# Demo

gm/gn is already built as intended to be fully functional. A publicly-accessible, deployed instance of the app can be accessed at https://yearin.gmgn.today/.

Nevertheless, its modular nature allows extensibility and ease of adding new functionality.

# Contributing

[Zachary Will Sy](https://www.linkedin.com/in/zwcsy/)<br>
Junior at Purdue University, IN<br>

BSc Computer Science – Specialization in Security<br>
BA Political Science – Public Policy and Poltical Methodology<br>

Email: alpinemail (at) zsy (dot) sh<br>
Discord: zachio (hashtag) 1557
