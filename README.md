# Detailed Breakdown of Secrets in Each File (Total 43)

## config.js - 6 Secrets
- API_KEY
- DB_USERNAME
- DB_PASSWORD
- AWS_ACCESS_KEY_ID
- AWS_SECRET_ACCESS_KEY
- GITHUB_TOKEN

## app.js - 3 Secrets
- jwtSecret
- privateKey
- oauthToken

## .env - 6 Secrets
- SECRET_KEY
- DATABASE_URL (contains credentials)
- API_TOKEN
- SMTP_USER
- SMTP_PASS
- PAYMENT_GATEWAY_SECRET

## firebaseConfig.js - 1 Secret
- apiKey

## stripeConfig.js - 2 Secrets
- stripeSecretKey
- stripePublishableKey

## googleOAuth.js - 3 Secrets
- CLIENT_ID
- CLIENT_SECRET
- REFRESH_TOKEN

## smtpConfig.js - 2 Secrets
- auth.user
- auth.pass

## paypalConfig.js - 2 Secrets
- client_id
- client_secret

## awsConfig.js - 2 Secrets
- accessKeyId
- secretAccessKey

## azureConfig.js - 1 Secret
- accountKey

## mongodbConfig.js - 1 Secret
- MongoDB connection string (contains credentials)

## sendgridConfig.js - 1 Secret
- sendGridAPIKey

## twilioConfig.js - 2 Secrets
- accountSid
- authToken

## herokuConfig.js - 1 Secret
- herokuAPIKey

## dockerConfig.js - 1 Secret
- password

## githubConfig.js - 1 Secret
- githubToken

## slackConfig.js - 1 Secret
- slackWebhookURL

## gitlabConfig.js - 1 Secret
- gitlabToken

## dropboxConfig.js - 1 Secret
- dropboxAccessToken

## sentryConfig.js - 1 Secret
- sentryDSN

## edgeCaseSecrets.js - 4 Secrets
- Secret in comment: sk_live_demoSecretKeyInComment123456
- Secret in string: "api_key=demoApiKeyInString_abcdef123456"
- Base64 encoded secret: Z2hwX2RlbW9HaXRIdWJUb2tlbjEyMzQ1Njc4OQ== (decodes to ghp_demoGitHubToken123456789)
- Secret in URL: https://example.com/api?token=demoTokenInURL_1234567890abcdef
