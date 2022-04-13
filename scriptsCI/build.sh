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

DEPLOY_SCRIPT="../../../scriptsCI/$DEPLOY_WORKFLOW.sh"

CHANGED_PACKAGE=$(lerna changed)

echo $CURRENT
echo $PACKAGE_VERSION
echo $PACKAGE_NAME
echo $CHANGED_PACKAGE

if [[ "$CHANGED_PACKAGE=" == *"$PACKAGE_NAME"* ]]; then
    echo "Package unchanged!"
fi


pwd
echo $DEPLOY_SCRIPT
bash $DEPLOY_SCRIPT $PACKAGE_NAME
