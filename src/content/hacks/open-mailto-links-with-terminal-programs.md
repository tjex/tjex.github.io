---
title: Open mailto links with terminal applications on MacOS
description:
  Set terminal applications and programs such as aerc, mutt or neomutt as
  valid default mail clients for mailto links on MacOS
pubDate: 2024-05-25T10:53:43Z
author: tjex
tags: ["terminal", "scripts"]
license: MIT
draft: false
---

The process for setting a default application for opening `mailto` links on Mac
requires the designation of a `.app` application from
[within the settings of Mac Mail](https://support.apple.com/en-au/102362).

However, if you're using an email client that does not ship as a `.app` Mac
application (such as terminal email clients like `aerc` or `mutt/neomutt`), then
we need to effectively create a "proxy" application, that simply "passes on the
message", so to say.

This solution was shared by Maarten Aertsen in response to my question
[over on the aerc message boards](https://lists.sr.ht/~rjarry/aerc-discuss/%3CD1FVLZFANBQO.T5Z8R5AVJHKI@tjex.net%3E).
It's achieved via Apple Scripts of all things.

## Solution

I use `aerc`, so `which aerc` returns the path of `/usr/local/bin/aerc`.

Open Script Editor and make a new script document, filling it with the
following. Be sure to replace the path of the binary with the location of your
own.

> Note: the way in which the `mailto` text should be passed to on to your
> program may vary.

```apple
on open location mailtostr
	set text item delimiters to {":"}
	do shell script "/usr/local/bin/aerc \"" & mailtostr & "\""
end open location
```

The magic trick is that instead of saving this script as an apple script, we
save it somewhere as an _application_ (via file -> save). Now in Mac Mail,
navigate to "default mail reader" in settings. The saved application won't show
by default. Select an alternate app by clicking "select" in the drop down and
designate the application you just saved.

> Note: In my case, the Mac Mail UI didn't immediately show that it had
> successfully selected the application. But upon closing and reopening, it did.
> The icon for the application will be a little script icon.

Now when you click on a `mailto` link, the application will execute the binary,
passing on the `mailto` link.

## Troubleshooting

If things aren't working, you can save a new application with the following
script:

```applescript
on open location mailtostr
	set text item delimiters to {":"}
	do shell script "echo \"" & mailtostr & "\" > /tmp/test.txt"
end open location
```

Then make the file `touch /tmp/test.txt` and designate Mac Mail to open this
application as the default mail client.

This will simply direct the output of what the script is getting (i.e. the
`mailto` string) to a text file. Then you can see if there is a format / syntax
issue that is incompatible with your executable.
