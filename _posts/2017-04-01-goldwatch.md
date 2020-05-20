---
layout: post
title:  "Goldwatch"
date:   2017-04-01 10:00:00 +1000
categories: [projects]
details: PHP
summary: Tracks and tweets songs played by radio station Gold 104
---

![](/assets/projects/bryanadams.png)

In early 2017, I didn't have much on the calendar (as you're about to see) and set myself the task of 'getting back into programming'. I say 'back into' because I felt like I'd gotten 'out of' it in the years since finishing university. Sure, I used to be able to make websites, I used to be able to build an iPhone app and dig through the documentation and get it to do whatever I want. But the web and mobile native development had moved on in the time since, and I hadn't really kept up with the changes. So it was time to do some revision. I wasn't quite sure how to do this, or which technologies I should devote my time to, but I figured the most important thing was just doing a bit every day. The two things you need to do to get something done are:
1. start doing it
2. keep doing it

Around this time I started reading Murakami's book Absolutely on Music. I never finished it (I meant to wait until I could listen to all the music he was talking about...then never got around to it) but the one thing I learned was that he gets up early. I started hearing about more and more people who get up early and get their best work done first thing in the morning. It sounded like a good place to start for me. Staying up late hadn't really been doing me any favours, so I decided to make myself be an early riser for a while and see where that lead.

While we're on the subject...why is it that the default rock 'n' roll bad boy my-parents-are-away move is to stay up late? Surely everyone knows what happens when you stay up late by now, and that we've learned all we can from it. Why is nobody pushing the get-up-early envelope? "Oh man, you'll never see Keith Richards out at night, he goes straight to bed after the show because you would NOT BELIEVE how early he gets up every day. He gets up at times you haven't even heard of."

