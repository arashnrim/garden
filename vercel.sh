#!/bin/bash

if [[ $VERCEL_GIT_COMMIT_REF == "v5" ]]; then
  npm run build:v5
else
  npm run build:main
fi