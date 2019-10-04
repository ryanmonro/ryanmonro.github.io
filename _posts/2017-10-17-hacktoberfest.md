---
layout: post
title:  "Hacktoberfest! Or, how I learned to love open source and got a free t-shirt"
date:   2017-10-17 22:10:12 +1000
categories: [blog, coding]
---

![Github logo](https://cdn-images-1.medium.com/max/1600/1*IzQ0MFKVbcZev3mNedfHrA.png)

Contributing to open source is a lot like listening to Steely Dan: everyone seems to rave about it, it seems like something I should be into, I’ve wanted to get involved for a long time, but I can never really figure out where to start. Unlike Steely Dan, however, the benefits of contributing to open source are clear. Basically, there’s a lot of code out there, there’s a mechanism for you to be able to make changes and submit them, and the owner can add them to the real actual code if they agree with your changes. That makes you one of the contributors. Neat, huh? Write software with people you’ve never even met, get some good experience under your belt, and help improve something by being one of the tiny worker ants pushing variables around. I’ll put it slightly more grandiosely than that: *help further the advancement of humanity without even leaving your couch*. Count me in. But where do I start?

Some advice we were given a few weeks ago in class was to find some documentation that needed improving. I liked the idea of that because I guess I’m more confident in my ability to string words together than my ability to string strings together at this stage. So I put it on my eventual-but-soon to do list; something I was sure I’d get around to while I’m still studying at General Assembly, as long as I can find some spare time outside all my coding, spare time which I’m happy to fill with even more coding. But then a few weeks ago a message came up in Slack about something that gave me a reason to get started right away. Hacktoberfest.

[Hacktoberfest](https://hacktoberfest.digitalocean.com/) is a month-long celebration of open source. If you make four pull requests in October, they will send you a t-shirt. Wow. That’s exactly the kind of carrot I needed dangled in front of me. Before I get started I should briefly explain some jargon just in case you’re not familiar:

* git — a version control system for tracking changes in files. Like ‘track changes’ I guess. But better. Works project-wide on many files and folders with many people.

* repository — stores all the files involved in a project and their edit histories, it’s what git generates and keeps track of basically

* github — a service that hosts git repositories

* fork — the act of making a copy of someone else’s repository, most likely with the intent of making some changes

* commit — a snapshot of a repository in time, allowing you to save all the files in a particular state. Commits can be saved with a message reminding you of what you were committing at the time. “Changed you’re to your”, for example.

* pull request — after you have **forked** someone else’s **repository** and **committed** some changes you can submit a **pull request** on **Github**, and they can choose to **merge** it if they like what you’ve done.

Really, pull request was the only thing I needed to explain but, as you can see, it came with some required knowledge. So. Four pull requests and you get a free t-shirt. They don’t even have to get merged, so your ideas don’t even have to be all that good! What a perfect time to get into open source.

And it’s not even about the free t-shirt, I have to say. I might not even ever wear it. To be honest, I’m pretty happy with my current t-shirt situation. I have nine or ten identical plain black t-shirts. Each morning I pull one out of the drawer and put it on. I don’t have to think about it any more than that. I also have a few band t-shirts that I’ve had for decades and will never part with, but I wear them each about once a year. Broadcasting my values and taste in music to the world through the medium of what’s-written-on-my-clothes is something I was really into when I was in my 20s, but I don’t really do it anymore. So I probably won’t wear the Hacktoberfest t-shirt. I’m much more comfortable just putting on the plain black one and putting up with the you-look-like-a-roadie-what-time’s-soundcheck-mate-can-I-get-a-bit-more-kick-drum jokes. But I’ll at least look at my Hacktoberfest t-shirt and know it was what got me started in open source. “Thank you, t-shirt I’ll never wear,” I’ll no doubt say.

Technically I submitted a pull request to DT’s masterpiece *toilet.js* first. It’s a toilet painstakingly drawn in CSS, to demonstrate CSS transitions, event listeners and adding CSS classes to DOM elements in JavaScript. But it had a shortcoming. There are two things people do in toilets, and *toilet.js* only simulated one of them. So I added the other one. Fork. Clone. Edit. Add `pee()` method. Make some changes to `flush()` too. Commit. Pull request. Technically I hadn’t signed up for Hacktoberfest yet so I don’t think it counts. But it was a good exercise, and made me realise I quite easily had four more up my sleeve. So here’s how I did it.

## 1. Random notes and chords

Chance.js is a library that generates random…things. That’s the best way I can put it. It saves you from reinventing a whole lot of wheels, mostly wheels that generate random…er…things. Are you writing a program in JavaScript that needs to generate a random name, email address, phone number, or the like? Random hashtag? Random syllable? Random paragraph made from random syllables? Chance.js can do all of that for you. It gets really obscure too. Random Brazilian social security number. So it surprised me that it had no music functions. None. It will generate a random Blackberry PIN but it won’t do anything music related. I figure there was definitely a gap there I could write something for. I started with random note. But before that I started with reading through the existing code to see how it looks, if there are any conventions I should follow, and also if there were any wheels in there I should be mindful of not reinventing. It turned out there were some helper functions in there, to cover some of the handy things that don’t come with JavaScript. I saw a lot of the get-random-element-from-this-array functions used something called `pickone`. Isn’t that nice and self-explanatory? `pickone(notes)`. That does what it says on the can.

And then I gave myself a crash course in writing tests. Whoah.

So I learned a lot. Now Chance.js generates random notes, random chords (you can specify `jazz: true` if that’s the kind of chord you need, otherwise you just get triads), random tempos and random MIDI notes, and I have one fourth of a t-shirt.

## 2. An upside down triangle instead of a dot over the lower-case i

While I was working on [Seinfill](http://seinfill.herokuapp.com), my Seinfeld lorem ipsum generator, I dug around and managed to find a not-very-well-publicised Seinfeld logo generator. It’s written by Charlie.bz, the guy who somehow [runs Windows 95 on his website](https://charlie.bz/). Buried in the cgi-bin directory, sure enough he had a Ruby file that generates a Seinfeld logo with the [text you provide](https://charlie.bz/cgi-bin/seinfeld/Medium). I checked out the code and realised what it was doing. Draw a yellow ellipse with a drop shadow. Write something in front of it in red ITC Fenice LT Regular Oblique (that’s the Seinfeld font) with a drop shadow. Very clever. But something was missing. That upside down triangle instead of a dot over the i. I contemplated just photoshopping one in but realised this could be another quarter of a t-shirt if I could get Charlie.bz’s site to do it instead.

I started brainstorming how to draw a triangle, and where.

    draw ellipse
    if input contains 'i'
      draw text
      get locations of occurrences of 'i'
      ummm...oh shit all the letters are a different width
      this is going to get ugly

I decided it would be quicker to learn how to just edit that damn font. Can you even edit fonts? I googled ‘font editor mac’ and sure enough, I found Fontforge. I arsed around in Fontforge until I had a triangle in pretty much the right spot over the i. Commit. Push. Pull Request. The next day I was able to generate my Seinfill logo.

Now I’m not sure what went through Charlie’s head when a stranger submitted a change to his Seinfeld logo generator at half past midnight on a Saturday night, but I’m guessing it was unexpected. That brings us halfway to my free t-shirt.

## 3. Update Readme

It’s kind of a long story, but I’m working on something that requires me to convert a whole lot of Hex colour codes (you know, like #FFFFFF) into something that MacOS can use. And guess what? Someone on GitHub has written a thing that does exactly that, amongst a collection of other colour conversion utils. I downloaded it, ran it, and was a little disappointed to see it couldn’t actually name the colours. They all came out “unnamed” or “untitled” or thereabouts. I dug around in the code to see if it could be rectified, and sure enough it actually allowed names for each colour, but that great feature had gone criminally undocumented. Hacktoberfest to the rescue. I used Github’s streamlined method: click ‘edit’ on any file, and it will handle all the paperwork. I added a note in the readme that you can provide a list of colours and their names, separated by a space. Pull request. That t-shirt is almost mine.

## 4. Update usage hint in main.m

    NSLog(@”Usage: ase2clr filename.ase [-i]”);

Oh, look at that. It shouldn’t say ase2clr. I guess somebody copied-and-pasted that over from one of the other colour utils and forgot to change it. It’s a minor thing, but while I’m here I’ll fix it. Done. Oh, that counts as a separate pull request? Hmm. I guess I can get that t-shirt now.

So there you have it. We’re slightly over halfway through October, if you’re in the boat I was in at the start of the month you should get to work. Find a thing you can improve. Improve it. It might be surprisingly easy to find. And you know what else? If you don’t make it to four pull requests you’ll still get some free stickers.
