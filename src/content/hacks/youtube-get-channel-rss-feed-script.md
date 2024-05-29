---
title: Get rss feed from a Youtube channel
description: A tiny bash script to get the rss feed from a Youtube channel.
pubDate: 2024-05-29T11:24:36Z
author: tjex
tags: ["scripts"]
license: MIT
draft: false
---

RSS is key to managing the stupid range of information sources we now have to
juggle in the modern world.

Youtube channels also offer an RSS feed, although Youtube of course don't want
to advertise that fact as it means they don't get your interaction data, nor can
they keep you sucked in and clicking from video to video; great. More time and
focus for us.

Execute the below script, giving the channel URL as the argument, e.g.:

```bash
./youtube-get-rss.sh https://www.youtube.com/@theGuardian

```

> Note: the script uses `pbcopy` to copy to the clipboard, which is mac
> specific. Simply replace `/usr/bin/pbcopy` with whichever clipboard program
> your machine is using.

```bash
#!/usr/bin/env bash

channel=$1

rss=$(curl --silent ${channel} | grep -oh 'https:\/\/www.youtube.com\/feeds\/videos.xml[^\"]*' | sort -u)

echo ${rss} | /usr/bin/pbcopy
echo ${rss}
```
