---
title: What even is a "Web Framework" anyway?
date: 2024-10-28T00:00:00.000Z
draft: true
tags:
  - webdev
  - JavaScript
comments: {}
description: "There's a bit of filler text that I've seen used a lot in website templates. Don't bother reading it, it's all gibberish, but here's a good snippet:  Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win survival strategies to ensure proactive domination."
---

There's a bit of filler text that I've seen used a lot in website templates. Don't bother reading it, it's all gibberish, but here's a good snippet:

<p style='font-size: small; line-height: 50%'>Leverage agile frameworks to provide a robust synopsis for high level overviews. <span style='font-size: smaller'>Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. <span style='font-size: smaller'>Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. <span style='font-size: smaller'>Bring to the table win-win survival strategies to ensure proactive domination. <span style='font-size: smaller'>At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. <span style='font-size: smaller'>User generated content in real-time will have multiple touchpoints for offshoring. Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</span></span></span></span></span></p>


Your eyes glaze over after the first sentence, right? It's mind-numbing. Deliberately so, I should add. It uses buzzwords that rely on context for meaning, but doesn't provide any. Perfect filler text despite being 100% grammatically correct. But that first sentence stuck with me because it's shockingly close to how web frameworks market themselves.

They always try to paint themselves as the only product you'll need for web development in a way that appeals to business types, but overwhelms anyone who might be interested in actually _using_ it. Should we be worried that the most powerful people in our society respond best to nonsense word salad that _eludes_ to something valuable? Probably, but that can't be solved with a blog post, so instead I'll try to demystify some of the marketing-speak that surrounds frameworks, JavaScript, and web development in general.

## But Seriously, What's a Framework?

At its most basic level, a framework is a collection of tools that developers use to create and run software on a specific platform. A good example of this that ironically has nothing to do with the internet is Microsoft's .NET Framework. Funnily enough, Microsoft **also** had a hard time explaining what .NET was or why you should want it. So much so that they [stopped trying after 3 years](https://en.wikipedia.org/wiki/Microsoft_.NET_strategy).

In retrospect it's hard to see why Microsoft saw value in pushing .NET to the consumer in the first place. Not only was it extremely confusing for those without extensive knowledge of the Windows operating system, it was always meant to be invisible to the end user. Any research on the topic quickly devolves into labyrinthine link-trees and endless acronyms. .NET was Microsoft's implementation of [CLI](https://en.wikipedia.org/wiki/Common_Language_Infrastructure), and included an [FCL](https://en.wikipedia.org/wiki/Framework_Class_Library) which interacted with the [CLR](https://en.wikipedia.org/wiki/Common_Language_Runtime) to provide support for [ASP](https://en.wikipedia.org/wiki/ASP.NET), [WPF](https://en.wikipedia.org/wiki/Windows_Presentation_Foundation), [WCF](https://en.wikipedia.org/wiki/Windows_Communication_Foundation), and [LINQ](https://en.wikipedia.org/wiki/Language_Integrated_Query). Clear as mud. .NET was an important development in the history of Windows (It's the main reason Visual Studio and Windows XP even exist), but it was never going to be the selling point Microsoft clearly wanted it to be.

Web Frameworks, on the other hand, are marketed **way** more. Probably because there's a lot more of them and the web isn't nearly as monopolized as the PC platform[^1]. Additionally, the web is a lot more versatile than a closed platform like Windows. .NET's whole job was to take code, process it, and spit out an application that would run the same way on every other system using .NET. Web frameworks do the same thing, but for web browsers. When the web was still primarily accessed through phone lines, there wasn't a need for frameworks. Why bother making things more complicated when developers could comfortably type HTML faster than connections could deliver it?

Frameworks became necessary after JavaScript fundamentally changed what web pages were capable of. HTML and CSS are both markup languages, they're not [Turing Complete](https://en.wikipedia.org/wiki/Turing_machine). Raw HTML is functionally identical to a TXT file, it's just designed to be processed and formatted before being presented to the end user. It doesn't "execute" like a high-level programming language would, it's just a document. JavaScript can manipulate that document dynamically by adding, removing, and changing sections at runtime. An important term to remember here is [DOM](https://en.wikipedia.org/wiki/Document_Object_Model) (Document Object Model). "Manipulating the DOM" is essentially shorthand for "change something in the HTML without just editing the HTML directly".

JavaScript functionality allows just about anything you can think of to be turned into a web app. The downside? Vanilla JavaScript is a confusing mess to work with. The language was allegedly thrown together in 10 days and is notoriously bad when it comes to handling errors in consistent ways. Combine that with [JIT](https://en.wikipedia.org/wiki/Just-in-time_compilation) (Just In Time) compilation, and JavaScript code is nigh impossible to debug at scale. Web Frameworks provide a layer of abstraction between a web app and a browser.

[^1]: But you can help [change that](https://www.wheelsbot.dev/posts/arch-linux-install-guide/) today!
