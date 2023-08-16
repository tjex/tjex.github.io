---
title: "neomutt / urlscan : curses term definition not found"
description: "_curses.error: setupterm: could not find terminfo database"
pubDate: 2023-08-16T09:35:26Z 
author: tjex
tags: ['neomutt', 'shell']
draft: false
---

Truecolor (256 colors) became supported as of the neomutt [release 2023-05-17](https://github.com/neomutt/neomutt/releases/tag/20230517).
However to enable this, we currently need to execute `TERM=xterm-direct neomutt`
to use the colors properly. see here.

I found that when running [`urlscan`](https://github.com/firecat53/urlscan) (a
program that extracts urls and allows opening in the browser without a mouse), I was
getting an error `setupterm: could not find terminfo database`. And this was
because there is no term definition for xterm-direct. I'm not actually sure how
the xterm-direct even works with loading 256 colors... With
`TERM=xterm-256color`, neomutt does not load the colors properly. Very confusing,
and there are not other suggestions from the devs as to other ways to execute /
run colors properly - hence the following fix.

I couldn't find a definition for xterm-direct to download (searched very quickly), so I did a quick
and dirty addition to the suggested macro command from the wiki:

`macro index,pager \cb "<pipe-message>  urlscan<Enter>" "call urlscan to extract URLs out of a message"`

becomes

`macro index,pager  \cb "<pipe-message>  TERM=xterm-256color urlscan<Enter>" "call urlscan to extract URLs out of a message"`

`urlscan` runs then as expected.
