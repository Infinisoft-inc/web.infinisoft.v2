#!/bin/sh
PACKAGE=$1
DOMAIN=micro.infini-soft.com
HOSTED_ZONE_ID=Z09384211HD8EXR97FFCJ

PACKAGE_NAME=$(cat package.json \
    | grep name \
    | head -1 \
    | awk -F: '{ print $2 }' \
    | sed 's/[",]//g' \
| sed  's/ *//g')
APP_NAME=$(cat package.json \
    | grep name \
    | head -1 \
    | awk -F: '{ print $2 }' \
    | sed 's/[",]//g' \
    | sed  's/ *//g' \
| sed  's/@infini-soft\///g')
BUCKET_NAME="$APP_NAME.$DOMAIN"
BUCKETLIST=$(aws s3api list-buckets)
DIRECTORY=`dirname $0`

echo $DIRECTORY
echo $BUCKETLIST
echo $BUCKET_NAME

if [[ "$BUCKETLIST" != *"$BUCKET_NAME"* ]]; then
    echo "Bucket Not found for $BUCKET_NAME"
    echo "Bootstrapping..."
    
    cat $DIRECTORY/templates/cname.json \
    | sed "s/MICRO_APP_NAME/$APP_NAME/g" \
    | sed "s/MICRO_DOMAIN/$DOMAIN/g"  > .tmp.cname.json
    
    echo "Before creating bucket $BUCKET_NAME"
    aws s3api create-bucket --bucket $BUCKET_NAME --region us-east-1 --acl public-read
    echo "Before configuring bucket with static hosting"
    aws s3 website s3://$BUCKET_NAME/ --index-document index.html
    echo "Before creating CNAME"
    cat .tmp.cname.json
    aws route53 change-resource-record-sets --hosted-zone-id $HOSTED_ZONE_ID --change-batch file://.tmp.cname.json
    rm .tmp.cname.json
    echo "After route 53 and rm .tmp.cname.json"
fi
pwd
ls
# aws s3 sync build s3://$BUCKET_NAME/ --acl public-read

