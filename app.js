const config = require('./config');

// Mock JWT Secret
const jwtSecret = 'demoJwtSecretKey_!@#$%^&*()_+';

// Mock Private Key
const privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIIEogIBAAKCAQEAuDemoPrivateKey1234567890ExampleContent
-----END RSA PRIVATE KEY-----`;

// Mock OAuth Token
const oauthToken = 'oauth_token_abcdef1234567890ghijklmnop';

// Application code that uses the mock secrets
function authenticateUser(token) {
  // Authentication logic using jwtSecret
}

function connectToDatabase() {
  // Database connection logic using config.DB_USERNAME and config.DB_PASSWORD
}

function accessAWS() {
  // AWS SDK initialization using config.AWS_ACCESS_KEY_ID and config.AWS_SECRET_ACCESS_KEY
}

module.exports = {
  authenticateUser,
  connectToDatabase,
  accessAWS,
};
