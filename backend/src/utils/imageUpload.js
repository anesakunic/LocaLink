// utils/imageUpload.js
const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID, // Add your access key
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, // Add your secret key
    region: process.env.AWS_REGION // Add your region
});

const uploadImageToStorage = async (file) => {
    const fileName = `${uuidv4()}-${file.originalname}`;
    const params = {
        Bucket: process.env.AWS_S3_BUCKET_NAME, // Your bucket name
        Key: fileName,
        Body: file.buffer,
        ContentType: file.mimetype,
        ACL: 'public-read'
    };

    const uploadResult = await s3.upload(params).promise();
    return uploadResult.Location; // Return the URL of the uploaded image
};

module.exports = { uploadImageToStorage };
