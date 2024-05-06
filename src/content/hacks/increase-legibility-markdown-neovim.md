---
title: Increase legibility of markdown in Neovim
description:
  Hide link paths, code fences and other symbols that make raw Markdown a bit
  difficult to read.
pubDate: 2024-01-21T22:29:03Z
author: tjex
tags: ["neovim", "dotfiles"]
license: mit
draft: false
---

In vim/neovim, we can set specific syntax rules per filetype, just like we can
set specific keybinds or settings per filetype.

With the below settings, links that follow markdown sytax such as
`[link title](link/path)`, as well as `[[wiki link style]]`, will have all but
the link's text hidden, meaning your eyes don't have to drag over unnecessary
information.

When your cursor is on the same line as a link, the extra syntax / link path
gets expanded, so you can still see that detail if and when you want.

This makes workin with markdown _so_ much better.

Make a folder `nvim/after/syntax` and create the file `markdown.vim` inside:

`nvim/after/syntax/markdown.vim`

Within that file, paste this:

```vim
" markdownWikiLink is a new region
syn region markdownWikiLink matchgroup=markdownLinkDelimiter start="\[\[" end="\]\]" contains=markdownUrl keepend oneline concealends

" markdownLinkText is copied from runtime files with 'concealends' appended
syn region markdownLinkText matchgroup=markdownLinkTextDelimiter start="!\=\[\%(\%(\_[^][]\|\[\_[^][]*\]\)*]\%( \=[[(]\)\)\@=" end="\]\%( \=[[(]\)\@=" nextgroup=markdownLink,markdownId skipwhite contains=@markdownInline,markdownLineStart concealends

" markdownLink is copied from runtime files with 'conceal' appended
syn region markdownLink matchgroup=markdownLinkDelimiter start="(" end=")" contains=markdownUrl keepend contained conceal

```

You can color the links by targeting the `Underlined` highlight group.

For example, with colorbuddy:

```lua
Group.new("underlined", colors.quart, nil, nil)

-- or to actually include underlines under link text
Group.new("underlined", colors.quart, nil, styles.underline)

```
