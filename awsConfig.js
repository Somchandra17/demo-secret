// Mock AWS Credentials
const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: 'AKIDEMOEXAMPLEACCESSKEY',
  secretAccessKey: 'demoSecretKey/EXAMPLEKEY1234567890',
  region: 'us-east-1',
});

module.exports = AWS;
