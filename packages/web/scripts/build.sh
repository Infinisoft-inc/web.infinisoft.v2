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

TAGS=$(lerna changed)

# CURRENT="web@0.1.10"

echo $CURRENT
echo $PACKAGE_VERSION
echo $PACKAGE_NAME
echo $TAGS
echo $CHANGED
lerna changed

if [[ "$TAGS" != *"$PACKAGE_NAME"* ]]; then
    echo "Package unchanged!"
fi