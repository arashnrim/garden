---
title: Arash's guestbook
created: 2026-03-23
tags:
  - spark
  - project
---
I've been inspired by the many different guestbooks as I explored [[personal-internet|the personal internet]], so what better time to have my own one than now? I wrecked my brain whether I should use something tried-and-tested or to create one of my own — ultimately, I leaned towards the latter because I should remind myself about the joy (and pain) of creating from scratch.

[Visit the GitHub repository here!](https://github.com/arashnrim/guestbook)

# Devlog

- I'm once again picking up [Astro](https://astro.build) as my preferred framework of choice. This scenario fits the bill perfectly; a small web app that only depends on a little bit of hydration and interactivity. Besides, I think I love Astro's philosophy of zero JavaScript by default; web apps should be light!
- I spent a lot of time deciding on how the back-end implementation should be done. There are two major paths that I see:
	- Using a proper lightweight database engine (e.g. libSQL) and a hosted service (e.g. Turso), preferably also using an ORM (e.g. Drizzle) — Astro has native support for this specific stack using [Astro DB](https://docs.astro.build/en/guides/astro-db/), but the fact that [a core maintainer cautioned against using it](https://www.reddit.com/r/astrojs/comments/1r2djnl/comment/o4zbtfm/) meant I'll probably have to explore a DIY solution.
	- Storing everything in Google Sheets and using Google's powerful APIs as a bridge between data and presentation. While I'm initially tempted to do this — and the fact that many DIY guestbooks I've seen use this implementation to some degree — I thought that it's a bit hacky at best and against the spirit of a full true-blue DIY build.
- I thought a bit more about the security aspect of the guestbook, because we need to ensure and protect against:
	- Spamming and DDoS attempts — while I'm not a reasonable target, anything online is subject to being attacked mercilessly. Leaving a form exposed without protections against spam is pretty careless.
	- Malicious submissions — and this includes things like people trying to include [cross-site scripting](https://owasp.org/www-community/attacks/xss/) or trying to do anything funny in their form submissions. I'll need a way to sanitise the user input before displaying it.
- In my attempt to guard against XSS attacks, I've tried pairing `isomorphic-dompurify` and transforming input data before it reaches the Astro action, but I'm guessing that this package breaks the build on Vercel by causing a 500 HTTP error when I try to visit the built site.
	- Vercel keeps complaining about `require() of ES Module [...] from [...] not supported.` I tried to isolate the issue by first removing the dependencies one by one, and found that isolating this dependency fixed the issue.
- I looked into solutions for implementing rate limiting and realised that [Vercel natively supports it using WAF Rate Limiting](https://vercel.com/docs/vercel-firewall/vercel-waf/rate-limiting). This should be useful with protecting message submissions!