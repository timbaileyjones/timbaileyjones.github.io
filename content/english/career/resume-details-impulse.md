+++
author = "Tim"
title = "More Details for my time at Impulse Point"
date = "2020-01-01"
description = "More Details for my time at Impulse Point"
featured = false
tags = [
    "resume-details"
]
categories = [
    "career"
]
+++

I worked at Impulse Point from August 2016 to March 2017.

This was a really cool company.  The first day was like this:
```
 "Here's a Dell workstation with 16G and 1 TB drive. Configure it any way you want."
```

A Linux-geek's DREAM!   

An hour later, I had Kubuntu Linux installed, with all the development tools running, and the company's [SafeConnect](https://impulse.com/wp-content/uploads/2017/03/SafeConnect-for-Dell-10062017.pdf) repositories cloned, and building locally.

## Frontend / Backend Technologies

SafeConnect's newest GUI generation was written in Angular 1.x (which is not the modern TypeScript-based Angular we have today)   I already knew Angular from a VisProactive GUI proof-of-concept I had done for Syniverse.  The backend was a standard Java/WAR file deployed on plain old Tomcat (the one packaged with RHEL 7).  

## Source Code Management and Build Processes

The release process was pretty straightforward.  They used an internally-managed Bamboo server to run the build. The Bamboo pipeline build the code and packaged it into RPM files.  Those RPM were hosted on a public-facing RPM repo server.

Impulse's code was in SVN (Subversion) at the time I joined in 2016.  They wanted to move to `git`, and use hosted Atlassian Bitbucket.  I had done some svn->git repositories at Syniverse, so it made sense for one of my first tasks to be converting their 130-or-so repos from Subversion to Git.   I achieved it with a bash script that took each repos through all the steps.  

Therefore, client sites running the SafeConnect 1U rackmount server could be easily updated with a standard Linux `yum upgrade` command.`

Thankfully, that is the last time I had to work with Subversion.  Not only is Git a better SCM solution than Subversion, but the real win was being able to use the git-based tools produced by pretty much every other tool out there.   Nobody talks about Mercurial (hg) anymore.






















