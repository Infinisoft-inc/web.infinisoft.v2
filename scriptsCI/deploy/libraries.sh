#!/bin/sh
PACKAGE=$1

if [["$PACKAGE" == ""]]; then
    echo Aborting Deployment for an unknown package
fi

CHANGED_PACKAGE=$(lerna changed)

if [[ "$CHANGED_PACKAGE" == *"$PACKAGE"* ]]; then
    echo  "---------->    Deploying $PACKAGE"
fi