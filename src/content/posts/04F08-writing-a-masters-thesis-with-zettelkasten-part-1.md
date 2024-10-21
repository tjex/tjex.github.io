---
title: Writing a masters thesis with Zettelkasten - Part 1
description:
  "How can we use Zettelkasten effectively, given a large and time sensitive
  writing and research task such as a thesis or Ph.D?"
arvDate: 04F08
pubDate: 2024-03-19T11:57:30Z
author: tjex
tags: ["learning"]
license: cc
draft: false
slug: writing-a-masters-thesis-with-zettelkasten-part-1
---

I've finally arrived on a topic for my masters thesis. It's an investigation
into how the Zettelkasten system enables creative ideation, and subsequent
development of a network graph user interface, which will be optimized for that
end goal (generating ideas).

This topic stems from my life long interests in psychology and technology and as
such, is a very exciting endeavour for me and my Zettelkasten. Naturally there
will be a lot of reading, thinking and writing to do, and it would be a crying
shame for that thinking and writing to not end up in my Zettelkasten as notes.

Up until now I haven't had to use my Zettelkasten for a large piece of writing.
The largest so far being my
[essay on open source and social catastrophe](../2023/floss-a-partial-antidote-to-social-catastrophe),
but I only used my Zettelkasten to review relevant literature notes and write a
few new ones.

For my masters thesis, I'm exploring what is effectively uncharted territory for
me. Additionally, the thinking will need to go much deeper than the essay
required.

So how can we use Zettelkasten effectively, given a large and time sensitive
writing and research task such as a thesis or Ph.D? There are a few documented
experiences of this process, such as
[here](https://zettelkasten.de/posts/field-report-4-what-i-learned-writing-thesis-with-zettelkasten/)
and [here](https://www.youtube.com/watch?v=L9SLlxaEEXY), which I've taken some
cues from.

The biggest fear for me is the question we all dealt with when trying to first
understand Zettelkasten; how do we find a specific note again? I will be reading
and writing notes on a lot of new content. The process and timeline will be very
focussed and tight, I therefore would benefit from having my notes at hand all
the time. Chasing after lost notes would be frustrating and time consuming.

Indeed, Zettelkasten isn't designed to be a reliable search and recall system,
it's designed to be an environment where we stumble upon previous ideas in
contextually relevant and therefore meaningful ways.

> "_In the old system, the question is: Under which topic do I store this note?
> In the new system, the question is: In which context will I want to stumble
> upon it again?_" \
> ~ Ahrens, Sönke - How to Take Smart Notes

But I don't want to be stumbling around all the time... This project requires
some more stability in note recall.

## Strategy

The task then is to establish some system of keeping track of which notes I'm
working on that are specific to my thesis.

### Thesis Structure as an Index Note

I had already made a rough plan for the structure of my thesis, which included
section headings, sub headings, and dot points for the intended content and
questions to be addressed. I realised this would make for an excellent
[index/structure note](https://zettelkasten.de/introduction/#structure-notes).

Many of the sections and sub-sections had questions that were to be addressed
within them. These questions immediately become question notes. The question
notes are then filled with outbound links to position and ultimately argument
notes. This process of question, position, argument documentation is a mixture
of
[the IBIS method](https://papers.cumincad.org/data/works/att/ca71.content.pdf),
the
[Three Layers of Evidence principle](https://zettelkasten.de/posts/layers-of-evidence/)
and what's referred to as
[QCE](https://oasislab.pubpub.org/pub/54t0y9mk/release/3) (although I have no
idea where that acronym comes from).

To illustrate, here's a sample of the index note:

```markdown
---
title: ctech masters thesis
date: 2024-01-02
id: ip4r
tags: [index]
aliases:
---

# ctech masters thesis

Driving motivation for the practical project:

As creative technologists, it is essential to have tools that help us generate
creative ideas and solutions, not just tools that are used to build the end
product.

## Research questions

Investigating these research questions:

- [what defines the Zettelkasten system?](../kp4q)
- [how does the Zettelkasten system promote creative ideation?](../8sb8)

... more questions / links to notes

## 2. Introduction

### 2.1 Creative Ideation or Knowledge Generation?

- [Is there a distinction between creative ideation and knowledge generation?](../../4w2l)

... more questions / links to notes

### 2.2 Zettelkasten and Systems Thinking

... more questions / links to notes

etc
```

### Diary

As well as this,
[I keep a daily diary within my Zettelkasten](https://tjex.net/posts/zettelkasten-grid-system-organisation/#d-for-diaries)
where I can write freely about particular project or _Zettelkasten related work_
at hand. It's _not_ a diary of my personal life, etc.

Here is an example of a daily note's content related to my thesis:

```markdown
# 2024-03-18

Addressing the question
[what connections are there between the Zettelkasten system, creative ideation and network graphs?](../../it61).
Trying to think about how zk and graphs are complex systems, and how creative
ideation is the result of those systems. How does that happen? That
[consciousness occurs when colonies of cells are large enough in number and connections](../../k8pg)
is an interesting angle, but in the case of zk, the notes aren't 'interacting'
with themselves per se. Rather, it is the interaction within the mind, of the
information they hold, that somehow comes together to create an idea.

Idea's are generated from borrowing parts of pre-existing information.
```

### Tags

As per
[my approach to tagging](https://tjex.net/posts/zettelkasten-grid-system-organisation/#structure-tags)
I will tag all notes that are deemed strongly related to my thesis with
`#p/thesis` ('p' for project). This is partly a crutch to help find a lost note,
but is particularly useful given my Zettelkasten program of choice,
[zk](https://github.com/zk-org/zk), has many powerful features via the command
line. Having all my thesis notes filterable by tag, means that I can batch
process them in all ways imaginable from the command line (eg, archival, ML
input, etc).

## Moving Forward

In summary, I have this process and setup:

1. An established thesis structure outline, which acts as an
   [index note](https://zettelkasten.de/introduction/#structure-notes) where I
   can insert and create links to notes under section headings. This is similar
   to filing notes into folders, just much less rigid. One link can be placed
   under multiple headings too.
2. A daily diary where I can write free form thoughts while linking notes that
   I'm referring to. This keeps track of my half formed ideas if I can't manage
   to write a proper note about them, or if the thoughts are too abstract and
   undefined for a note. These are often called 'fleeting notes'.
3. Following the iterative process of making a _question note_, which links to
   many different _position notes_ (possible conclusion to the question), which
   ultimately links to an _argument note_ (the final conclusion to the
   question). By following this process, I can keep track of multiple ideas that
   relate to any one initial question, which helps in developing ideas. It also
   fosters good thinking processes in general and will help keep the content of
   the thesis clearer and easier to understand.
4. A broad based filter and search capability via the shared `#p/thesis` tag.

Let's see how it goes! I'll write part 2 at some point down the track and review
how this system performed, how it changed, etc.