Sadly, getting up early is still for nerds. So be it. I had nerdy things to do, I might as well do them at the nerdiest time of the day. Nerd is as nerd does. I was setting my alarm for 5.00am, turning on the computer (or at least moving the mouse to wake it up if it was still on), turning on the radio, and getting to work. That gave me some time before anyone else (wife, dog) was awake and I could really just focus before even thinking about breakfast or anything else. Yes, it still worked without coffee. Even that could wait. I highly recommend it. The radio, I should mention, was always set to [Gold 104.3](http://www.gold1043.com.au/).

![](/assets/projects/downunder.png)

Let's talk about Gold 104 for a bit. They play old stuff. The stuff I remember from the radio when I was a kid. When I started driving a car, it was all I listened to. I loved it. The cutoff year seemed to be about 1990 – you pretty reliably wouldn't hear anything more recent than that, and it was all from the guitar-led rock/pop tradition. It was a time capsule from an alternate universe where techno, house and hip-hop never had any influence on the pop charts. As the years went by, Gold's playlist gradually added more recent songs and accepted entire new genres. They were willing to acknowledge the existence of rap all of a sudden (via the Run DMC version of Walk This Way of course, a pretty easy stepping stone really), and they were also willing to go a lot more pop than before. I found it fascinating. Hearing them play a new song was like spotting a Tasmanian Tiger. Did anyone else just hear that? There are some people in my contacts who I know are always on the lookout for Gold going into previously uncharted territory. 

![](/assets/projects/breathe.png)

Gold moving with the times was undoubtedly a calculated move to continue to appeal to whichever demographic they were aiming their nostalgia gun at, trying to play music from the past that the most people who wanted to live in the past wanted to live in. And in early 2017, that was Smooth by Santana featuring Rob Thomas from the Grammy award winning album Supernatural.

<iframe width="560" height="315" src="https://www.youtube.com/embed/6Whgn_iE5uc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

"Man, it's a hot one," Rob Thomas from Matchbox 20 assured me, even though I was inside writing code regardless of how hot it was outside. As I powered through Python tutorials and suffered through Swift guides the radio continued to throw more musical curveballs at me. They were playing songs I'd never heard them play before. How big is their playlist anyway? Is it about 200 songs or is it more like 2000 songs? Their website displays the song they're playing right now, but they don't publish their playlists, and unlike a few other stations they don't tweet every song they play.

That gave me an idea.

### Goldwatch

If I can find out what song they're playing right now, I can tweet it. Do that automatically whenever the song changes. Repeat. While I'm at it, it would be good to keep track of what they play, and when, so I should save it to a database too. Then I can answer the age-old question, "Which song do they play the most?" Spoiler: at the time it was Smooth by Santana featuring Rob Thomas from the Grammy award winning album Supernatural. I could also find out how many different songs they actually play. And while I'm at it, I might as well add all the songs to a Spotify playlist. That will also give me links to song previews which will be playable on the site. Nice.

For bonus points: a notification on my phone so I know when to call up and win $10,000 when they play a song they've already played that day. That part actually worked. I couldn't believe my luck when I found a not-very-well-hidden RSS feed that showed not just the current song and the previous five songs they played but also, incredibly, the NEXT FIVE songs they were about to play. It kind of takes the magic out of radio doesn't it? It makes it all look a bit rigged, doesn't it? I mean, heck, if they already know the next five songs they're going to play, and when, they probably know in advance how long the announcers are going to talk for, and the only way they could know that is if THEY'D ALREADY DONE IT. They probably pre-recorded all the back-announcing, and none of this is really happening live. Craig Huggins probably works one day a month. But I didn't let it get me down. I had $10,000 to win. And some code to write.

Cue coding montage - getting up early, listening to the radio, walking the dog, going for a swim, jumping out of the pool and excitedly checking my phone to see if my own website had sent me a notification. The beauty of a Gold 104 coding montage is it can be its own soundtrack.


### Aftermath

At some point they stopped publishing the next-five-songs part of the feed. But it was too late: I couldn't un-see behind that curtain. I never figured out whether I was just making too much noise about it (the auto-tweeting account followed Gold 104 on Twitter, so maybe they knew something was up), or if they just realised themselves that it was a bad idea to publish that information where any weirdo with too much time on his hands could find it. I never published the next-five list. It was available on the site but only if you used the GET parameters that only I knew about. I think it was `upnext=1`, or something. 

The site kept gathering data, until December 2017 when it crashed for the last time and I didn't have time to fix it because I had a job. So it's not collecting any more playlist data but the site is still live so you can at least see the stats it gathered over about six months. There were 2484 songs, 30.6k tweets, the most-played artist was INXS, and the most-played song was Baby Did a Bad, Bad Thing.

![](/assets/projects/inxs.png)

The site: [http://www.ryanmonro.info/goldwatch](http://www.ryanmonro.info/goldwatch)

The Twitter feed: [http://www.twitter.com/gold104plays](http://www.twitter.com/gold104plays)

The Spotify [playlist](https://open.spotify.com/user/gold104plays/playlist/6MaGZX2yIQ2shNjKvhPuGg).

The Spotify playlist isn't great. I was at the mercy of Gold 104 misspelling songs and artists, and Spotify's patchy search. So a few songs in there are by the wrong artist, or are clearly the wrong version. No, Spotify, I did not mean the version of We Will Rock You from the original cast recording of the Berlin production of the musical We Will Rock You.

### The Code

I won't share the code. It's too embarrassing. If I was going to build something like this now, I would do it very differently. 
```
- find out which song is playing
- if it's still the same song as last time we checked, wait a bit longer
- otherwise, tweet it
- if it's a new artist, add them to the database
- if it's a new song, add it to the database and the spotify playlist
- add this play (ie a song being played at a certain time) to the database
- wait until songstart + songlength + a few more seconds
- go back to the start
```
That's all fine but it's happening inside a loop in a PHP script, and that's not a great way to do it, but it was all I knew at the time. I logged into my shell account, ran the script (`php goldwatch`), then did the keyboard shortcut (which I had to Google nearly every time) which kept it running in the background after I logged out. It worked but it crashed. A lot. I don't think the shell account that came with my incredibly cheap web hosting was designed to run scripts indefinitely. They never contacted me about it but something came along and killed it every few weeks. I might resurrect it one day, probably as a Rails app. 

But overall, it was hugely satisfying to think of something, figure out how to build it, and then make it work. I was back into programming.

### And in case you're wondering

I didn't win $10,000. I was grossly outnumbered by the people who sit there all day and call up after every...

single...

song. 

Just in case it was the right one.

Some people just have too much spare time...