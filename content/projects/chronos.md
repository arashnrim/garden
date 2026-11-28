---
created: 2026-11-27
tags:
  - spark
title: Chronos
---
Chronos is a shared calendar tool that displays availability info at a glance. It's primarily a web UI for seeing at-a-glance info of availability based on a shared calendar in Google Calendar, since my current team keeps track of offs, leaves, and other general unavailabilities there. While this gives easy-to-see, at-a-glance info of who would be unavailable, there isn't a way to see who's left. This little tool was therefore built to quickly determine this, based on a config file.

[Visit the GitHub repository here!](https://github.com/arashnrim/chronos)

# Devlog

**28 November 2026**

The more I handle this project, the more I'm wondering if I'm just interacting with another React-heavy app. The only difference with this one is that the overall wrapper is an Astro site, but most of the processing and interactive elements are being handled by a React island instead. I wonder if I should've gone for [Next.js](https://nextjs.org) this whole time?

Re: vibe coding; I'm realising a pattern where the LLM I'm using, with its harness, doesn't really understand the conceptual links between components. With this particular scenario of React components, I think this is where a knowledgeable developer can step in with knowledge of things like React Contexts to refactor the code and enhance its overall stability. Vibe coding lowers the barrier to entry to creating something with code, but how *well* it's written is still dependent on human review and knowledge of frameworks. [See this commit](https://github.com/arashnrim/chronos/commit/8bfbd2458167aa7b8030bdf080efd0d9d9909653) as an example.

Also, people can introduce stubborn code preferences — like for me, I'm painfully insistent on arrow functions over `function`, and I have no idea why.

**27 November 2026**

Today was mostly spent on tweaking the UI and behaviour and injecting more humanness to it all. Some ways I've been doing that is:

- Manually editing the UI to add some flares and touches
- Rewriting the copywrite on the page to use Singlish (<3)

**26 November 2026**

This is my first attempt at vibe-coding together with an agentic harness, namely the version of Copilot preinstalled in VS Code. My thoughts and experiences on it so far:

- Vibe coding definitely seems to work best when a developer who knows what they're doing collaborates with an agentic system powered by an [[large-language-models|LLM]]. I'm reminded of [Levent Alpöge and his breakthrough](https://alpo.ge/remark.pdf) on the Riemann hypothesis in collaboration with an internal testing version of Claude — when a human skilled to proofread and check back the work of an agentic system works together with one, the output as a whole can be more than what either one could've produced independently.
- Today's LLMs, when paired with appropriate supporting harnesses, are surprisingly capable right now. I'm using a version of Copilot Fusion that always seems to fall back to GPT-6 Luna, and it seems to be doing everything I'm prompting it to well — above and beyond, I'd say!

In other normal dev experiences:

- I'm not really sure why I've opted for [the shadcn/ui template library](https://ui.shadcn.com/) as a get-go choice of UI framework. While it's neat and pretty, I can't help but also get a sense at how lifeless it feels because of the fact that it's been recycled by vibe-coded products ad nauseum.