+++
author = "Tim"
title = "More Details for my time at McKinsey"
date = "2020-01-01"
description = "More Details for my time at McKinsey"
featured = false
tags = [
    "resume-details"
]
categories = [
    "career"
]
+++

I worked at McKinsey for a total of 3 years, all of 2021, 2022, 2023, and January/February 2024.

# Matter Foundations

By far, my best experience at McKinsey was working with their Matter Foundations product (MF)!  

The best analogy I have for explaining MF involves residential homes in suburban subdivisions.

> To build a new neighborhood, a builder buys several hundreds acres of unimproved land.  Before a single house can be build (an application), they have to name the subdivision, decide on a fancy entryway and water fountain, the layout of the roads, sidewalks, sewers, community clubhouse/pool/parks, and get the electric company to put in power poles, transformers and maybe a new electric substation.  Only THEN can you start building the homes.

McKinsey's Cloud Transformation engagements ("studies" in McK-speak) have a similar requirements.  In the past, folks used to lovingly handcraft custom cloud foundations according to local preferences, taking weeks and months before an application work can happen (whether lift-and-shift or greenfield development).

Matter Foundations (MF) is a cloud-enablement software product codifies the very best of many recent McKinsey studies.  It does the cloud equivalent of "building the subdivision.", and MF versions are available for all three major clouds: AWS, GCP and Azure.   It also helps enforce a common vocabulary across each cloud.  

> Example: In AWS, every resource belongs to an AWS Account.  In Azure, the equivelent term is "Subscription".  For GCP, it is "Project".

MF uses each cloud native services where appropriate, and provides a non-native implementation for cloud that are lacking a service that another cloud provides.

> Example: AWS has a great new feature to management IP addresses across accounts.  It is called [AWS IPAM](https://docs.aws.amazon.com/vpc/latest/ipam/what-it-is-ipam.html).   Azure and GCP don't have one, so the Azure and GCP editions of MF provide an IPAM-type of service, but built around an open-source product that does the same task.

<!-- Most of my tasks on MF were related adding automated End-to-End (E2E) tests to Matter Foundations.  This allowed the team to catch breaking -->
