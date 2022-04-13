#!/bin/sh

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
| sed  's/@infini-soft//g')
BUCKET_NAME="$APP_NAME.$DOMAIN"
BUCKETLIST=$(aws s3api list-buckets)
DIRECTORY=`dirname $0`

echo $DIRECTORY
echo $BUCKETLIST
echo $BUCKET_NAME

if [[ "$BUCKETLIST" == *"$BUCKET_NAME"* ]]; then
    echo "Existing Bucket!"
else
    echo "Bucket Not found!"
    
    cat $DIRECTORY/templates/cname.json \
    | sed "s/MICRO_APP_NAME/$APP_NAME/g" \
    | sed "s/MICRO_DOMAIN/$DOMAIN/g"  > .tmp.cname.json
    
    aws s3api create-bucket --bucket $BUCKET_NAME --region us-east-1 --acl public-read
    aws s3 website s3://$BUCKET_NAME/ --index-document index.html
    aws route53 change-resource-record-sets --hosted-zone-id $HOSTED_ZONE_ID --change-batch file://.tmp.cname.json
    rm .tmp.cname.json
    
fi

aws s3 sync build s3://$BUCKET_NAME/