---
title: Fundamentals all the Way Down
description: How deep do you start when stepping into a new field of learning? Do you learn the fundamentals, or get up and going as quickly as possible?
pubDate: 2023-07-26T19:17:01Z 
author: tjex
tags: ['career', 'learning']
draft: false
---

I recently listened to an [episode of The Changelog](https://changelog.com/jsparty/283), that dealt
with the topic of whether it's important or not as programmers to understand the fundamentals of the
technology, and if so, how many layers deep should we go? Does a web programmer only need
to understand the framework they work with, or should they understand the browser as well? Or the
translation from JavaScript to V8, or TCP/IP, or .. or .. or .. 

![turtles/fundamentals all the way down](/img/2023/turtles-all-the-way-down.jpg)

It's a topic that's definitely on my mind as I move into a career as a programmer.
Particularly as I'm "late" in the "game" after having spent the majority of my life in music and
sound, the question of time allocation carries significant weight. Will learning deeper right from the
start, pay off down the track? And if so, how deeply to begin? I hear people state that everyone
should learn Assembly because it gives you a much clearer idea of how a computer works. Similarly,
the course Nand to Tetris has been recommended to me multiple times by different people. Both of
these lessons can be argued as fundamental, deeper layers. This is in contrast to boot camp style courses
that teach you in quick fire fashion, the functions, syntax and specifics of a programming language. 

Both approaches have their merits. And that's of course the total simplicity in the answer. I think it
just depends on how much you *want* to learn. And it's in this idea, that I think the original
question of how deeply we should understand something, became confused. 

I have a feeling that in today's age, there are many people want to know what the minimal amount of
work is they have to do, in order to do "x". That could be "get a job", "pass the exam", "get an
interview", etc. Somehow the path to getting somewhere has become a means to an end, and not a part
of the end; if there was an option to skip the whole process of getting there, and to just suddenly
be there, I feel that many would take that option. This also goes for actually physically travelling
somewhere. There are few people I know who have any appreciation for "the scenic route", or who 
attribute little if any truth in the idiom, "travel is not about the destination, it's about the journey". 

For me personally, understanding the fundamentals of an underlying technology or "thing", is something I
enjoy. But it's something I think can also become a distraction from actually generating output. This was 
a constant and massive battle back when I was making music. The balance between learning new tools
and making music with them was a very fine and dangerous line. Clearly the TL;DR at this point, is that
balance is key. At the moment I'm transitioning from Mac to Linux and there's a lot of juice
(knowledge) to suckle (learn). During this transition the amount of new layers that unveil
themselves when installing a new package or implementing some new config is pretty astounding. 

And inadvertently, my transition to Linux is a good example of the values of learning fundamentals.
As mentioned, I enjoy learning things that are well beyond my knowledge or skill cap. In my experience, this makes
successive learnings easier to grasp. I also agree with the saying that old knowledge is a
multiplier on your new knowledge. So if you can slot some deeper knowledge under your belt, upon
learning the next thing, the multiplication will be greater.

I chose to start with a base Arch Linux install. Actually, at the very start I tried
going down the Artix Linux route as the whole "[systemd sucks](https://suckless.org/sucks/systemd/), 
[is bloatware and doesn't follow the Unix philosophy](https://chiefio.wordpress.com/2016/05/18/systemd-it-keeps-getting-worse/)" 
story got me excited. But in the end, that was too deep. I got caught up too many times installing
packages that had instructions for systemd, which left me fumbling around myself to implement in
runit. While fumbling is a tried and tested way to get a grip of something new, it was not a path I wanted 
to continue down. Having an unreliable system init and overall service management tool because
of my janky knowledge is not OK. 

Starting (deeper) with Arch Linux was painful, but it's already paying off. Being required to
install absolutely everything myself and configure where needed, has not only given me a much
greater appreciation for the computer as a machine, but it's also provided me a glimpse into the
"space" that programmers work in; the connections present and future that exist
between programs as data flow.

The modularity, openness and therefore customizability of GNU/Linux (hereafter in this blog Mr
Stallman, for the sake of sanity, referred to as, "Linux"[^1]) are what spurred me to change from
Mac. But they've also given me access to a kind of "playground" where I can explore the inner
workings of a system to a degree that isn't possible on Mac. This will quite clearly be beneficial
for my skill sets as a programmer, and I don't believe I would've realised this "playground access" with
such clarity, had I not tried to make it harder for myself by starting with Arch, and instead started with a full 
desktop environment install like KDE, Mint or Manjaro (i.e the non-scenic, "just get there 
now" route).

So I say learn the fundamentals where it fits, but it doesn't have to be as low as possible and
straight from the start. Learning isn't linear, it twists and folds back on itself, filling space
where we don't even realise there was space to be filled. Taking the example of web development
again; I think just learning React and hitting the job market is skating on thin ice. As is
mentioned in the podcast linked in the first paragraph of this post, people who take this route
typically have no idea what to do when something breaks or bug appears. This isn't great for
longevity in any career - unless that breakage or bug becomes a stimulus to learn how to mitigate 
the same thing from happening again. Then the learning folds back on itself and you take a step 
deeper, getting closer to some kind of fundamental layer underneath where you currently are.

[^1]: I'd love to give both Stallman and Torvalds simultaneous credit when writing, but GNU/Linux
    just didn't stick. Sorry. Marketing language sucks, but it happens. The heard lets some things stick, and 
    some things not. E.g. where the hell did the word "woke" come from?... https://www.gnu.org/gnu/incorrect-quotation.en.html
