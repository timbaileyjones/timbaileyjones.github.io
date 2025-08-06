+++
author = "Tim"
title = "More Details for my time at TSC"
date = "2020-01-01"
description = "More Details for my time at TSC"
featured = false
tags = [
    "resume-details"
]
categories = [
    "career"
]
+++

I worked at TSC from April 1992 to August 1995.  It was one of my first serious programming jobs.  TSC stood for Transportation Systems Consulting.

The owner of TSC was George D.S. Andrews, a very fine upper-crust British gentleman (in *every* sense of the word) who loved to fly, had a pilot license, and enjoyed a long career within British Airways, during his younger years.  He was a little boy during World War Two, and fell in love with aviation from childhood onward.  The British, of course, had been bombed mercilessly by Hitler's planes, so he got to experience the power of planes.  He eventually emigrated to Canada, then to the US. He settled in Palm Harbor, Florida and set up TSC, to share his passion for aviation, and aircraft maintenance with the entire world.  He was well into his sixties when I met him in 1992, when he hired me to help develop his software suite for the airlines, AMIS-2000.

There were two halves of TSC.

    * Presentations and seminars given to Aircraft Maintenance Management executives at airline conferences around the world.  The presentations were old-school negatives and transparency slides put down on light-based projectors, NOT on PCs running on PowerPoint.   

    * Development, support, and sales of AMIS-2000, an integrated suite of Unix terminal-based software to manage aircraft maintenance.  Obviously, this is the half of the business that I worked in, not the presentations.

The purpose of AMIS-2000 is to manage the costly downtime associated with aircraft maintenance, and to produce compliance documentation that satisfied requirements set forth by the FAA (American Federal Aviation Administration), and the CAA (Civil Aviation Administration, in the UK).  

The software itself was extremely portable C source code, that compiled and ran on Solaris, AT&T SysV systems, HP/UX, Apple UX, SCO Unix, UnixWare from Novell, Sequent/Dynix systems, and IBM AIX systems.   Being pre-Internet, we distributed the software on quarter-inch tape (QIC cartidges), in tar format (uncompressed).

The User Interface was terminal-based (using the curses library), requiring just 80x24 characters in a grid.   The "workstations" in the office were just text-based Serial port terminals with RS-232C serial ports, not PCs or Laptops. Most of them were [WYSE WY-60 terminals](https://terminals-wiki.org/wiki/index.php/Wyse_WY-60).  Each developer had two of them, one for running the program under development, and the other for editing the source code in vi.   These terminals were attached directly to the Sequent minicomputer in the back room, and we were all logged into it simultaneously during the workday.  When one of us started a compiler/link/build cycles, everyone else would feel it by way of sluggishness on the terminal.  Ah, the joys of a common time-shared Unix systems.   

## Source Code control

Being 1992, there was no `git`, or even `subversion`.  Our source code control was [SCCS](https://en.wikipedia.org/wiki/Source_Code_Control_System).  It kept version history on each source file individually, but had no concept of file renames, or that files are organized into files, or that certain files versions had to coexist with other files`` versions.  It was centralized by being resident on one chosen computer, and replicated to other systems by low-local file utilities like [rcp (remote copy)](https://en.wikipedia.org/wiki/Berkeley_r-commands) or [rsync](https://en.wikipedia.org/wiki/Rsync).   Truly stone knives and bear skins!

## Pre-Internet Unix communication

We could chat with each other using the [Unix `talk` program](https://linux.die.net/man/1/talk).  Email with the outside world was achieved with the a shared `uunet` account, using the very old `uucp` program, included with all Unix systems at the time.  Our email address were pre-domain , and were of [a format known today only as "bang-path" addresses](http://www.catb.org/jargon/html/B/bang-path.html)

My email address, for example was `...uunet!roscoe!tim`.  `uunet` was the name of the central server run by the company [UUNET](https://en.wikipedia.org/wiki/UUNET).  `roscoe` was the public name of TSC's `uunet` node, and `tim` was my login name on the `roscoe` node (a PC-AT 386 clone running SCO Unix).    My mentor Bill Davis was `...uunet!roscoe!bill`.`

## So what I did work on at TSC?

So the modules AMIS-2000 was composed of were:

  * Aircraft Maintenance Status and Performance
  * Planning and Control 
  * Rotables / Repairables / Tools Management
  * Strategic Documents Management
  * Material Controls and Inventory Management
  * Work Orders and Cost Control
  * Purchasing and Repairs Management
  * Personnel / Training / Tech Docs Management
  * Financial Management
  * Aircraft Operations and Management
  * Aircraft Maintenance Management & Maintenance Support

