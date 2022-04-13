#!/bin/sh
PACKAGE=$1

if [["$PACKAGE" == ""]]; then
    echo Aborting Deployment for an unknown package
fi

echo  "---------->    Deploying micro-app $PACKAGE"
