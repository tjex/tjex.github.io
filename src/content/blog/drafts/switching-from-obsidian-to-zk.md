---
title: Switching from Obsidian to ZK
description: asdf
pubDate: 2024-01-06T19:01:33Z
author: tjex
tags: ['learning']
draft: true
---

If you're an Obsidian user then I'm sorry... Using UIDs sucks because the
autocompletion of links only works by filename, and not by a notes internal
main title... You instead need to do a global search for "# target title", and
drag the result into the pane... This makes linking to a note you know the
title of, a major friction point. Another nisht nisht.

> I used to be an Obsidian user, but switched to [zk](https://github.com/zk-org/zk) for this and many other 
> reasons. But that's a topic for another post...

*Future proofing* revolves mostly around technical decisions. This isn't directly part of 
the GRID system, and is rather a guide that helped me inform what program

> As a steadfast rule; *never*, *ever* use a note taking program that doesn't
> let you access or export your content to some strong standard file type such
> as markdown, text or html. If there is only an export option, then be sure
> they an be downloaded while keeping the same folder structure. Otherwise
> links between folders will break!

### Future Proofing

'Future proofing' relates to how well a system will keep working through the
development of the surrounding technologies (computers, storage mediums, operating systems, etc).

It also relates to switching costs, which is how well a system can keep operating when it is 
transferred immediately into a new environment. E.g., changing your note taking app or operating system.

The switching costs of moving from one program to another, only to find that
some syntax is different is terrible. It happened to me when I moved from
Obsidian to zk. Although my vault wasn't that huge at the time and I hadn't
implemented and relied upon too many obsidian specific features (Dataview was
one). 

It is therefore in our interests to follow a few clear but basic principles and to 
follow good technical standards and practices. In terms of a Zettelkasten (repository of 
markdown documents), I would list these practices as contributing heavily to future proofing:

- only use programs that work with *local* markdown files.
- no spaces in file names: `file-names.md` or `file_names.md` instead.
- no special characters in file names except hyphens and underscores. 
- no spaces in tags with multiple words: `tags-with-multiple-words` instead.
- not using programs that have syntax that differs from standard markdown spec.
 




