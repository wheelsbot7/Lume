---
title: Arch Linux Install Guide
date: '2024-08-06T00:00:00.000Z'
author: Owen Wertzberger
tags:
  - Arch
  - Linux
  - Guide
comments: {}
draft: false
---
If you're just here for an install guide, hop down to the numbered list. If
you're interested in learning _why_ you should install Linux, read on!

<!--more-->

Linux has a (well deserved) reputation for being intimidating for newcomers, and
I don't think that's a problem that needs to or even can be solved. The basic
model for selling operating systems isn't exchanging money for functionality,
it's exchanging money for convenience. Nobody buys Taco Bell because it's
_better_ than what they can throw together at home, they buy it because they can
get food without the time and effort involved in making it themselves. In that
process they also defer the expertise involved in making a taco to an employee.
I know that's a weird example, but you understand what I'm getting at, right?

For the longest time, I've deferred the technical expertise involved in running
a Turing machine to Microsoft, Dell, and other tech companies in exchange for
money. However, late-stage capitalism has turned industry-leading products into
spyware and e-waste, so if you actually want a functional machine, you can't
just pay for one. You gotta make it yourself.

My distro (Linux distribution) history went like this:

- Raspberry Pi (for a school science project, not personal use)
- Ubuntu, just for fun and to see if I could
- Mint, a friend recommended it for newbies
- Kubuntu, after the Steam Deck sold me on Plasma
- EndeavorOS, after trying (and failing) to install Arch proper
- Arch, after finding out about arch-install
- NixOS, after learning about the Nix package manager's ability to distro-hop
- And back to Arch, after getting frustrated with Nix

The official Arch install guide is very much aimed at people who already know
what they're doing, so I thought I'd make an install guide that makes sense to
me and hopefully some of you. With me so far? Great, then let's go!

1. ## PREPARE INSTALLATION MEDIUM
   1. It's a lot less scary than it sounds, you just need a USB flash drive with
      > 4GB of storage.
   2. Download the Arch ISO file from whatever mirror you want
      1. Mirrors can be really overwhelming, but they're all the same, the only
         difference is download speed
      2. If there's a big university near you, chances are they have a mirror
         you can download from (I got my ISO from MIT)
      3. Don't worry about checksum signature verification, that's above our
         pay-grade for now
   3. Download Balena Etcher and flash the ISO to your USB drive
      1. This will take a few minutes, so now's the time to grab a drink
      2. The process will re-partition your flash drive, erasing all data on it
         and rendering it unusable for general storage, so be aware of that
2. ## BOOT YOUR PC INTO BIOS
   1. This step is going to be different depending on what PC you have.
      Generally speaking, hold down either F2 or Delete when your computer shows
      the manufacturer logo
   2. Navigate to a "Boot" tab and change the priority boot option from Windows
      Boot Manager to the flash drive you just put Linux on.
   3. Save your changes and reboot.
3. ## INSTALLING LINUX
   1. Finally! You're gonna see some command line gibberish pop up, but don't
      touch anything until you get to the full "Welcome to Arch Linux!" screen.
   2. We need to do 2 more things before starting the installation proper:
      connect to the internet and rank mirrors.
      1. If you're using an ethernet cable, you should be connected right away.
         If you're using WiFi, you're going to have to type `iwctl` to configure
         your connection. Once your command prompt shows `[iwd]` at the start,
         type in `device list`. This will show the WiFi devices present on your
         system. Most people will just have one called `wlan0`, so that's what
         I'll be using for examples. If you don't know which networks are
         available or you just want to check, you can type `station wlan0 scan`
         and then `station wlan0 get-networks` to list the networks you can
         connect to. To actually connect, type
         `station wlan0 connect (insert network name here)`. It will prompt you
         for a password afterward, but after that, you should be connected. An
         easy way to check is to exit out of the iwctl utility by pressing
         "Ctl + C" and run the command `ping archlinux.org`. If everything
         works, you should now see your latency being printed every second or
         so. To stop pinging, just press "Ctl + C" again. This is a universal
         command to cancel an ongoing process, so remember it.
      2. That was a lot, so take a breather. Secondly, you're going to want to
         rank your mirrors. The software you'll be installing is hosted on a
         bunch of servers around the world, some of which are closer to you, and
         are subsequently much faster. You'll want to tell your system which
         ones to download from. This is done by downloading small amounts of
         junk data from each and seeing how fast it goes. Thankfully, there's a
         script to automate this process. I recommend "reflector", but there are
         others if you want to experiment. The following command will work for
         the majority of users, but I'll cover how to customize it in a moment:
         `reflector --latest 5 --sort rate --save /etc/pacman.d/mirrorlist`. All
         this does is tell the system to test downloads from the 5 most
         up-to-date mirrors it can find, and save them sorted by speed in a text
         file at the specified location. If you want to test more mirrors, you
         can, but 5 is usually enough to find the best one for you.
      3. One last optional step before we start the guided installer: enabling
         parallel downloads. Type into the terminal
         `sudo nano /etc/pacman.conf`. This will bring up the GNU nano text
         editor, which you can use to edit text files from terminal. Scroll down
         to the section marked "Misc options" and remove the # at the start of
         the line that says "ParallelDownloads". This will un-comment the line
         and make it so that you can download as many packages as specified at
         once. The default value of 5 works well for most users, but consider
         upping it if you have a wired connection. Also, this is just for fun,
         but if you want your progress bar to look like Pac-Man, add a new line
         at the end that says `ILoveCandy`. Hit Ctrl+O to save and Ctrl+X to
         exit.
