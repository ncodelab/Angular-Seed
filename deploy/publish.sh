#!/usr/bin/env bash

# artifact version
VERSION=`node -e 'console.log(require("./package.json").version);'`
# artifact name
CLIENT_NAME=`node -e 'console.log(require("./package.json").name);'`
# where to look for build results
BUILD_FOLDER="public"

# Prepare your variables

# build a package
npm run testOnce && npm run prod

# if build was successful
if [ $? == 0 ]; then
  echo "Doing stuff..."

  # Deploy here

  echo "Done"
fi
