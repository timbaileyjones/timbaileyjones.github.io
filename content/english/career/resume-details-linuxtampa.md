+++
author = "Tim"
title = "More Details for my time at LinuxTampa"
date = "2020-01-01"
description = "More Details for my time at LinuxTampa"
featured = false
tags = [
    "resume-details"
]
categories = [
    "career"
]
+++

I was self-employed at LinuxTampa for 18 months.


Thank you for your interest in my work history.  If you're seeing this message, it just means I have not completed this article yet.  Please check back later.


<!-- 
# Original resumé section for Syniverse 
Technical lead for Syniverse Consumer Insights (SCI)



SCI was a new business area for Syniverse. It enabled non-telecom clients (such as banks) to

reach their own customers via their Android and iOS handsets based on detailed (yet

anonymized) consumer propensity/preference models, delivering targeted offers/coupons to

consumers when they are in the stores they are valid in. Team size: 5 developers.



General responsibilities:

• Development of Admin GUI – (AngularJS/HTML5, ui-router, bootstrap, NodeJS)

• Subversion (svn) administration – repository, branch & tag management

• Automated builds, covering UI (gulp), backend (Maven), Hadoop/Hive/Impala/Oozie

scripts, and both the handset builds (iOS and Android).

• Automated deploys, via Ansible (includes all the above except the handset codebase)

__________________________________________



Technical Lead for VisProactive (VPA) dev. team



Frontend achievements:

Created a custom jQuery webapp (JobMonitorWebServer) to allow processing threads to
be stopped/started individually, have the logging levels of threads changed in real-time,

and to monitor the log files in real-time (“tail -f” functionality) all from the browser.

Led proof-of-concept/demo efforts that led to company-wide migration of legacy Flex and
Oracle ADF apps to Google's AngularJS framework. 



Backend achievements:

Rewrote legacy data loader suffering from significant per-file setup delays to take
advantage of Vertica database's streaming bulk loader API, winning a 20x improvement

in performance by eliminating the latency associated with each input file. The new

loader also has the advantage of being thread-safe, and I tripled the performance further

by running three instances of it in parallel threads. It handles just over a billion rows per

day, with room to grow further, likely beyond two billion rows/day

Ported legacy Flex/BlazeDS data access API to modern REST/JSON services implemented
as Java servlets running under Jetty & Weblogic.

Re-factored existing system of hundreds of largely single-threaded JVMs into a dozen or
so multi-threaded JVMs to decrease memory footprint, CPU usage, and database

connections.

Added failover logic to multithreaded Java-based FTP/SFTP client responsible for
distributing terabytes of cellular messaging data in real-time, 24x7. I implemented the

conditions for declaring a failover event in Rhino (Server-side JS), so that the logic and

threshold values could be modified in real-time without a costly restart operation.

Performed advanced SQL tuning of large summarization queries, including techniques
which override the cost-based optimizer, therefore eliminating the need to run “UPDATE

STATISTICS” statements periodically, and in turn, decreasing maintenance windows.

__________________________________________



Core member of VisProactive development team (VPA)

Led team through pilot SCM migration from Telelogic Synergy to Subversion 1.6. Based on our successful experience, all products under active development within Syniverse were migrated to Subversion server (with WANDisco plugins).
Served as Subversion administrator: created/merged/deleted all branches as multiple development releases begin and complete.
Developed "vpacommons" library which provides common application services. Included Database access API which chooses an appropriate JDBC connection to use from among ~20-25 credentials. It also logs all timing/performance activity to a table for later analysis.
Vpacommons self-diagnoses a variety of performance and usage problems (unclosed connections, statements, & result sets).
Generalized access to Redis and Memcached servers.
Implemented, maintained & extended continuous-integration build infrastructure based on Linux, Hudson/Jenkins, JUnit/FlexUnit and Subversion. 
Implemented load-balancing functionality to backend Vertica databases using open-source Octopus-LB program.
Implemented process monitor for all feeds using open-source SupervisorD.org program
Designed & Implemented a real-time MDR CE (Mobile Data Roam Correlation Engine) in C++, to match RADIUS messages in memory by session_id and thread_id and output them in a streaming fashion to Vertica database loader.
Converted two Visproactive releases (Uniroam & SS7GSM) from Oracle to Vertica 5.0.8.
Participated in Vertica migrations from 5.0.8, to 5.1, and again to 6.1.
Led team through Java 1.6->1.7 migration, and from Subversion 1.6, to 1.7, and to 1.8.
Profiled, Monitored & Tuned dev/test/prod systems with hundreds of JVMs to manage network connections, memory usage, and to minimize GC activity.
Served as dev-group sysadmin, advanced Linux/Java/C/Python tutor, and top troubleshooter in dev/test/prod environments.
__________________________________



Sr. Systems Engineer, assigned to various product teams between 2001-2010.

Coded new features for several web-based and system applications that Syniverse hosts for the telecom industry, including STARS (Streamliner Terminal Access Reporting System), CNAM-LIDB (Calling Name & Line Information Database), MDR (Mobile Data Roaming) & AAA Broker (Authentication, Authorization & Accounting). 
These applications were all in the Solaris and Linux environments, using Java/J2EE app servers and Oracle databases (9, 10, 11, including the OLAP add-on). They were mostly reporting, data-editing and data-mining applications. 
For the data visualization products called VisWise, VisWise GSM, PanWise and UniWise, I wrote most of the high-volume Oracle data loaders (C++).
For a large in-carrier DHCP deployment within MDR, I wrote a load-testing tool that simulates thousands of DHCP sessions in a single process (plain old C).
For the Streamliner system, I wrote a piece of much-needed middleware (also in C) for the Tandem/Guardian mainframe that permits network access to SQL/MP (Tandem database).
For the MDR System, I re-implemented a slow Oracle/SQL lookup function to an IPC-message-based server process in C++ that held all data in memory, and was able to service thousands of requests per second.
In 2008 and 2009, I worked with small exploratory group that evaluated automated unit testing libraries to use in all of our products, along with Web-based automated testing through Selenium, and code coverage tools and reports. -->
