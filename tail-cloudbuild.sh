#!/bin/bash

ID=$(gcloud builds list | head -2 | tail -1 | awk '{ print $1 }')
gcloud builds log ${ID} --stream
gcloud compute url-maps invalidate-cdn-cache website-url-map --global --path='/*'
