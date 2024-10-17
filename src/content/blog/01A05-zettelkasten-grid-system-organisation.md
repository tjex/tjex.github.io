---
title: The GRID System for Frictionless Zettelkasten Organisation
description: The GRID system is a framework for frictionless organisation of a
  Zettelkasten. It defines a set of rules for note creation and note tagging
  that suppress the need for content categorisation.
arvDate: 001A05
pubDate: 2024-01-06T19:01:33Z
modDate: 2024-02-07T16:24:55Z
author: tjex
tags: ["learning"]
license: cc
draft: false
slug: 2024/zettelkasten-grid-system-organisation
---

The GRID system is a framework for frictionless Zettelkasten organisation. It
defines a set of rules for note creation and note tagging that suppress the need
for content categorisation. The goal is to strike the balance between cognitive
friction when writing, and observability when managing, searching, reading and
navigating.

An example of content categorisation is the question, "Which topic does this
note relate to?".

A lack of categorisation helps reduce cognitive friction (not losing the train
of thought) and promotes a focus on the core principle of how the Zettelkasten
method creates value, inter-note linking.

The system was designed with two main concepts in mind:

1. Keeping things simple and following a few well defined principles is the best
   technique to deal with complexity.
2. Content categorisation is the main cause of cognitive friction when working
   within a Zettelkasten.

Some advice is also given for practices which support the goal of a
"frictionless system", such as metadata suggestions and file naming with Unique
Identifiers (UIDs), but they are not directly part of the GRID system itself.

