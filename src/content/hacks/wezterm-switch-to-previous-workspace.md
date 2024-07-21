---
title: "Switch to previous workspace in WezTerm"
description:
  Custom lua implementation to switch between the current and previous
  workspaces in Wezterm.
pubDate: 2024-07-21T20:20:32Z
author: tjex
tags: ["terminal"]
license: MIT
draft: false
---

This was a feature from tmux that I sorely missed. WezTerm offers customization
via `lua` and exposes a _very_ large API surface to the user. This is one of the
reasons why I love WezTerm. The implementation is as follows.

WezTerm makes available a global storage object to the user at `wezterm.GLOBAL`
([docs](https://wezfurlong.org/wezterm/config/lua/wezterm/GLOBAL.html?h=global)).
With this, we can keep track of the previous workspace. The `previous_workspace`
is effectively the _current workspace_, before we change workspaces.

This required then two functions. One to update the `previous_workspace` field
when simply changing to workspaces (e.g, via keybinds or commands) and one to
toggle between the current and previous workspaces.

Given my wezterm config directory structure:

```tree
.
├── design.lua
├── events.lua
├── functions
│   ├── balance.lua
│   ├── funcs.lua
│   └── sessioniser.lua
├── gui_startup.lua
├── keybinds.lua
├── launch_menu.lua
├── status.lua
├── util.lua
└── wezterm.lua

```

```lua
-- funcs.lua

local wezterm = require("wezterm")
local act = wezterm.action

local M = {}

M.switch_workspace = function(window, pane, workspace)
	local current_workspace = window:active_workspace()
	if current_workspace == workspace then
		return
	end

	window:perform_action(
		act.SwitchToWorkspace({
			name = workspace,
		}),
		pane
	)
	wezterm.GLOBAL.previous_workspace = current_workspace
end

M.switch_to_last_workspace = function(window, pane)
	local current_workspace = window:active_workspace()
	local workspace = wezterm.GLOBAL.previous_workspace

	if current_workspace == workspace then
		return
	end

	M.switch_workspace(window, pane, workspace)
end

return M

```

```lua
-- keybinds.lua

local wezterm = require("wezterm")
local func = require("functions.funcs")

config.keys = {
			key = "l",
			mods = "ALT",
			action = wezterm.action_callback(function(window, pane)
				func.switch_to_last_workspace(window, pane)
			end),
		},

```

As mentioned, what's essential, is that any calls to
wezterm.action.SwitchToWorkspace need to be replaced with the switch_workspace()
function, which is effectively a wrapper around this call along with the
wezterm.GLOBAL.previous_workspace logic.

```lua
config.keys = {
			key = "2",
			mods = "ALT",
			action = wezterm.action_callback(function(window, pane)
				func.switch_workspace(window, pane, "admin") -- switch to 'admin' workspace
			end),
		},
```