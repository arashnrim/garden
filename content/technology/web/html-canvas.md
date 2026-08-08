---
title: HTML <canvas>
created: 2026-08-08
tags:
  - spark
---
> The **Canvas API** provides a means for drawing graphics via [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) and the [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/canvas) element. Among other things, it can be used for animation, game graphics, data visualization, photo manipulation, and real-time video processing.
> 
> - [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)

The things that people create with the `<canvas>` element has always intrigued me, and I've been meaning to explore it and check it out a little more. I wonder if I'm able to even play around and experiment a little bit with it on my own to see what I can come up with!

Some examples of things created with `<canvas>` that I'm quite curious about:

![[canvas-001.gif]]

- The [dappled light shaders](https://jzhao.xyz/posts/dappled-light) on [Jacky Zhao's website](https://jzhao.xyz) — which somehow involves extremely detailed mathematical complexity and precision I never think I'll be able to amount to. But the way the leaves sway in the wind and the slight parallax effect as you move your cursor across the screen will never not leave me with a "whoa".

![[canvas-002.gif]]

- This animated spinning globe when [signing into Cloudflare](https://dash.cloudflare.com/login) — I love the pixelated vibe that the globe has going on; feels very techy, digital, and very much Cloudflare.

In general, it seems like the Canvas API is relatively low-level compared to other elements in HTML; therefore, a lot of people go about using it in combination with — or maybe better described as "wrapped around by" — a library.