#!/bin/bash -x -e -u -o pipefail
rm -f ./.hugo_build.lock
#docker run --rm --name bailey-jones.com \
#  -v ${PWD}:/src \
#  -v ${HOME}/.hugo_cache:/tmp/hugo_cache \
#  hugomods/hugo:exts-non-root \
#  build -b https://bailey-jones.com  --noBuildLock
  

hugo -b https://bailey-jones.com  --noBuildLock
cp ~/symlink-resume-2026/Tim-Bailey-Jones-Resume-February-2026.pdf public/
gcloud storage rsync public/. gs://bailey-jones.com --recursive
gcloud compute url-maps invalidate-cdn-cache website-url-map --global --path=/*  # --async 
