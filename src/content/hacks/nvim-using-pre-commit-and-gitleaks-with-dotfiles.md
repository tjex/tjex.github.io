---
title:
  "Dotfiles: catching secrets in bare git repos using gitleaks and pre-commit
  hooks"
description:
  Installing pre-commit requires its config to be at the root of a repo, but
  there is an extra detail when achieving this with a bare repository.
pubDate: 2024-05-02T11:33:38Z
author: tjex
tags: ["neovim"]
license: MIT
draft: false
---

Note: this article relates specifically to the dotfile tracking approach with
bare git repositories as outlined
[here on Atlassian](https://www.atlassian.com/git/tutorials/dotfiles)

## Background

[`gitleaks`](https://github.com/gitleaks/gitleaks) detects secrets in your
staged files and warns you as you try to commit them. This has obvious value,
and it's a snappy process, so there is little reason not to implement it. This
is particularly true when dealing with dotfiles, as they inherently deal with
user configuration data (your data) in various forms.

Getting this working in a regular git repository is simple and explained well in
the respective documentation. However working with a bare git repository has
some slight differences in detail. It is slightly more confusing still when
working with bare repositories to track dotfiles.

The crux of the problem is that [`pre-commit`](https://pre-commit.com/), which
is required to run `gitleaks`, wants to find a `.pre-commit-config.yaml` file in
the repository's root. This is in essence your `$HOME` directory, but because of
the 'detached' way of working with the `$HOME` folder, simply placing the config
file in `$HOME` and running `pre-commit install` will throw an error.

```bash
$ pre-commit install

An error has occurred: FatalError: git failed. Is it installed, and are you in a Git repository directory?
Check the log at /Users/tjex/.cache/pre-commit/pre-commit.log
```


## Solution

What we actually need to do is add a worktree from within the `.git` folder
itself, to complete this installation process.

> In keeping with the naming from the Atlassian tutorial and assuming the branch
> you're working on is `main`.

Install `pre-commit` as per the [docs](https://pre-commit.com/#install).

Then add and enter into a worktree, creating a `.yaml` file for the
`gitleaks` [requirements](https://github.com/gitleaks/gitleaks?tab=readme-ov-file#pre-commit).

```bash
# your git folder that holds the tracking information for your dotfiles
cd ~/.cfg
git worktree add main
cd main
touch .pre-commit-config.yaml
```

Populate `.pre-commit-config.yaml` with contents as per the
`gitleaks` [docs](https://github.com/gitleaks/gitleaks?tab=readme-ov-file#pre-commit).

At time of writing:

```yaml
# ~/.cfg/main/.pre-commit-config.yaml

repos:
  - repo: https://github.com/gitleaks/gitleaks
    rev: v8.16.1
    hooks:
      - id: gitleaks
```

Then install the `gitleaks` hook with `pre-commit`:

```bash
# we're still at: ~/.cfg/main
pre-config autoupdate
pre-config install
cd ~
```

Now `gitleaks` and `pre-commit` are installed. You'll find the `pre-commit` hook
at `~/.cfg/hooks`.

From here, `pre-commit` will still want to find the `.pre-commit-config.yaml` in
your git (`$HOME`) root.

```bash
cd ~
cp ~/.cfg/main/.pre-commit-config.yaml .

# 'config' is the alias set as per the Atlassian tutorial
config add .pre-commit-config.yaml
config commit -m 'added pre-commit-config yaml'
```

As you commit this file, you should see that `gitleaks` runs a secret check
against the file 🤞

If all is well, you can remove the worktree folder to tidy up a bit:

```bash
cd ~/.cfg
git worktree remove main
cd
```

From now, `gitleaks` will run on your staged files, as you try to commit. Note:
the `.pre-commit-config.yaml` file needs to remain in `$HOME` (which I
personally find a bit annoying. If anyone knows otherwise, shoot me an email!)
