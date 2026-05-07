---
title: "The small web is beautiful"
description: "A vision for the \"small web\", small software, and small architectures."
date: "2026-01-08"
authors: ["Ben Hoyt"]
---
[Visit the original here](https://benhoyt.com/writings/the-small-web-is-beautiful/)

# Annotations

> Why aim small in this era of fast computers with plenty of RAM? A number of reasons, but the ones that are most important to me are:


  Fewer moving parts. It’s easier to create more robust systems and to fix things when they do go wrong.
  Small software is faster. Fewer bits to download and clog your computer’s memory.
  Reduced power consumption. This is important on a “save the planet” scale, but also on the very local scale of increasing the battery life of your phone and laptop.
  The light, frugal aesthetic. That’s personal, I know, but as you’ll see, I’m not alone.

> How do you create small programs? I think the main thing is that you have to care about size, and most of us don’t think we have time for that.

> However, it’s not just about raw size, but about an “ethos of small”. It’s caring about the users of your site: that your pages download fast, are easy to read, have interesting content, and don’t load scads of JavaScript for Google or Facebook’s trackers.

> IndieWeb.org is a great resource here, though they use the term “indie” rather than “small”. This movement looks more organic than the Small Technology Foundation (which has even been critiqued as “digital green-washing”), and their wiki has a lot more real content.

> JavaScript is a mixed blessing for the web, and more often than not a bane for small websites: it adds to the download size and time, it can be a performance killer, it’s bad for accessibility, and if you don’t hold it right, it’s bad for search engines. Plus, if your website is content-heavy, it probably isn’t adding much.

> Around fifteen years ago there was this great idea called progressive enhancement. The idea was to serve usable HTML content to everyone, but users with JavaScript enabled or fast internet connections would get an enhanced version with a more streamlined user interface.

> It’s been said before, but microservices solve a people problem, not a technical one. But beware of Conway’s Law: your architecture will mimic your company structure. Or the reverse – you’ll have to hire and reorg so that your company structure matches the architecture that microservices require: lots of engineers on lots of small teams, with each team managing a couple of microservices.