4. ## ARCHINSTALL
   1. Alright, the hard part's out of the way, this is your victory lap. Once
      you've connected to the internet and ranked your mirrors, type
      `archinstall` and hit enter. You'll be taken to a TUI (text user
      interface) showing options for installing Arch Linux. Most of these
      options will be fine on their default settings, but I recommend turning
      "separate partition for /home" off. This creates separate partitions for
      system files and user files, but this isn't necessary for most users.
   2. Be sure to add a user and write down the password somewhere. Most of you
      probably didn't need that reminder, but past me sure did.
   3. Desktop Environment is the most important and open-ended option. You'll
      want to select the "Desktop" category, the others are for more specialized
      use cases. After that, you'll see a long list of options for desktop
      environments. I recommend taking a minute to look up all of them and pick
      whichever one you vibe with. If you need help narrowing it down, the most
      popular ones are [KDE](https://kde.org/), [GNOME](https://www.gnome.org/),
      and [XFCE](https://xfce.org/).
   4. One last thing! Under "additional repositories", check the one labeled
      "multilib". A ton of software packages live here, I don't know why it's
      not on by default.
   5. Congrats! You're done! Just hit "install" and wait for archinstall to
      download the desktop environment you picked. This should take around 15
      minutes on a good connection, so get comfy. After that, you can say no to
      the post-install chroot configuration, that's also above our pay grade.
      Just reboot and you should be able to log in with the account you
      specified earlier.
5. ## POST-INSTALL
   1. If you're ready to dive into settings and configure your new system, this
      is where you get off, but if not, there's a few post-install things I
      would recommend you do.
   2. [LINITE](https://jplsek.github.io/Linite/) is an install script generator
      that works with a bunch of Linux distros, including Arch! Just hit Arch
      Linux at the top, check all the software you want, copy the command at the
      bottom, and paste into your terminal with Ctrl+Shift+V. An example command
      would look something like this:
      `sudo pacman -Sy vim firefox make cmake git krita gimp inkscape blender libreoffice vlc audacity thunderbird steam wine zsh`
   3. You can make installing packages from AUR (Arch User Repository) a lot
      easier by installing yay (Yet Another Yogurt wrapper). First up, make sure
      you have the packages `base-devel` and `git` by executing
      `sudo pacman -S base-devel git` Then, clone the git repo for yay and
      switch to it with `git clone https://aur.archlinux.org/yay.git` and
      `cd yay` After that, you can build yay from source code with the command
      `makepkg -si` To check if it installed correctly, simply type `yay`. If it
      recognizes the command, you're good.
   4. Yay is a powerful CLI (Command Line Interface), but a GUI (Graphical User
      Interface) is a lot easier to use for most users. For this I recommend
      Octopi, which you can install with the command `yay -S octopi` This will
      take a while to build, but once it's done, you can browse packages from a
      list, and even sort them by criteria like votes and last updated.

That was a lot, huh? Hopefully now you see why Microsoft has such a stranglehold
on the desktop OS market. Turns out, computers are complicated! And Microsoft
has a lot of very smart people working to make sure you don't have to understand
computers in order to use one. Thankfully, with each passing year Linux gets
easier to install, so here's hoping the future of the personal computer platform
will be free as in freedom.
