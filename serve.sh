#!/bin/bash
#docker run -p 1314:1314 \
#  -v ${PWD}:/src \
#  hugomods/hugo \
#  hugo server --bind 0.0.0.0 --port 1313 --disableFastRender --noHTTPCache --ignoreCache --cleanDestinationDir 


cp ~/symlink-resume-2025/Tim-Bailey-Jones-Resume-*.pdf public/
hugo server --bind 0.0.0.0 --port 1313 --disableFastRender --noHTTPCache --ignoreCache # --cleanDestinationDir 

