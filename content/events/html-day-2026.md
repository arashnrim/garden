---
title: HTML Day 2026
created: 2026-08-15
tags:
  - spark
---
Why I'm joining: to go back to the basics and explore my creative side! I think I've embraced the "professional identity" side too much and my creativity has waned recently, so coming for an event like this gives other sides of me to explore. I really enjoyed what she shared [[reclaiming-digital-spaces|in a fireside chat]] I attended, and it's nice to participate in a space where the homemade web takes centre stage.

The idea I'm pursuing for this meetup is the Quarry — a place where I can finally explore the [[personal-internet|personal internet]] in a way that's unrestrained. I wrote this little introduction that describes the overall tone and pace of the Quarry as a calm place on the internet that's human-focused:

> Out there somewhere, away from the bustle of urban skyscrapers, in the heart of a forest, lies a quarry reclaimed by nature. A radio tower stands alone at the peak, silently emanating signals — the voices of humanity. Birds chirp and fly across the sky above. Fishes swim in the waters below. A turtle stares up at you gently as you embrace where nature and human ingenuity meet.

And what better way to anchor this than my favourite natural place so far, [Hindehede Quarry](https://www.openstreetmap.org/way/43548818)?

Some unique constraints that I'm forcing on this:

- Using "pure vanilla" HTML — while my go-to framework ([Astro!](https://astro.build)) is already zero-JavaScript-by-default, going back to a simple `index.html` file brings me back to the days of starting to learn programming. It reminds me of the humility of beginnings, and that viewing things as a beginner is not necessarily a bad thing.
- No LLMs — as much as possible, anything involving LLMs are disabled. No code autocompletes, no suggestions, just true, pure human ingenuity and problem-solving.

In around two and a half hours of exploring, here's roughly what I got:

![[html-day-2026-the-quarry.png]]

(The blank space below "You look into the water below." and "You take in the sights." are videos that aren't rendered when the screenshot was taken!)

If you're curious to check it out, [visit the web page here](https://quarry.exp.arash.codes). If you're curious about the code, take a look at the [GitHub repository](https://github.com/arashnrim/quarry) too!

# Devlog

- I started looking at ways to make pictures look dithered using CSS, and I came across [this GitHub repository](https://github.com/andrewstephens75/as-dithered-image). While this is *kinda* cheating by using something someone else made, I feel like it works well with the spirit and ethos of html.energy, because you're kinda building off and working off something another human has made!
- HTML code doesn't register indentation or line breaks! Something I forgot even after years of experience (if you can even call what I have experience)...
- I forgot how infuriating manipulating `<img>`s can be, especially with how to scale them down. In the end, I realised that not fighting the image gives a pretty good looking layout that focuses the picture first over the content. It looks pretty good!
- [MDN](https://developer.mozilla.org) comes in clutch once again as I get humbled by my lack of knowledge over HTML and its elements 🤡