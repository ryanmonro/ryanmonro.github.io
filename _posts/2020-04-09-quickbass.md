---
layout: post
title:  "Quickbass 1.0"
date:   2020-04-09 10:00:00 +1000
categories: [projects]
details: "Front-end"
---

![](/assets/projects/quickbass.png)

Over the last few years I've developed a penchant for web apps that look and behave like you're in MS-DOS in the early 90s. Like something you'd see in the background in the early seasons of the X-Files. Going through some old notes last year (yellow B5 legal pads are my weapon of choice) to see if there was anything worth saving, I found something like this:

"Dosbox JS drum machine! Wooooah!"

I was so glad I'd written that note as a reminder to my future self. Otherwise I might never have built this. Just remember kids: write everything down! Throw nothing out! Hoard your ideas! I got around to building this during the "finish a whole lot of code projects" phase of Coronavirus lockdown.

The interface was born out of sitting down with the dimensions of a standard 80x25 character terminal, and figuring out what I could fit in it. I wanted to build a drum machine in the browser but I also wanted it to be useful: the culmination of all the shortcomings I'd found with various hardware and software drum machines and sequencers over the years. I wanted it to be step-based and pattern-based like the Roland TR machines and all their progeny, but crucially I wanted it to allow you to edit one pattern while playing another. You should be able to press play, start jamming, come up with new patterns and switch between them and chain them together without having to press stop. That's the holy grail. It's what makes the 606 so much fun and so useful in live jamming, and it's what makes the 808 comparatively a bit of a let-down. Yeah that's right, I said it. You have to press stop on that thing, or just keep editing the same pattern over and over, or plan everything out in advance.

This "let me edit and switch patterns while still playing another pattern" is what led to the separate Play and Edit areas in the UI, which take up most of the screen real estate but I feel like it's justified. So far it's just a drum machine, but version 2.0 will (one day) have more going on than that. More drum sounds, more colour schemes (including the Quickbasic 4.5 that my whole website is based on), and more instruments. For now, version 1.0 is live.

See it in action [here](/quickbass). The readme [in the Git repository](https://github.com/ryanmonro/quickbass) includes some instructions.