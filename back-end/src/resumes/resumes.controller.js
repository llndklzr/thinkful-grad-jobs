const AWS = require("aws-sdk");
const { S3_BUCKET, accessKeyId, secretAccessKey } = process.env;

const s3 = new AWS.S3({
  accessKeyId,
  secretAccessKey,
  Bucket: S3_BUCKET,
  region: "us-west-2",
});

//! <<------- CRUD ------->>

// GET /resumes/upload
const readUploadUrl = async () => {
  const params = {
    Bucket: S3_BUCKET,
    Key: "uploadResume.pdf",
    Expires: 60 * 5,
  };

  try {
    const url = await new Promise((resolve, reject) => {
      s3.getSignedUrl("putObject", params, (err, url) => {
        err ? reject(err) : resolve(url);
      });
    });
    console.log(url);
  } catch (err) {
    if (err) {
      console.log(err);
    }
  }
};

// GET /resumes
const readDownloadUrl = async () => {
  const params = {
    Bucket: S3_BUCKET,
    Key: "dummy-resume.pdf",
    Expires: 60 * 5,
  };

  try {
    const url = await new Promise((resolve, reject) => {
      s3.getSignedUrl("getObject", params, (err, url) => {
        err ? reject(err) : resolve(url);
      });
    });
    console.log(url);
  } catch (err) {
    if (err) {
      console.log(err);
    }
  }
};

module.exports = {
  readUploadUrl,
  readDownloadUrl,
};