> This post got very long, so you can also jump to the [conclusion](#conclusion)
> to get more of an overview before diving in if you like.

## Table of Contents

- [Back Story](#back-story)
- [(Over)categorisation is the death of a Zettelkasten](#overcategorisation-is-the-death-of-a-zettelkasten)
- [The Fundamentals](#the-fundamentals)
- [My requirements for the system](#my-requirements-for-the-system)
- [The GRID System](#the-grid-system)
- [Tagging](#tagging)
- [Note Metadata, File Naming and Future Proofing](#note-metadata-and-file-naming-and-future-proofing)
- [Final Thoughts](#final-thoughts)

## Back Story

Over the past few years I've read through many ideas of how to structure and
organise a Zettelkasten vault. The difficulty of this hangs in the balance
between the need for _some_ structure, but the truth that too much structure can
severely hinder the effectiveness of a Zettelkasten.

> _"A good structure enables flow"_ \
> ... \
> _"The best way to deal with complexity is to keep things as simple as possible
> and to follow a few basic principles."_\
> ...\
> _"The biggest threat to creativity and scientific progress is therefore the
> opposite: a lack of structure and restrictions. Without structure, we cannot
> differentiate, compare or experiment with ideas."_
>
> ~ Ahrens Sönke, How To Take Smart Notes

The bitter sweet reality of any organisational technique is that we don't know
how well it works for us until we spend some time working with it. After many
iterations, this system emerged and has remained unchanged for quite some time;
I have a solid feeling that I've found what works for me and feel it's robust
enough to present.

I hope it provides some value to you.

## (Over)categorisation is the death of a Zettelkasten

The initial foray into the Zettelkasten technique is uncomfortable. It goes
totally against the grain of how we were taught through school to take notes.
One notebook per class, divided into semesters / classes / topics / ...

This kind of note taking solidifies as _the_ way we record knowledge for
ourselves, and so does the structural thinking that goes behind it,
categorisation. This is the real problem.
[We're hardwired to categorise](https://www.scientificamerican.com/article/wired-for-categorization/),
and we use it for everything, libraries, music, art, ethnicity, psychological
disposition, physical state. An adjective is a categorisation. We categorise to
try and create _some_ structure within the chaos of of reality.

But when we access memories, or follow a train of thought, we rarely do so by
using rigid categorisations.

> The prompt, "recall all memories that relate to the house I grew up in", does
> not return _just_ the memories of your childhood home. It will most likely
> return the image of your childhood home as it exists in your memory, but it
> will inadvertently return memories _linked_ to your childhood home.

In a Zettelkasten system, information is linked together by a _local_ context,
meaning from one note to another, and each note is
[atomic](https://notes.andymatuschak.org/Evergreen_notes_should_be_atomic).
Trying to categorise for retrieval down the track, quickly leads to
over-categorisation.

This is why I think starting with the Zettelkasten technique is daunting, and
also why it's hard to find a system that works, because we're so used to the
crutch of categorisation, but categorisation is the antithesis of the
Zettelkasten system[^3].

But a total lack of structure, let's say a singular folder full of all notes,
without tags, without titles and without dates... This is chaos. By definition,
there is a balance to be struck, hence the task of finding a system that works
well.

Again:

> _"Without structure, we cannot differentiate, compare or experiment with
> ideas."_
>
> ~ Ahrens Sönke, How To Take Smart Notes

## The Fundamentals

First and foremost, I highly recommend to read up a little on Niklas Luhmann's
original Zettelkasten method _before_ churning through the swathes of different
approaches within a digital Zettelkasten (this post included). Understanding the
fundamental principles of anything before delving into developments built on
top,
[greatly enhances our evaluation of those developments](../2023/fundamentals-all-the-way-down)
(whether they be ideas, technologies, relationships, etc).

[Zettelkasten.de](https://www.zettelkasten.de) is undoubtedly the most precious
resource for that. Christian and Sascha communicate the topic with such
excellence, and the forum there is also full of great discussion and attitudes.

This
[introduction to the Zettelkasten method](https://zettelkasten.de/introduction/)
is a great jumping in point.

## A brief review of other systems in the wilderness

Typically, the deliberation of how to give some structure to a Zettelkasten
system boils down to how and in what degree to use:

- tags
- folders
- note titles
- note ids
- naming conventions (e.g., including symbols)
- note metadata (keywords, aliases, author, contextual stimulus, modification
  date, ...)

The biggest traps for over-categorisation are folders and tags. The GRID system
deals with these specifically.

The other formalised systems I've seen predominantly mentioned within
Zettelkasten related forums, videos and posts are
[the Jonny Decimal System](https://johnnydecimal.com/), Tiago Forte's
[PARA system](https://fortelabs.com/blog/para/), Nick Milo's
[ACCESS system](https://www.youtube.com/watch?v=p0zWJ-TLghw) and Bryan Jenks'
[ADHD wrangler](https://youtu.be/wB89lJs5A3s?feature=shared&t=1115).

I've integrated all of them to considerable degrees except the Jonny Decimal
system.

### Folders

The aforementioned systems primarily try to formalise a directory structure for
note storage. Within a Zettelkasten system, folders don't create a major hurdle,
as we can link across folders. This leads many (including my past self) to make
the mistake of building a folder structure, that only ever gets deeper. And as
the folder structure gets deeper, we also become more invested in it and begin
to rely on it as search tool.

However, the biggest issue with folders is that it creates cognitive friction
during note creation. "Where do I store this note?" should never require thought
or time navigating a directory structure. This is a design feature of the GRID
system.

Jonny Decimal, PARA and ACCESS are based on a categorisation of directories, but
I find the categorisation to miss the mark for various reasons:

- Jonny Decimal is limitless in its directory structure depth ( categorisation
  granularity). That's a rabbit hole. _Way_ too much cognitive friction.
- PARA is designed with project managers in mind. The folder structure is
  incongruous with Zettelkasten principles, e.g., the "Archives" folder. A
  Zettelkasten _is_ an archive. A note is never 'inactive', just as a memory
  never is; they're both just resting for a moment.
- ACCESS comes closer to a frictionless solution of folder management, but the
  "Extra" and "Spaces" folder are again rabbits holes.

#### The one true value of folders for a (digital) Zettelkasten [^2]

In a physical Zettelkasten, folders have next to no relevance (Luhmann did keep
his reference notes in a completely separate box [^1]), but they can be very
useful (but still not required) in a digital system.

On a digital system we have the power to work with tools such as scripts, full
text search and regex. Folders are powerful parameters for these features,
inside _but also outside_ of your Zettelkasten program.

Even if you personally don't use these tools yet, there is a good chance you
will to some degree down the track. Making design decisions based around the
future _program independent_ usage of your data is super important (called
'future proofing').

For example, what if you want to host your notes online
[Andy Matuschack style](https://notes.andymatuschak.org/), but have all your
personal diaries mixed in with everything else in one folder?

You'd really hope that you included a `diary` tag and that the hosting /
publishing framework can filter out notes tagged `diary`, when publishing
online. Ignoring a folder is a very basic feature of any such framework, and
worst case, you could just provide the Zettelkasten vault with the diaries
folder removed.

A Zettelkasten has the ability to be a life long artefact for us. Ensuring and
optimising where possible for future usability is therefore _very_ important,
and a strong consideration of the GRID system. Folders help with this.
Recommendations of which folders [are made below](#the-grid-system).

### Tags

Both Milo and Jenks present the two common and divergent approaches to tagging.

It boils down to tags as
[_umbrella terms_, to create loose associations](https://www.youtube.com/watch?v=WUq8Pun28FI&t=1222s)
between notes, like 'shared hobbies', or tags as
[_statuses_, that describe the _state_ of a note](https://www.youtube.com/watch?v=zIh1S7ra3aI&t=172s).

The GRID system sits strongly in the tags as _statuses_ camp, but leans a little
bit over into the other camp as well by tagging notes with their information
source (see [tagging](#tagging)).

Categorical (topical) tags follow the same pitfalls as folders; it requires an
ever increasing amount of mental energy to handle. The following thought
processes are involved in managing a group of topical tags when writing a note:

1. "What tags relate to this note?" (in other words "how many ideas do I think
   could possible have to do with this note's content?"...)
2. "Do I already use this tag, or do I have a tag that is similar that will
   suffice?" (and how quickly and efficiently can you check that you have that
   tag or not?)
3. "If I don't have anything with this tag, is it worth adding it?"
   1. "if I add it, the filtering strength for _all_ other tags will be
      weakened"
   2. "so, will I really think to find this note again by filtering for tag _x_,
      or will it be missed entirely?"
      1. "if I add it, and don't use it, I've weakened the filtering strength of
         all my other tags for nothing"

One solution is to give ourselves a hard limit to how many tags each note should
be given. But this just creates an extra step:

4. "If this note deserves four tags, (because it's such an important and rich
   note that it deserves to be found more easily than others), but I've only
   allowed myself three tags per note, which are the top three tags?"

This exact problem is what structure notes help to solve (see
[I for indexes](#i-for-indexes)).

## My requirements for the system

The system should:

1. strongly facilitate _idea generation_. It should not become a database for
   simply recording and retrieving knowledge.
2. be as _frictionless as possible_ when creating, managing and processing
   notes.

_Idea generation_ happens when notes are linked together meaningfully and
densely. This allows us to move fluidly through the system, replicating the
process of cognitive thought. In such a system, serendipity is often just around
the corner.

As _frictionless as possible_ means picking a spot somewhere between order and
chaos. Too much order creates friction. There are too many decisions to consider
and too often.

Chaos occurs when there is too little order, and the system scales beyond a
certain point. There is a time factor involved, which is why committing to an
organisational design system for their Zettelkasten system is stressful - and
could well be why you're reading this post.

> _The best way to deal with complexity is to keep things as simple as possible
> and to follow a few basic principles._ ~ Sönke Ahrens, How To Take Smart
> Notes.

The above quote encapsulates the way I've evaluated design decisions for the
GRID system.

"Keeping thing as simple as possible" is in my mind "keeping things as
frictionless as possible".

It should hopefully become clear in the system specification below how these
design decisions support that goal. But if it doesn't and, you'd like to clear
something up, please email me!

## The GRID System

Like PARA and ACCESS, GRID is also an acronym for the folder structure. The
acronym was a total fluke.

I _did_ have another folder for projects (inspired by PARA), so it was called
the GRID-P system, or P-GRID, or GRIPD (as in the 'uncool', and non gamer tag
way to write 'gripped') ...

The point is; the acronym did _not_ define the system.

### G for glossary

For notes that serve no other purpose than to factually define a thing. Useful
for using as a jumping off point for a specific thing.

> what notes do I have that I've linked to?..
>
> - the Zeigarnik effect
> - chickenisation
> - Adam Curtis
> - recursion

This helps to avoid context switching (cognitive friction). If we can't remember
what a certain thing is, we can quickly refresh our memories within the same
system. Navigating to a glossary note returns us the facts that most interest us
and which we may be able to add to, given new knowledge we may have.

The opposite process is opening a browser or book, searching for information and
in the process shifting our mental context and, after _x_ amount of time, losing
our focus entirely (particularly if you're searching through the internet).

These notes can also serve as mini-indexes if we wish (see 'I for indexes'
[below](#i-for-indexes)), by including a small selection of valued notes that
relate to the glossary term.

### R for reference

Notes on content we read, watch, hear. Termed 'literature notes' in many
discussions. The folder is titled `reference` to aid in frictionless filing: If
we're consuming some information and writing notes on it, it goes in the
`reference` folder - it doesn't matter if it's a video, recording, academic
paper, etc.

> This is a good example of where to withhold the temptation to create more
> folders. We could make `Reference/Papers`, `Reference/Videos`, etc. But it's
> again a rabbit hole.
>
> How often have we come across a research publication and tried to determine
> whether it was a 'paper' or an 'academic journal article'... Poof! There goes
> our train of thought. Not worth it.

There are different styles of making reference notes.
[This post](https://forum.zettelkasten.de/discussion/2002/concrete-example-of-literature-notes)
shows the common variations (I use 'alternative approach B').

### I for indexes

I consider indexes, Luhmann's
[structure notes / hub notes](https://zettelkasten.de/introduction/#structure-notes)
and Nick Milo's [MOCs](https://www.youtube.com/watch?v=WUq8Pun28FI) as
fundamentally the same; they are notes pertaining to a particular topic, with
outgoing links to other notes of value, on that topic.

As an example, some of my index notes are:

- Cognition
- Meditation
- Programming
- Zettelkasten

#### A brief case for structure notes

Structure notes strike a functional balance between folders and tags. They
provide a topical starting point, e.g., "Cognition" along with some linked notes
relating to "Cognition". But the structure note requires us to insert a link
manually, and each time we go to do that, we _see_ what other notes are
_already_ linked. As we view the pre-existing links in the index, we develop a
perception as to how valuable it is to add the new link. Compare this with
adding a tag, whereby we have no immediate idea of how the current note we're
tagging compares in value to other notes tagged "Cognition".

The result of curating index notes is that each time we decide to search through
our Zettelkasten by a category (by opening an index note), our direction is
already thoughtfully predefined by our past selves, using our own thought
processes to inform _what we define as good focal points for that category_.
This helps maintain our current velocity of thought, and provides much less
friction in deciding which note to select when compared to doing a tag search
for "Cognition".

### D for diaries

With dates as titles. A place to write down fleeting information or personal
entries.

### (And the rest of the notes...)

Exist at the root level, from where they may sprout and grow into
[evergreen notes](https://notes.andymatuschak.org/z5E5QawiXCMbtNtupvxeoEX).

## Tagging

As mentioned, tagging in the GRID system focuses on describing the _status_ of a
note, with a small exception for reference and glossary notes.

Like folders, tags must never describe the concept matter of the note. It does
not scale and creates friction when writing notes (thinking about what tags to
assign), as mentioned [above](#tags). Instead, tags communicate either what form
the _source_ of the information is or what the _status_ of the note is.

### Source tags

"Through which communication medium was the information received?":

1. _audio:_ music, sound recordings, podcasts, discussions, debates
2. _image:_ visual art, photography, graphical content
3. _text:_ anything text based; book, paper, research, publication, blog post,
   newsletter
4. _me:_ thoughts that arise from 'nowhere' (dreams, sudden thoughts)
5. _video:_ (moving images) film, documentary, news reports

Of course, some edge cases exist. In _my personal interpretation_:

- a music track on Youtube is tagged `audio`
- a music video on Youtube is tagged `video`

Notes with a source tag, should therefore _always_ have an accompanying
[reference entry](https://zettelkasten.de/introduction/#reference) at the bottom
of the note.

A reference note on a book:

```markdown
---
tags: [text]
---

# Title

Body of the note

---

References:

- url to external source.
```

It's also nice to have an outbound back-link if the note was created out of
direct inspiration from the content of another. But for this there is no tag, as
such a tag will become almost all encompassing and therefore offers next to no
practical value for filtering (this also means it will destroy your graph view
if you use one). Simply adding the reference without a tag will then suffice:

```markdown
---
tags: []
---

# Title

Body of the note

---

References:

- [The note that inspired the creation of this note](./note.md)
```

### Status tags

1. _seed_: all notes start with this. It's a way to easily search for unrefined
   ideas. A note is a _seed_ if it has less than 3 [meaningful links](ma31).
2. _fern_: assigned upon removal of the seed tag.
3. _evergreen_: when a _fern_ has 5 or more meaningful links.

I heard this terminology through Bryan Jenks. I like the symbolism.

The status tags are great aids in Zettelkasten maintenance. We can filter our
notes by `seed` tag, and pick some to work on, iteratively promoting them to
ferns or discovering they already are, and the tag just didn't get updated.

The bi-product of this process is stumbling across old ideas and connecting them
under new context.

> _In the old system, the question is: Under which topic do I store this note?
> In the new system, the question is: In which context will I want to stumble
> upon it again?_ ~ Sönke Ahrens, How to Take Smart Notes.

This further invalidates the "Archive" folder in the PARA system.

### Structure tags

4. _index_: an index note for a specific topic.
5. _project_: an index note for a specific project (I have one for my masters
   thesis).
   - As this is also an index note, it gets saved in the index folder.
6. _glossary_: all notes in the glossary folder.

The purpose of these tags is purely functional. They provide an alternate and
typically quicker way way to access or filter these notes as apposed to
navigating to the `index` or `glossary` folders.

Having notes in folders in addition, allows for a much simpler process when
handling or accessing the files outside of the Zettelkasten app
[see above](#the-one-true-value-of-folders-for-a-digital-zettelkasten).

## Note Metadata, File Naming and Future Proofing

The below are recommendations of mine and not explicitly part of the GRID
system.

### Metadata

What metadata to use in notes and what file naming convention to implement does
come down to personal requirements and also what program we're using.

My general recommendation for metadata is in keeping with the principles of the
GRID system: as frictionless as possible.

This means as little metadata as possible. I have:

```markdown
---
title: note title
date: creation date
id: the file name without extension
tags: [tag, tag]
aliases: e.g., 'AI' (for the note Artificial Intelligence)
---
```

This is already too much for some. But for me it's fine because _no matter what
type of note_, those metadata fields are applicable.

For reference notes I have an extra `people` field, as:

- it is a useful search filter (e.g., for researchers or authors)
- the tag name is immediately obvious (the authors name), so there's no
  cognitive friction to add it.
- it is not a tag, and therefore does not pollute my tags list (this is
  important, particularly if you're an Obsidian user and like to display your
  tags in the graph view).

### File Naming

As hinted at in the above metadata, I use UIDs as file names (4 character
alphanumeric, lower case). This is for a few reasons:

- it reduces all friction of providing a good file name (the program creates the
  UID for me...)
- the file name never needs to be changed
  - this will prevent link breakage (also if notes are referenced from other
    apps).
  - this will force you not to use the note's filename as natural language in
    your sentences, as if your program updates link titles for you this
    \[[sentence]] will become ridiculous if the `sentence.md` is renamed to
    `chicken.md`.
- links remain small and tidy when viewing in a raw format (I write in neovim)
- files are super easy to locate and process if needed
  - Locating the file `s5wf.md` in my file system is laughably easier than
    `cool...AI...note.md`, as I have 20+ notes with 'AI' in the title.

> I use [zk](https://github.com/zk-org/zk) which handles UIDs incredibly well.
> Notes are created with a title and are searchable and linkable by that title,
> but the file name itself can be a UID. The notes title can be changed of
> course, which will make it searchable by that new title, but all pre-existing
> links will stay intact, as it's linked by the file name, which is the UID.
>
> This is a far cry from Obsidian's UID functionality (I used Obsidian happily
> for years).

### Future Proofing

'Future proofing' relates to how well a system will keep working through the
development of the surrounding technologies (computers, storage mediums,
operating systems, etc).

It also relates to switching costs, which is how well a system can keep
operating when it is transferred immediately into a new environment. E.g.,
changing your note taking app or operating system.

In terms of a Zettelkasten (repository of markdown documents), I would list
these practices as contributing heavily to future proofing:

- only use programs that work with _local_ markdown files (meaning the files are
  on your own computer and can be accessed by you outside of the app without
  restriction)
- no spaces in file names: `file-names.md` or `file_names.md` instead.
- no special characters in file names except hyphens and underscores.
- no spaces in tags with multiple words: `tags-with-multiple-words` instead.
- not using programs that have syntax that differs from standard markdown spec.
- lower case letters for directories (if you ever progress to using the terminal
  or writing programs, this will save you a lot of head and finger ache).
- critically review any features that you bring into your workflow that are
  program specific (such as Dataview in Obsidian)
- use open-source software as it will not disappear overnight or put up a
  paywall that you either cannot or will not want to pay.

## Conclusion

The GRID system is my attempt to strike the balance between cognitive friction
when writing and observability when managing. The folder structure deals with a
clear separation of concerns (glossary, references, indexes and diaries) while
the tags target the _object class_ of a note's _source_, _status_ and
_structure_.

This provides a level of future proofing that can pay off hugely in the long run
and constrains the level of complexity and management costs that very easily
arise when the amount of topical tags become too many (not to mention the
eventual _reduction_ in observability).

The GRID system can therefore be implemented and used as is, but also built upon
very easily if needed. This allows for a custom system with a strong foundation.

[^1]: https://luhmann.surge.sh/communicating-with-slip-boxes, Section II, point 3.
[^2]:
    Thanks to Christian in the
    [Zettelkasten.de thread](https://forum.zettelkasten.de/discussion/comment/19357/#Comment_19357)
    for pointing out that I'd only described _how_ to use folders, but now
    _why_.

[^3]: https://zettelkasten.de/posts/no-categories/
