const { S3Client, getSignedUrl } = require("@aws-sdk/client-s3");
const { S3_BUCKET, S3_READ_ONLY_KEY } = process.env;

async function readUrl(req, res, next) {
  const params = { Bucket: S3_BUCKET, Key: S3_READ_ONLY_KEY, Expires: 60 };
  const url = S3Client.getSignedUrl("getObject", params);
  console.log("The URL is: ", url);
}

module.exports = {
  readUrl,
};
