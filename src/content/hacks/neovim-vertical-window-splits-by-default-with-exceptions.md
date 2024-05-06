---
title: Vertical window splits by default, with exceptions
description:
  Use autocommands to set all window splits in Neovim to open vertically with
  optional exceptions.
pubDate: 2024-04-14T13:13:24Z
author: tjex
tags: ["neovim"]
license: mit
draft: false
---

The below pairing of autocommands sets Neovim to open all new window splits as
vertical splits. Two autocommands are needed as there are some windows which are
nicer to have as their intended / original horizontal splits, such as the quick
fix list.

```lua
-- Open all new windows as vertical splits
auto({ "WinNew" }, {
	group = "windows",
	pattern = "*", -- apply to all
	callback = function()
		vim.cmd("wincmd L")
	end,
})
```

`wincmd L` is the same as `<C-w> L`. See `:help wincmd`. It sets the new window
to be a vertical split on the left side. If you'd prefer to open your new
windows to the right, set `vim.cmd("wincmd R")`.

The `WinNew` event executes as the window is created, but (and I could be wrong
here) at this point we can't retrieve the file type of the buffer within that
window. However, after the new window is created, the cursor jumps to it. The
`BufEnter` event is therefore triggered, which means that we can query the file
type of the buffer and act upon it.

So, if the file type is `qf` (quick fix list) or `trouble`
([trouble.nvim](https://github.com/folke/trouble.nvim) 🙌), the split will be
set to horizontal.

```lua
-- If the entered buffer is one of horizontal_ftypes, move to bottom
-- horizontal window.
local horizontal_ftypes = { "qf", "trouble" }
auto({ "BufEnter" }, {
	group = "windows",
	callback = function()
		local ft = vim.bo.filetype
		if vim.tbl_contains(horizontal_ftypes, ft) then
			vim.cmd("wincmd J")
		end
	end,
})

```

As mentioned, in the case of the quick fix list and trouble, both open as
horizontal splits by default. Despite them being effectively moved from a
horizontal split, to a vertical and then back to horizontal again, the changes
appear 'instantaneous'. So, based on that, this solution feels acceptable for me
at least.

But if anyone has an solution to achieve the file type query logic within the
`WinNew` event, shoot me an email!
