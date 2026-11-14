---
created: 2026-10-03
tags:
  - spark
title: Ratchet
---
Currently an exploratory project, Ratchet is a Telegram bot I'm making to help assist in day-to-day mechanic work as part of my assigned vocational work in [national service](https://www.ns.gov.sg/web/about-us). Because of immediate and critical security and privacy constraints dealing with sensitive information, there isn't much development work going on. As a whole, though, the project is being developed with these in mind:

- Keeping data on-device and local end-to-end — everything is constrained to the devices I own, and nothing is stored or processed anywhere else but here.
- Full information is never retrieved — even if I wanted to, restricted documents are isolated to specific environments (and for good reason!).
- Access is only granted on a manual basis — meaning every username allowed to interact with the bot is currently someone I know is also authorised.

Currently, the scope of the project only includes manually-transcribed tips and tricks that I've picked up while working, meaning no information regarding any restricted document is being used.

# Devlog

**13 November 2026**

- We're currently using some form of fuzzy pattern matching to try to find the best-matching results based on what the user has inputted, but it's been okay at best; most of the time, Ratchet presents wrong information that doesn't have anything to do with what the user has tried searching for.
	- I'm currently looking at [System One models](https://typesafe.ai/blog/introducing-system-one-models-and-jev) — and particularly open-weight ones — to see if they can help to filter down a user's queries to match better with prospective results. I'm trying to make a prototype to figure out if this is something we can work with!

**3 October 2026**

- The bot is now quickly becoming a lesson in "don't solve problems just because you can", because the bot hasn't really been used as I thought it would be; what a valuable lesson!
	- It's quite interesting to see how the bot fails when you suddenly can't access your phone with your hands, and so I'm thinking of pivoting the bot to include tips and tricks that I've picked up across my time here to (hopefully, possibly, probably) pass on to future batches if it might help.
