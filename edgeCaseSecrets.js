// This is a comment with a mock secret: sk_live_demoSecretKeyInComment123456

const someFunction = () => {
  const secretInString = "api_key=demoApiKeyInString_abcdef123456";
  console.log("Your API key is: " + secretInString);
};

// Mock secret in base64 encoding
const base64Secret = 'Z2hwX2RlbW9HaXRIdWJUb2tlbjEyMzQ1Njc4OQ=='; // Decodes to 'ghp_demoGitHubToken123456789'

// Mock URL with secret
const urlWithSecret = 'https://example.com/api?token=demoTokenInURL_1234567890abcdef';

module.exports = {
  someFunction,
  base64Secret,
  urlWithSecret,
};
