+++
author = "Tim"
title = "More Details for my time at CandidPartners"
date = "2020-01-01"
description = "More Details for my time at CandidPartners"
featured = false
tags = [
    "resume-details"
]
categories = [
    "career"
]
+++

I worked at CandidPartners from May 2020 to December 2020.  On January 1st, 2021, McKinsey bought CandidPartners, and for the first year (all of 2021), 

# Client Team background

At CandidPartners, I settled into an existing DevOps team at Repay.com, a large credit card processing company.  It is a "true" DevOps team, meaning they did all the code development, all the automated testing, ran their own Jenkins instance, and ultimately, their deployments to AWS.

## Compute Platform
Their platform was C# on .NET, but not ".NET Core".  This meant their deployments were to Windows EC2 instances, managed by an Autoscaling Group (ASG), which meant they could scale up and down as needed, without manual intervention.

## Database Platform

The databases were MSSQL servers, managed by AWS RDS.  There was a cluster in each of two US regions, but data synchronization was not native MSSQL replication.  Inter-region replication is handled by a custom TypeScript application that someone else at Candid had written.  I made no significant changes to it.

## Frontend platform 

This client used Cloudfront in a several very innovate ways;

### Edge Lambdas to handle cross-region failover and load balancing across regions

Their HTML/CSS/JS static content was handled by Cloudfront, with Edge Lambdas in place to handle cross-region failover, which was pretty robust, but it didn't NEED to fail over very often.  

In 2020, Cloudfront released [a new feature where the backends could get the client's GPS location added to each request via HTTP Headers](https://aws.amazon.com/about-aws/whats-new/2020/07/cloudfront-geolocation-headers/) .

I modified the Edge Lambdas to leverage this new location information from the client terminals, using the Longitude value to force each client to either `us-east-1` or `us-west-2`, depending on their location within the US.  I created an SSM Parameter called "US-Meridian", and logic inside the Edge Lambda was essentially:

```node
    region = 'us-east-1'
    if (longitude < us_meridian) {
        region = 'us-west-2'
    }
    return region
```

An odd detail was that even though it was certain that each individual client's physical location (all retail stores, not individuals) was definitely within the continental US, there were occasional requests that would come in with an incorrect European or Asian longitude because CloudFront being a resilient and global network.   We still allowed the logic to push those odd requests to east or west, because the application was still able to deal with it correctly.  The feature still resulted in a better balancing between regions that what we had before.

This improved and more-deterministic load balancing also helped to minimize occasional problems that happened when the inter-regional replication was behind or down.

## Batch-Encrypting CC transactions via AWS Lambda

Another task I was assigned was build a highly parallelized AWS lambda function to encrypt recently-cleared CC transactions as a background task.  I took advantage of the fact that Lambda executions CAN last as long as 15 minutes, and wrote it so that one invocation would encrypt thousands of transactions during one run, while monitoring its own execution time, and then do a DB-commit/close when the current execution got to the 14.5 minute mark.  

Looking back, I would call that "abusing AWS Lambda to do batch processing", because the AWS Lambda tutorials almost always revolve around one record/request at a time.  

# ELMA (Enterprise Logging Metrics and Analytics)

When I served the Federal Reverse Bank during my CandidParters.com time, we built a neat serverless log ingestion product called ELMA (Enterprise Logging Metrics and Analysis) to normalize about 20 different kind of logs.  The logs were ingested by some preprocessing lambdas, and written to an Amazon Kinesis stream, with an AWS Kinesis firehose object writing data into an *AWS Glue* database (which is really S3 underneath).  The we used AWS QuickSite to give all users the ability query all log types as if they were in a giant SQL table.


<!-- 
<hr/>

A second interesting task I was assigned was the programmatic upgrades of MSSQL instances managed by RDS.

RDS likes to bill itself as "everything is automatically managed", but there are a few upgrade paths that it doesn't support at all, and of course, we found out "The Hard Way".

I implemented a python script to do this.  Ultimately, it executed as an additional step in the Jenkins pipeline file.

 -->



