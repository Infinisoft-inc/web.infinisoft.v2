aws s3api delete-bucket --bucket tets.test.com --region us-east-1



aws s3api create-bucket --bucket callback.micro.infini-soft.com --region us-east-1 --acl public-read
aws s3 website s3://callback.micro.infini-soft.com/ --index-document index.html



aws route53 change-resource-record-sets --hosted-zone-id Z09384211HD8EXR97FFCJ --change-batch file://cname.json

aws s3api put-object-acl --bucket $BUCKET_NAME --acl public-read --key /
aws s3api put-object-acl --bucket web.micro.infini-soft.com --acl public-read --key /