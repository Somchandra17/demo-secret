// Mock SMTP Credentials
const smtpConfig = {
  host: 'smtp.demoemail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'demo_email_user',
    pass: 'demo_email_pass_!@#$%',
  },
};

module.exports = smtpConfig;
