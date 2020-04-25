---
layout: post
title:  "Hit Machine"
date:   2020-04-25 10:00:00 +1000
categories: [projects]
details: React
---

![](/assets/projects/hitmachine.gif)

The site is [here](https://ryanmonro.com/hit-machine); the code is [here](https://www.github.com/ryanmonro/hitmachine).

In late 2016 I read an inspiring blog post by Tom Whitwell called [How I recorded an album in an evening with a lunchbox modular and a python script](https://medium.com/music-thing-modular-notes/how-i-recorded-an-album-in-an-evening-with-a-lunchbox-modular-and-a-python-script-443ca08f34da), which was about putting some arbitrary constraints in the creative process to narrow the infinite possibilities and help you focus on getting something completed. Instead of just procrastinating forever with tweaking sounds and reading forums – though that can be fun too. His solution was a Python program that randomly generates some song names and instructions, and then he semi-blindly followed them and completed a modular synth album in one evening.

It made me think it would be fun to build something similar for pop songs. Not for the lyrics, but for the structure. Some directions to follow if you were stuck for ideas and wanted to record something right away. If you sit down and start analysing songs it doesn't take long to notice how similar they all are. With very few exceptions, they all have an intro, verse, chorus, verse, chorus, something else in the middle, then a few choruses at the end. There aren't that many chords, instruments or drum sounds to choose from, really. And yet somehow, after 65 years of still not changing the rules, people continue to write new songs. Pop is the biggest arbitrary constraint of them all. Maybe given enough data, even a computer could do it.

Analysing hundreds or thousands of songs is a big job, but thankfully companies like Spotify and Pandora have already done it for you. Unthankfully, Spotify's data wasn't very useful to me (I don't need 'acousticness' and 'danceability' – I need cold hard facts like which instruments are playing in the intro) and Pandora keep their hard-earned data to themselves. In their Box, I guess. The idea rattled around in my to-do list for years, and I guess I was put off by the task of gathering the data.

Then in early 2020 a few things happened:
1. I had a whole lot of spare time thanks to coronavirus
2. I got much better at finishing projects, and
3. somebody sent me a link to Winnie Wu's [Aeropress Dice](https://thewinniewu.github.io/aeropress-dice/) project.

It was based on James Hoffman's [Aeropress Dice](https://web.archive.org/web/20171208104650/https://jimseven.com/2017/12/06/coffee-brewing-dice/) which were an actual set of dice to determine the variables for brewing coffee with an Aeropress. That was inspiring. My first idea was actually, 'Make a React version of that Tom Whitwell Python script!' but thankfully Darwin Grosse and ApolaKipso had already done so, and after abandoning that idea I remembered I'd never gotten around to building Hit Machine. I realised that Hit Machine needn't be much more complicated than Aeropress Dice: for each attribute of the song (tempo, title, artist name, the first chord in the verse, what the drums are doing, etc) just roll the dice. Or a very large number of dice. Display it all neatly in a React app and give people a randomise button. And spell "randomise" with an "s" because you're from Australia.

If you make an album with it, let me know. Or even if you just use it to name your band. Some pretty amazing ones jump out every time I test it. "Disregard the Lasagna" is probably my favourite so far.

To do: sit down and record an album in an evening...I'll get around to that soon.