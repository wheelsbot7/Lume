---
title: What even is a "Web Framework" anyway?
date: '2024-10-28T00:00:00.000Z'
draft: true
tags:
  - webdev
  - JavaScript
  - React
  - Vue
  - Svelte
  - Deno
  - Node.js
comments: {}
description: >-
  There's a bit of filler text that I've seen used a lot in website templates.
  Don't bother reading it, it's all gibberish, but here's a good snippet:
  Leverage agile frameworks to provide a robust synopsis for high level
  overviews. Iterative approaches to corporate strategy foster collaborative
  thinking to further the overall value proposition. Organically grow the
  holistic world view of disruptive innovation via workplace diversity and
  empowerment. Bring to the table win-win survival strategies to ensure
  proactive domination.
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

## Why would I need a framework when JavaScript already does it all?

JavaScript functionality allows just about anything you can think of to be turned into a web app. The downside? Vanilla JavaScript is a confusing mess to work with. The language was allegedly thrown together in 10 days and is notoriously bad when it comes to handling errors in consistent ways. Combine that with [JIT](https://en.wikipedia.org/wiki/Just-in-time_compilation) (Just In Time) compilation, and JavaScript code is nigh impossible to debug at scale. Web Frameworks provide a layer of abstraction between a web app and a browser with collections of functions and variables. Now you may be thinking "wait that just sounds like a library", and if you aren't, congratulations! You're a minority!

There's a VERY gray area between framework and library, but my favorite definition is libraries are things you build _**with**_, while frameworks are things you build _**for**_. You can import jQuery into any old project, but to use React functions, you're better off starting over from scratch. This model of framework as a platform means people get very attatched to specific frameworks, as they're functionally new languages and require just as much experience to use effectively. But before choosing a framework, there's an even more foundational layer to web development you have to consider.

## Okay, I'll bite, what's a JavaScript Runtime?

Techinically there's an even _more_ foundational layer called the JavaScript **Engine**, but Google's [V8](https://v8.dev/) , Mozilla's [SpiderMonkey](https://spidermonkey.dev/), and Apple's [JavascriptCore](https://developer.apple.com/documentation/javascriptcore)[^?] all operate close enough to each other that it's not worth considering for 99.9% of people. The JavaScript **Runtime** refers to the whole environment your code runs in. This includes the engine, web APIs, and an event loop[^2]. Here, things start getting a little less centralized, as there are 3 runtimes with significant support currently on the market.

### Node.js

The reigning champion and oldest of the 3. It's hard to pitch what makes Node special because it's considered the default by every dev tool released after 2010. Its biggest strength is compatibility. Its package manager, npm[^3], is ubiquitous enough that a major selling point of the other 2 runtimes is backwards-compatibility with npm. Node has had a lot of time to grow and mature, but that also means it comes with a lot of baggage. The number of people using the internet has more than doubled since Node was released, and the amount of JavaScript in the median website has more than [septupled](https://httparchive.org/reports/state-of-javascript#bytesJs)[^4]. That's the main reason the other 2 popular runtimes sell themselves as more modern and performant alternatives to Node. That, and Node is _easily_ the weakest when it comes to mascots, with their Rocket Turtle only being introduced in Febuary 2024. At that point, their brand identity was a green hexagon for over a decade. No shade towards Rocket Turtle, but he isn't Node, and I doubt he ever will be.

![Image](/uploads/node.js_mascot.png)

### Bun

Bun is a JavaScript runtime, package manager, bundler, and tester with the main goal of being a drop-in replacement for Node.js. Its selling point is simple: speed. One look at their [website](https://bun.sh/) confirms this. They're really proud of their benchmark scores and are not shy about sharing them. This makes my job a lot easier, because what more do I need to say? There's no hidden nuance here, you don't need any insight into web development to know that a faster runtime is desireable. If you want speed and don't mind the hiccups that come with using software that hit 1.0 in September 2023, Bun's the one.

![Image](/uploads/bun-logo.svg)

### Deno

Have you ever looked at something you made and realized that trying to fix it would take more work than starting over? Sunk-cost is a powerful deterrent, but it didn't stop Ryan Dahl[^5] from leaving Node.js to try and de-node the web. Hence the name and pronunciation of Deno, a JavaScript runtime looking to solve 3 big problems with Node: security, complexity, and web compatibility. Security is a topic better suited for server admins and professionals, so let's focus on the 2 you'll actually interact with.

![Image](/uploads/heaviest-in-the-universe-node-modules.png)

[^?]: Yes, it's "JavascriptCore", not "JavaScriptCore". I don't like it any more than you do. This is like if Levi-oh-SAH was the correct pronunciation.

[^1]: But you can help [change that](https://www.wheelsbot.dev/posts/arch-linux-install-guide/) today!

[^2]: An [equally confusing](https://youtu.be/8aGhZQkoFbQ) subject, but for now let's just say it's the part of your browser responsible for keeping things consistent between you and the server.

[^3]: Which, rather uncreatively, stands for "node package manager"

[^4]: For those of you using your brains for more important things than remembering number prefixes, that's 7 times.

[^5]: Creator of Node.js and has a [Wikipedia page](https://en.wikipedia.org/wiki/Ryan_Dahl) shorter than _this_ article. My guy just revolutionized the modern internet and then proceded to use it as little as possible. King. Check out his [blog](https://tinyclouds.org/) if you can, it's nice to see a titan of modern web design with a blog that _anyone_ could make.
