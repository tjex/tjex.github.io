---
title: Write in neovim anywhere and everywhere
description:
  A script that effectively lets you write in any text box using neovim.
arvDate: hell
pubDate: 2024-08-05T20:27:49Z
author: tjex
tags: ["scripts", "terminal"]
license: MIT
draft: false
---

If you write in neovim, you want to write in neovim everywhere.

The below script acts as an intermediary solution, by calling up a neovim
instance, allowing you to write as you know and love, and by executing `:wq`,
closes the window and pastes the text into the previously focussed text box.

Here is a quick and dirty [demo video](https://youtu.be/u_f2e2YfDrc).

It uses `skhd` to launch the script via a global keybind, and `yabai` to tile
the window nicely in place. Additionally, `jq` is used to halt script execution
until we are done editing our text.

I took a lot of cues from
[vim-anywere](https://github.com/cknadler/vim-anywhere). But vim-anywhere
required `macvim`, which I didn't want to have to install and setup.

My solution uses your neovim config as it is (as we're really just launching
a terminal window, and running neovim inside).

This is mac specific as it is. But the only parts that need to be change for
Linux is the copy program (look for `pbcopy`) and the `osascript` (which is only
used for getting the current app before execution, and refocussing on that
program after the kitty process finishes).

## Requirements

- [skhd](https://github.com/koekeishiya/skhd) (to set a global hotkey)
- [yabai](https://github.com/koekeishiya/yabai) (optional, for window
  management)
- [jq](https://github.com/jqlang/jq) (for extracting the kitty pid)
- vim / neovim / editor of choice

## Breaking it up

Below reads as: code -> explanation.

```bash
#!/usr/bin/env bash

# invoked via global hotkey (skhd).
# refreshes a temp file, opens in neovim, copys to clipboard on quit.
# heavily inspired by vim-anywhere (https://github.com/cknadler/vim-anywhere)

kitty=$(which kitty)
nvim=$(which neovim)
pbcopy=$(which pbcopy)
current_app=$(osascript $HOME/.scripts/apple/current-app.scpt)
compose_file=/tmp/vimit.md
pid_file=/tmp/vimit-pid

kitty_cmd="kitty @ set-window-title 'vimit' \
    && kitten @ ls | jq '.[].tabs[].windows[] | select(.title == \"vimit\") | .pid' > $pid_file \
    && nvim $compose_file"
# ...

```

The `osascript` grabs the currently focussed app.
[Here is the script](https://github.com/cknadler/vim-anywhere/blob/2c9da7181b6f199afb6ab52e841d5461c113b5cd/script/current_app.scpt).

The `kitty_cmd` is executed by a kitty terminal process that we launch, it:

- sets a window title (so that we can filter it easily using `jq`),
- extracts the `pid` and writes it to `$pid_file`
- launches neovim by opening a temp file `$compose_file`

```bash
# ...
# cleanup on new execution in case old text needs to be retrieved.
rm $compose_file

# execute kitty command
$kitty -1 -T scratch --session - zsh -l -c "${kitty_cmd}"
#...

```

Delete the old compose file at the start of the script, in case we need to
reference it between invocations of the script (this would not be possible if we
deleted it at the end of the script).

Launch the kitty process. `-T scratch` gives the kitty window a title
("scratch") that `yabai` can read (it doesn't read the "vimit" title that we set
in the `kitty_cmd`. I'm not totally sure why). This allows us to target the
launched window with a `yabai` rule.

```bash
# ...
# allow time for pid file to be created and
# wait for kitty process to finish
sleep 1
vimit_pid=$(cat $pid_file)
lsof -p $vimit_pid +r 1 &>/dev/null

# only copy and paste if we actually wrote something
if [[ -e $compose_file ]]; then
    $(which pbcopy) <$compose_file
    osascript -e "activate application \"$current_app\""
    skhd -k "cmd - v" # get skhd to simulate `cmd + v`. faster than osascript
    rm $kitty_ls_file
fi

rm $pid_file

```

Extract the `pid` from the file we wrote to and wait for the process to finish
with `lsof`. This will halt execution of the script while the kitty process is
running, meaning that we only copy text from the temporary file after it's been
written to (after we execute `:wq`, which subsequently closes the kitty window
and kills the kitty process).

## Yabai and Skhd

The `yabai` [rule](https://github.com/koekeishiya/yabai/blob/master/doc/yabai.asciidoc#rule) then looks like this:

```bash
# place the window bottom center.
yabai -m rule --add app="(^WezTerm$|^kitty$)" title="^scratch$" opacity=1.0 sticky=on manage=off grid=3:3:1:2:1:1

```

And for `skhd`:

```bash
alt + cmd - i : ~/.scripts/utility/vimit.sh

```

## Full Script

```bash
#!/usr/bin/env bash

# invoked via global hotkey (skhd).
# refreshes a temp file, opens in neovim, copys to clipboard on quit.
# heavily inspired by vim-anywhere (https://github.com/cknadler/vim-anywhere)

kitty=$(which kitty)
nvim=$(which neovim)
pbcopy=$(which pbcopy)
current_app=$(osascript $HOME/.scripts/apple/current-app.scpt)
compose_file=/tmp/vimit.md
pid_file=/tmp/vimit-pid

kitty_cmd="kitty @ set-window-title 'vimit' \
    && kitten @ ls | jq '.[].tabs[].windows[] | select(.title == \"vimit\") | .pid' > $pid_file \
    && nvim $compose_file"

# cleanup on new execution incase old text needs to be retrieved.
rm $compose_file

# execute kitty command
$kitty -1 -T scratch --session - zsh -l -c "${kitty_cmd}"

# allow time for pid file to be created and
# wait for kitty process to finish
sleep 1
vimit_pid=$(cat $pid_file)
lsof -p $vimit_pid +r 1 &>/dev/null

# only copy and paste if we actually wrote something
if [[ -e $compose_file ]]; then
    $(which pbcopy) <$compose_file
    osascript -e "activate application \"$current_app\""
    skhd -k "cmd - v" # faster than osascript
    rm $kitty_ls_file
fi

rm $pid_file


```
