---
title: Neovim keybind diary
description: A chronological diary of keybinds I find worthy of a quick share
pubDate: 2024-01-17T17:37:24Z
author: tjex
tags: ['neovim']
license: mit
draft: false
---

A chronological diary of keybinds I find worthy of a quick share.

Unless otherwise stated:

```lua
local bufopts = { noremap = true, silent = true, buffer = bufnr }
local key = vim.keymap.set

```


## Faster goToDefinition() workflow

Use case: after executing goToDefinition(), we can return to the previous location 
with the regular ` `` ` keybind, alowing us to quickly jump between current info and its context (the definition).


```lua
key("n", "gd", function()
    vim.cmd("norm! m'") --set the current cursor location as 'last' location for easy jumping back
    vim.lsp.buf.definition()
end, bufopts)

```
