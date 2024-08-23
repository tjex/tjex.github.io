---
title: Ignore specific commands from being written to zsh history
description: A simple and effective way to keep certain shell commands from
being written to your zsh history.
pubDate: 2024-08-23T20:01:15Z
author: tjex
tags: ["terminal"]
license: MIT
draft: false
---

Some commands are best kept out of your shell history.

This can be for privacy or usability reasons.

In my case, I very often jump between neovim and the shell instance with
`ctrl-z` and `fg`. Once in the shell, I will run whatever commands I need, and
then jump back into neovim with `fg` to continue working.

It happens often, that after sending the neovim process to the background with
`ctrl-z`, and hitting `UP,UP` on my keyboard to select the second last command
(as the very last was `fg`), I move to fast and select `fg` instead. As a nerd,
this is way too annoying.

As `fg` is basically as fast as hiting `UP,UP`, I can do without having the `fg`
entry in my shell history at all. This will enable me to always hit `UP` _once_
to select the last command, enabling a workflow as such: `work in neovim ->
ctrl-z -> go run main.go -> fg -> (repeat)`.

## Solution

This solution is for `zsh`, but I read it works for `bash` as well. The option
setting may be different though.

It requires only two things:

1. set `setopt HIST_IGNORE_SPACE` in your `.zshrc`
2. set an alias for `fg` (or whichever command you're not wanting to have
   written to history)

The alias will be the exact same command, but just with a white space preceding
it:

```bash
alias fg =" fg"
```

Now, when you execute your command, it will be substituted by your shell with
the set alias, and because the actual command that's executed (the alias) has
a whitespace preceding it, it will not be written to your zshhistory. 
