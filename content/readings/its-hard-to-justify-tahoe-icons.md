---
title: "It’s hard to justify Tahoe icons"
description: "Looking at the first principles of icon design—and how Apple failed to apply all of them in macOS Tahoe"
date: "2026-01-05"
authors: ["Nikita Prokopov"]
---
[Visit the original here](https://tonsky.me/blog/tahoe-icons/)

# Annotations

> The main function of an icon is to help you find what you are looking for faster.

> Perhaps counter-intuitively, adding an icon to everything is exactly the wrong thing to do. To stand out, things need to be different. But if everything has an icon, nothing stands out.

> These are not some obscure, unique operations. These are OS basics, these are foundational. Every app has them, and they are always in the same place. They shouldn’t look different!

> Icons are supposed to be easily recognizable from a distance. Every icon designer knows: small details are no-go. You can have them sometimes, maybe, for aesthetic purposes, but you can’t rely on them.
        And icons in Tahoe menus are tiny. Most of them fit in a 12×12 pixel square (actual resolution is 24×24 because of Retina), and because many of them are not square, one dimension is usually even less than 12.

> For Tahoe icons, Apple decided to use vector fonts instead of good old-fashioned bitmaps. It saves Apple resources—draw once, use everywhere. Any size, any display resolution, any font width.
        But there’re downsides: fonts are hard to position vertically, their size doesn’t map directly to pixels, stroke width doesn’t map 1-to-1 to pixel grid, etc. So, they work everywhere, but they also look blurry and mediocre everywhere

> In Tahoe, though, some menu items have icons, some don’t, and they are aligned differently

> Of course, advice on how to adapt your icons to black-and-white displays is obsolete. But the principles—as long as they are good principles—still apply, because they are based on how humans work, not how computers work.

> In my opinion, Apple took on an impossible task: to add an icon to every menu item. There are just not enough good metaphors to do something like that.