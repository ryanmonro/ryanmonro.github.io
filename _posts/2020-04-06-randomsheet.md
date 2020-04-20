---
layout: post
title:  "Randomsheet"
date:   2020-04-06 10:00:00 +1000
categories: [projects]
details: "Node.js"
---

![](/assets/projects/randomsheet.jpg)

In March 2020 during my Coronavirus lockdown, I found a lot of spare time to get things done that I usually wouldn't have time for. This was great news for my more frivolous coding ideas. One particular Sunday I thought to myself, "Surely it wouldn't be that hard to generate random [Broadsheet](https://www.broadsheet.com.au) articles based on a whole stack of Broadsheet articles." Over the next few weeks, I figure out how to do just that.

I find Broadsheet fascinating. At first glance, they have restaurant reviews. But it doesn't take much reading to realise there is no opinion or critique involved whatsoever. So that can lead you to think, "Oh these aren't reviews, they're just regurgitating press releases like lazy journalists." But they're not lazy. They really put the time in. They really seem to care about representing what each new place is really about, but without saying if it's any good or not. Each article can really be summed up as, "This place exists." But the language is always, well, unique. There's an intrinsic Broadsheetiness to the writing, which is what made me think maybe I could generate them randomly.

It turns out Markov chains are the path of least resistance to building something like this. After understanding just enough about them to be able to use them, I built it like this:

1. a crawler that crawls around on Broadsheet's site and saves articles to disk. The headlines of the articles were saved separately, as they have a particular vocabulary of their own that I wanted to preserve.
2. a trainer which cleans up the data (slightly) and trains Markov chains on the article text and headlines.
3. a server which generates a webpage with Markov-generated text, and a random image from the incredibly useful and on-brand-for-this-project [Unsplash](https://www.unsplash.com).

This project was very much inspired by Postlight's [Lorem Ipsum Generator Generator](https://github.com/postlight/lorem-ipsum-generator-generator/). The [Mercury Parser](https://github.com/postlight/mercury-parser), another Postlight project, was also invaluable in extracting the actual article from each page. Thanks Postlight. 

Shortly after I finished this project I realised it would be a whole lot more useful if you could point it at anything, rather than just Broadsheet. That led me to fork Postlight's repo and add a crawler around it, resulting in my [Crawling Lorem Ipsum Generator Generator](https://github.com/ryanmonro/crawling-lorem-ipsum-generator-generator).

See it at [randomsheet.appspot.com](https://randomsheet.appspot.com)