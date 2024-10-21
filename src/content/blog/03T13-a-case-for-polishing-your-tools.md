---
title: A Case for Polishing Your Tools
description:
  Polishing your tools is a good thing. It can teach you a lot, particularly if
  you're new to a technology or practice. Just keep track of how far down the
  rabbit hole you are.
arvDate: 03T13
pubDate: 2023-10-07T09:31:34Z
author: tjex
tags: ["learning"]
license: cc
draft: false
slug: 2023/a-case-for-polishing-your-tools
---

I have a lust in understand things to a deeper level than what is needed to
actually implement or use the thing. _How deep_ is a question for each learning
or interest in question. There is always a trade off between productivity and
capability. Do you just implement and move on without knowing anything about
what just happened, or do you dig in so hard that you end up only reading and
not implementing?

I believe the fundamentally correct answer to this is that your behaviour should
_shift_ within the bounds of that spectrum at any one time. If you're falling
too deep, dig your hands and feet into the walls of the rabbit hole to halt your
fall, scurry back up a little, and enter one of the horizontal tunnels you fell
past. Rinse, repeat.

As someone new to programming, I was given some "OK buddy" treatment when
excitedly advertising to more experienced programmers that I was switching to
Neovim from VSCode. It's a large hurdle to overcome for sure. But the investment
is paying dividends. Not only can I work with files and file systems _way_
faster, but I've accidentally learned many fundamental programming concepts and
practices through polishing my tool (Neovim), that even if I were to switch to a
different editor now, it would have still be worth the time.

Consider the case of someone who's starting out. They know next to nothing about
reading and implementing APIs, debugging, program flow or sourcing, managing and
working with packages, binaries and configuration files on their system. That
was me, and still is to whatever degree.

That person can teach themselves all of that through building their Neovim setup
_from scratch_. Anyone who opens up a bare bones Neovim/Vim install is
_compelled_ to polish it, _hard_. It looks awful and feels completely unusable.
But in reality, it's a sandbox in which to play. It's easy to work iteratively
and interactively, and it results in having a tool that greatly enhances your
ability to work with code and your system (yes, even debugging). And it's fun to
do it! The moments of gratification are much closer together. In this sense, it
becomes a "personal development environment" (PDE, as apposed to IDE), as
explained by TJ Devries in his video,
[PDE: A different take on editing code](https://www.youtube.com/watch?v=QMVIJhC9Veg).

Not only this, but working with Neovim keeps you closer to the command line.
This has also taught me a lot. I greatly enjoyed getting over the intense
feeling of danger when using the command line. And the power and value it
brings! Steve Yegge comments on this at length in one of his
[tech talks](https://www.youtube.com/watch?v=mb8ayJEsnk8). Doing things in the
command line uncovers a lot of knowledge too, in the same way as Neovim does.

For example, why does moving a file with `mv` run so quickly, while copying it
with `cp` runs much slower? The path to answering this question isn't as clear
if you work with a file manager, or do the moving and copying via the file
browser of your IDE.

In the shell, there are many fewer layers of abstraction. You're operating in a
space further down the rabbit hole, where information is more raw and questions
are as a result more clear. Searching _"why is mv faster than cp?"_ will lead
you to much richer information than _"why does copying files in Finder, take
longer than moving them"_.

So you may dig into `cp` a little further and come across `rsync`, and find that
it's a better program for many copying tasks. From there you may well polish
your tool (shell config) a little more and make an alias for it like
`alias rsync="rsync -vrPlu"`. Now your speed is further optimised by not having
to type the flags you always want, and your cognitive load is lower by not
having to remember or search for those flags in the first place.

Then you may want to alias some other frequently typed commands. Now you have
enough where you refactor them out into a separate file and source it in your
`.zshrc`, which requires you to learn a bit of bash syntax, which leads you to
writing little utility scripts that run fast and do whatever you want, because
it runs in the shell and the shell is the lowest level interface between you and
the computer. Your computer becomes a much more powerful tool for you, and it's
nicely polished so that you _move fast_ and _freely_. That's ace!

Whenever someone says "polishing your tools is a trap, it's a bad thing",
they're speaking of the extremes. Polishing your tools
[ can be a great thing ](https://www.youtube.com/watch?v=9gUatBHuXE0). It's
helped me learn a good amount of base knowledge in an engaging environment and
rewarding environment. No-one wants to use a rusty hammer that gives them
splinters, particularly if they can learn things a long the way by polishing and
sanding it. As with everything, self control, moderation and keeping an end goal
in mind is key.
