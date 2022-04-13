#!/usr/bin/env node

const conf = require("./dist.json");
const { writeFileSync } = require("fs");
const APPNAME = process.argv[2]
const DOMAIN = "micro.infini-soft.com"
const AWSORIGIN = `${APPNAME}.${DOMAIN}.s3.us-east-1.amazonaws.com`
const APPFQDN = `${APPNAME}.${DOMAIN}`
console.log(`SHE BANG`);
console.log(conf);

conf.Distribution.DistributionConfig.Aliases.Items.push(APPFQDN)

conf.Distribution.DistributionConfig.Origins.Items.push({
  Id: AWSORIGIN,
  DomainName: AWSORIGIN,
  OriginPath: "",
  CustomHeaders: {
    Quantity: 0
  },
  S3OriginConfig: {
    OriginAccessIdentity: ""
  },
  ConnectionAttempts: 3,
  ConnectionTimeout: 10,
  OriginShield: {
    Enabled: false
  }
});

conf.Distribution.DistributionConfig.CacheBehaviors.Items.push({
  PathPattern: "*",
  TargetOriginId: AWSORIGIN,
  TrustedSigners: {
    Enabled: false,
    Quantity: 0
  },
  TrustedKeyGroups: {
    Enabled: false,
    Quantity: 0
  },
  ViewerProtocolPolicy: "redirect-to-https",
  AllowedMethods: {
    Quantity: 2,
    Items: ["HEAD", "GET"],
    CachedMethods: {
      Quantity: 2,
      Items: ["HEAD", "GET"]
    }
  },
  SmoothStreaming: false,
  Compress: true,
  LambdaFunctionAssociations: {
    Quantity: 0
  },
  FunctionAssociations: {
    Quantity: 0
  },
  FieldLevelEncryptionId: "",
  CachePolicyId: "658327ea-f89d-4fab-a63d-7e88639e58f6"
});

conf.Distribution.AliasICPRecordals.push(            {
    "CNAME": APPFQDN,
    "ICPRecordalStatus": "APPROVED"
})

writeFileSync("resolved.dist.json", JSON.stringify(conf));
