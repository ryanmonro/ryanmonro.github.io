---
layout: post
title:  "Montuno Bot"
date:   2020-04-15 10:00:00 +1000
categories: [projects]
details: JavaScript
summary: Random Cat Empire song generator
---

It started as a joke in a band meeting. Somebody mentioned AI, and Harry Angus asked me if I could make something that played a random montuno in a random key at a random tempo, then a random drum/percussion unison hit comes in after a few bars, and at the end of the hit we start all over again. In other words, can you randomly generate a never-ending assault of the kind of thing all the Cat Empire songs did in the early days? I said yes.

I got to work straight away. I'd built musical things with the excellent [Tone.JS](https://tonejs.github.io/) before, but nothing *this* musical. I was excited. But I hit a few roadblocks. It turns out music is complicated. If you play it all the time, you barely have to think about it. But sitting down and breaking it into a series of decisions so a computer can do it...that was tough. And the deeper I dug, the more complicated it got. 

### Piano parts

Dealing with notes is easy (MIDI notes are just integers), playing a triad is easy (three notes the right distances apart), moving it chromatically around the keyboard is easy (increment all the notes in the chord by the same amount), but as I tried to turn it into music I realised I'd oversimplified things. A chord isn't just a set of intervals between notes, you have to take into account that we're probably in a key, and you (might) have to move diatonically rather than chromatically (if you want to). So a triad is...three notes in the scale each separated by a gap of one note? Soon it was playing triads around a randomly chosen chord progression, but they were all in root position. I needed inversions for it to sound like something a human might do. Inverting a chord is easy (put the lowest note up an octave), but how do you *choose* an inversion that's closest on the keyboard to the previous chord? That really got me. This is my method for finding the closest inversion, given a "target Note", which was the lowest note of the previous chord:

- find the root note of this chord which is in the octave below the target note
- try each of the four inversions to find the distance between its lowest note and the target note
- use the inversion with the lowest distance

That worked, but hang on, how do you even play a montuno? I'm no keyboard player, so I don't know how they work. I realised that you can't expect to teach a computer to play montunos if you can't play them yourself. So I went to YouTube to see how they work, as that was a lot quicker than swivelling my chair around and looking through the [Salsa Guidebook](https://www.amazon.com.au/Salsa-Guidebook-Ensemble-Rebeca-Mauleon/dp/0961470194). Really, it's right there in the shelf...but not as close as [YouTube](https://www.youtube.com/watch?v=_sG6RI7aYVQ).

Soon I had some convincing but repetitive montunos. I taught it a few more tricks. Firstly, anticipate the next chord: if we're on the last eighth note of the bar, start playing the chord from the next bar. Next, I taught it how to do that chromatic voice-leading thing: if we're up to the fifth eighth note of the bar (I swear none of the musicians I know ever talk like this), and the previous note and the next note are a tone apart, play the note in between them right now. That's chromaticism. Then I bit off more than I could chew and tried to teach it tritone substitutions: if we're in C and the current chord is a G7 and it's the last chord in the bar, 20% of the time you could play Db7 instead. It didn't work out as tasteful as I'd hoped.

### Percussion parts

Thinking about the kind of unison hits that the guys used to play, I realised they would only ever really play high notes, low notes, a rest, or a crash. The drummer generally doubles the high timbale notes with a snare, and either a kick or a tom when there's a low timbale note. I wrote out a bunch of phrases that each last for two beats, mostly taken from my favourite timbale solo: the one from Se A Cabo by Santana. I figured that if I played these in a random order it would sound at least *like* a timbale solo. I think I was right. But something was missing: it never sounded like it ended properly. So I wrote some more phrases, which it would only use at the end of the last bar. And I got the bass to join in on these too, resolving to the tonic on the last note, so it sounded like the band was coming back in. It worked, but the virtual hypothetical drummer and percussionist were too tight: a snare and timbale being hit at EXACTLY the same time actually just sounds like a snare drum. So I made them randomly up to 20 milliseconds out of time with each other.

### Next steps

I love this process of deconstructing music and figuring out why it works and why we make the decisions we make while we're playing. So far I've covered voice leading and intervals and chords and chord progressions...this thing knows a lot about music! Knowing me, I'll probably turn it into a random jazz machine eventually. [This](https://www.youtube.com/watch?v=FYWtlV4JV6o) is a very inspiring example of what's possible when you put the right set of rules in motion.

### The sounds

The piano is the Salamander piano sample set, which I found in the [Tone JS examples](https://tonejs.github.io/examples/sampler). Drums and percussion are [Roland MT-32](http://machines.hyperreal.org/manufacturers/Roland/MT-32/samples/) samples, which for some reason is my go-to for realistic-ish drum sounds. The crowd noise is from U2's Rattle and Hum, because I [read](http://cardhouse.com/x07/klf.html) that's where The KLF sampled their crowd noise. The bass is actually me. One open A, repitched to wherever it needs to go. I can't remember if I recorded it specially for this, or if I just exported one note from something I was working on at the time. Probably the latter. It all goes through an instance of [Tone.Reverb](https://tonejs.github.io/docs/14.7.30/Reverb).