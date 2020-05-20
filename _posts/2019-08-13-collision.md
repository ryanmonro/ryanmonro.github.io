---
layout: post
title:  Collision
date:   2019-08-13 10:00:00 +1000
categories: [projects]
details: p5.js
summary: Random physics/music inspired by tone row composition
---

<iframe height="266" width="266" src="https://www.youtube.com/embed/rz6KDOLyVwU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The live demo is [here](https://www.ryanmonro.com/collision/).

The code is [here](https://www.github.com/ryanmonro/collision/).

My first attempt at doing generative visuals with generative sound, all at the same time. I'll be doing plenty more of these.

I had a simple goal of "balls bouncing around a square, playing a note and progressing to the next note each time they bounce, disappearing after x bounces". After trying to figure out the maths myself I soon wished I'd done more physics in high school, and discovered "elastic collision" was the thing I needed to understand. Enter Wikipedia and some headscratching.

Musically, I initially had the balls playing a random note each time they bounce, which was not particularly interesting, and too random sounding. Then I made them all play an ascending chromatic scale for an octave, starting on a random note. That was a bit predictable, and unnerving in its constant ascension. Randomly ordering the chromatic scale on page load worked out great, making it still sound like random notes but with some structure behind it, and each ball acted like a theme that kept repeating, but always starting on a different note in the sequence.