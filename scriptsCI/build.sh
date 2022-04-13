#!/bin/sh

PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | sed  's/ *//g')
PACKAGE_NAME=$(cat package.json \
  | grep name \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | sed  's/ *//g')

# Parse and returns the packages subfolder
DEPLOY_WORKFLOW=$(pwd | sed 's/.*packages//g' | awk -F/ '{ print $2 }')
DEPLOY_SCRIPT="../../../scriptsCI/deploy/$DEPLOY_WORKFLOW.sh"
BUILD_SCRIPT="../../../scriptsCI/build/$DEPLOY_WORKFLOW.sh"
CHANGED_PACKAGE=$(lerna changed)

if [[ "$CHANGED_PACKAGE=" == *"$PACKAGE_NAME"* ]]; then
    echo "Build $PACKAGE_NAME"
    yarn build
    echo "Deploy $PACKAGE_NAME"
    bash $DEPLOY_SCRIPT $PACKAGE_NAME
fi

