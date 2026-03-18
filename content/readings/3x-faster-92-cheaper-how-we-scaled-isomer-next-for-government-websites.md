---
title: "3x Faster, 92% Cheaper: How We Scaled Isomer Next for Government Websites"
description: "Isomer engineer Adrian Goh explains how we reduced the time to publish updates for a huge government site from 30 minutes to 10 minutes, while cutting costs by 92%."
date: "2026-03-18"
authors: ["OGP Community", "Open Government Products"]
tags: [tech, web]
---
[Visit the original here](https://opengovsg.substack.com/p/3x-faster-92-cheaper-how-we-scaled)

# Annotations

> Citizens and agencies depend on government websites for information, policies, and services. When those sites are slow or hard to update, everyone is affected—content editors can’t verify changes quickly, agencies hesitate to publish often, and people on slow networks wait longer for the information they need.

> Isomer Next is built on Next.js and uses the App Router with React Server Components (RSC). By rendering components on the server, it reduces the amount of client-side JavaScript, resulting in faster page loads and smaller bundles. The entire site is statically generated (SSG) at build time.

> That static site is built during content publishing via CodeBuild, then uploaded to S3 and served via CloudFront.

> S3 uploads were slow because artifacts were 145GB. That’s the equivalent of ~13MB per page, which is clearly excessive. Much of this bloat came from unnecessary client-side data.Solution: We pushed more computation to the server during next build, restructuring components using React Server Components (RSC)

> From research and community benchmarks, modern build tools like Node.js, Rust, and SWC tend to run very efficiently on ARM. Since SWC (Rust) and Node.js are central to Next.js builds, this indicates that ARM often compiles and transforms code faster in real-world workloads.