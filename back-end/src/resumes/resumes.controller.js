const AWS = require("aws-sdk");
const { S3_BUCKET, accessKeyId, secretAccessKey } = process.env;

const s3 = new AWS.S3({
  accessKeyId,
  secretAccessKey,
  Bucket: S3_BUCKET,
  region: "us-west-2",
});

//! <<------- CRUD ------->>

// GET /resumes
const readUrl = async (req, res) => {
  const { filename, awsMethod } = req.query;

  const params = {
    Bucket: S3_BUCKET,
    Key: filename,
    Expires: 60 * 5,
  };

  try {
    const url = await new Promise((resolve, reject) => {
      s3.getSignedUrl(awsMethod, params, (err, url) => {
        err ? reject(err) : resolve(url);
      });
    });
    console.log(url);
    res.status(200).json({ data: { url } });
  } catch (err) {
    res.status(404).json({ error: err });
  }
};

module.exports = {
  readUrl,
};
