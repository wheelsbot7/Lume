---
title: The Wonderful World of Dotfiles
author: Owen Wertzberger
draft: true
tags:
  - Arch
  - Guide
  - Linux
  - Neovim
comments: {}
description: Dotfiles are a fun and infuriating part of Linux. This article will guide you through my own, focusing on Hyprland and Neovim.
titleColor: text-cyan-400
titleIcon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M36.571 475.429h73.143V365.714H36.571zM109.714 36.57H36.571v182.86h73.143zm182.857 0H219.43v73.143h73.142zM0 329.143h146.286V256H0zm219.429 146.286h73.142V256H219.43zm-36.572-256h146.286v-73.143H182.857zM475.43 36.57h-73.143V256h73.143zm-109.715 256v73.143H512V292.57zm36.572 182.858h73.143v-73.143h-73.143z"/></svg>
---

I love it when names have a deeper meaning behind them, both linguistically and conceptually. Those etymology charts in online dictionaries always fascinated me, like little maps of interpretation. Conceptually, I have SCP-4000 to thank for my love of name-based magic. Oh, sorry I meant to say <span style='color:green; font-weight: bold;'>THAT ONE PLACE WITH THE FAIRIES IN A FOREST THAT CAN'T BE REFERRED TO WITH THE SAME NAME TWICE</span>.

But as you've probably guessed, today I want to talk about something named so literally I can't help but love it. There's nothing to read into, nothing to extract hidden meaning from. It's as subtle as a sledgehammer and as elegant as a cinder-block. Dotfiles are called that because hidden items in a file manager are prefixed with a period. Personally, this radical simplicity is a breath of fresh air. Not just the name, but hiding sensitive files behind such a straightforward barrier. Windows requires you to type out `%appdata%` every single time, and sometimes it's in `%localappdata%` or the Documents folder or some other app-specific folder. I've been confused by Linux's lack of a "Program Files" folder but it's worth it if I can find the files I'll actually edit. 