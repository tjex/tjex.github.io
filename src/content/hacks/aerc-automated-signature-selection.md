---
title: Automated email signatures for aliases in aerc
description:
  Pick signatures automatically when composing email or replying based on
  tempalte queries.
pubDate: 2024-04-27T18:06:39Z
author: tjex
tags: ["aerc"]
license: mit
draft: true
---

Within the `accounts.conf` of [Aerc](https://git.sr.ht/~rjarry/aerc), there is a
`signature-file` and a `signature-cmd` option. `signature-file` imports the text
content of a file as the signature for emails, while `signature-cmd` executes a
designated script with `sh -c`.

However, if you have email aliases, you may also want to use different
signatures depending on the alias in question (or to simply not use a signature
at all).

## Solution

The directory structure `~/.config/aerc/` as reference:

```tree
aerc/
├── accounts.conf
├── aerc.conf
├── binds.conf
├── notmuch.qmap
├── scripts
│   └── sig-picker.sh
├── sigs
│   ├── tillmanx.txt
│   └── tjex.txt
├── stylesets
│   ├── default
│   └── tjex
└── templates
    ├── new-msg
    └── reply-quoted
```

The following solution picks a signature based on the address in the "from"
header of an email. This solution also works for composing emails (not just
replying).

So it looks like this:
`new mail or reply -> "from" address gets piped to script -> script returns desired signature to the message body`

## Account conf

Setting the `aliases` option in `accounts.conf` allows `aerc` to populate the
"from" field of emails that you receive at that address.

> Unrelated, but setting aliases also allows sending from those aliases with the
> `output = msmtp --read-envelope-from` option ✨

`aerc/accounts.conf`

```
[account name]
source          = maildir://~/.local/share/mail/foo@email.com/
from            = Tillman X <foo@bar.com>
...             = ...
aliases         = tjex@tjex.net <- that's the important bit here
```

## Template

First we customise the default `new_message` template slightly. Originally:

```text
X-Mailer: aerc {{version}}
{{- with .Signature }}

{{.}}
{{- end -}}

```

The edited template at `aerc/templates/new-msg`:

```text
X-Mailer: aerc {{version}}

{{if .From}}
{{exec `~/.config/aerc/scripts/sig-picker.sh` (index .From 0).Address}}
{{else}}
```

I.e. If a "from" address is found, pipe it to `sig-picker.sh`. The
`{{if .From}}...{{else}}` is because aerc uses the `new_message` template for
replies _and_ new messages. If we set this template in `aerc.conf` as the
default new message template, it will fail when composing a new email with an
`index out of range` error. But I have a way of getting around this too (in a
sec).

Similarly, `reply-quoted`:

```
X-Mailer: aerc {{version}}

On {{dateFormat (.OriginalDate | toLocal) "Mon Jan 2, 2006 at 3:04 PM MST"}}, {{.OriginalFrom | names | join ", "}} wrote:
{{trimSignature .OriginalText | quote}}


{{exec `~/.config/aerc/scripts/sig-picker.sh` (index .From 0).Address}}
```

We don't need the if statement here because this template is only ever used when
replying, in which case there will always be a from address to be found.

## Bash script

```bash
#!/usr/bin/env bash

read input

if [[ $input == "my@email.com" ]]; then
    cat ~/.config/aerc/sigs/tillmanx.txt
elif [[ $input == "tjex@tjex.net" ]]; then
    cat ~/.config/aerc/sigs/tjex.txt
fi
```

## Signature file example

`aerc/sigs/tjex`:

```
--
Tillman Jex
www.tjex.net

```

> note: valid email signatures need to have one white space after the delimiters
> `-- |`. See `man aerc-accounts`.

## Implementing in config

`aerc/aerc.conf`:

```
[templates]

new-message=new-msg
quoted-reply=reply-quoted
```

Now `:reply` and `:reply -q` should "work"; meaning, a specific signature will
be selected depending on which email address is filled in the "from" header when
you're replying (i.e. one of your account aliases).

For getting the right signature into a new email (i.e. not a reply):

```
mx = :compose -H "From: Tillman Jex \<tjex@tjex.net\>"<enter>
```

This initialises the from header, meaning there is a "from" field which
satisfies the `{{if .From}}...` statement in the `new-msg` template.

I wish I could also point to my dotfiles on this one, but I don't like having
all my emails so out in the open...
