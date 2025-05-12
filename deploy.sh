#!/bin/bash -x -e -u -o pipefail
rm -f ./.hugo_build.lock
cp ~/symlink-resume-2025/Tim-Bailey-Jones-Resume-*.pdf static/
docker run -v ${PWD}:/src hugomods/hugo hugo  -b https://bailey-jones.com --ignoreCache
gcloud storage rsync public/. gs://bailey-jones.com --recursive
gcloud compute url-maps invalidate-cdn-cache website-url-map --global --path=/*  # --async 
