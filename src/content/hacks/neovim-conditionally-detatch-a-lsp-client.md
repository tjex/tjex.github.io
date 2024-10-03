---
title: Conditionally detatch an LSP client from the current buffer
description: Sometimes there is the need to run two different LSPs for different
  projects. But this can lead to conflicts.
pubDate: 2024-10-03T21:05:00Z
author: tjex
tags: ["neovim"]
license: mit
draft: false
---

I use the Zettelkasten program [zk](https://github.com/zk-org/zk) for note
taking. It ships with its own LSP to power some nice features.
However, I also run the
[Marksman](https://github.com/artempyanykh/marksman) LSP, as the zk LSP only
runs within zk notebooks, and isn't as fully featured as Marksman.

Running multiple LSPs can lead to confusing behaviour when their functionality clashes. Usually
it's fine, nvim-lsp just executes the command with the first client in the list
(I assume). But there have been times for me when it wasn't fine.

Another reason may be that you want to exclusively use the formatting
capabilities of a certain LSP within a certain project.

## Solution

Each LSP has some default methods and fields. Here are the [nvim-lsp docs](https://neovim.io/doc/user/lsp.html).

We can create some logic in the `on_init` method to check if an LSP is attached,
and act based on the result.

I'm using [Mason](https://github.com/williamboman/mason.nvim) for installing,
setting up and managing LSPs.

```lua

-- ... more code

		require("mason-lspconfig").setup_handlers({
			function(server_name)
				lspconfig[server_name].setup({
					on_attach = -- ... code out of scope
				})
			end,
			["marksman"] = function()
				require("lspconfig").marksman.setup({
					on_attach = -- ... code out of scope
					-- if zk lsp is attached, we are working in a zk notebook
					-- so detach marksman.
					on_init = function(client)
						local clients = vim.lsp.get_active_clients()
						for _, c in ipairs(clients) do
							if c.name == "zk" then
								vim.lsp.buf_detach_client(0, client.id)
							end
						end
					end,
				})
			end,
      })
```
