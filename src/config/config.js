const dotenv = require('dotenv');
const path = require('path');
const Joi = require('joi');

dotenv.config({ path: path.join(__dirname, '../../.env') });

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
    PORT: Joi.number().default(3000),
    MONGODB_URL: Joi.string().required().description('Mongo DB url'),
    JWT_SECRET: Joi.string().required().description('JWT secret key'),
    JWT_ACCESS_EXPIRATION_MINUTES: Joi.number().default(30).description('minutes after which access tokens expire'),
    JWT_REFRESH_EXPIRATION_DAYS: Joi.number().default(30).description('days after which refresh tokens expire'),
    JWT_RESET_PASSWORD_EXPIRATION_MINUTES: Joi.number()
      .default(10)
      .description('minutes after which reset password token expires'),
    JWT_VERIFY_EMAIL_EXPIRATION_MINUTES: Joi.number()
      .default(10)
      .description('minutes after which verify email token expires'),
    SMTP_HOST: Joi.string().description('server that will send the emails'),
    SMTP_PORT: Joi.number().description('port to connect to the email server'),
    SMTP_USERNAME: Joi.string().description('username for email server'),
    SMTP_PASSWORD: Joi.string().description('password for email server'),
    EMAIL_FROM: Joi.string().description('the from field in the emails sent by the app'),
    AWS_ACCESS_KEY_ID: Joi.string().required().description('AWS access key ID'),
    AWS_SECRET_ACCESS_KEY: Joi.string().required().description('AWS secret access key'),
    AWS_REGION: Joi.string().required().description('AWS region'),
    AWS_BUCKET_NAME: Joi.string().required().description('AWS bucket name'),
    AWS_BUCKET_EXPIRES: Joi.string().required().description('AWS bucket expires'),
    GOOGLE_CLIENT_ID: Joi.string().required().description('Google client ID'),
    GOOGLE_CLIENT_SECRET: Joi.string().required().description('Google client secret'),
    GOOGLE_CALLBACK_URL: Joi.string().required().description('Google callback URL'),
    LINKEDIN_CLIENT_ID: Joi.string().required().description('LinkedIn client ID'),
    LINKEDIN_CLIENT_SECRET: Joi.string().required().description('LinkedIn client secret'),
    LINKEDIN_CALLBACK_URL: Joi.string().required().description('LinkedIn callback URL'),
    TWITTER_CONSUMER_KEY: Joi.string().required().description('Twitter consumer key'),
    TWITTER_CONSUMER_SECRET: Joi.string().required().description('Twitter consumer secret'),
    TWITTER_CALLBACK_URL: Joi.string().required().description('Twitter callback URL'),
    EXPRESS_SESSION_SECRET: Joi.string().required().description('Express session secret'),
    EXPRESS_COOKIE_SECURE: Joi.boolean().required().description('Express cookie secure'),
    FRONTEND_URL: Joi.string().required().description('Frontend URL'),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  mongoose: {
    url: envVars.MONGODB_URL + (envVars.NODE_ENV === 'test' ? '-test' : ''),
    options: {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  jwt: {
    secret: envVars.JWT_SECRET,
    accessExpirationMinutes: envVars.JWT_ACCESS_EXPIRATION_MINUTES,
    refreshExpirationDays: envVars.JWT_REFRESH_EXPIRATION_DAYS,
    resetPasswordExpirationMinutes: envVars.JWT_RESET_PASSWORD_EXPIRATION_MINUTES,
    verifyEmailExpirationMinutes: envVars.JWT_VERIFY_EMAIL_EXPIRATION_MINUTES,
  },
  email: {
    smtp: {
      host: envVars.SMTP_HOST,
      port: envVars.SMTP_PORT,
      auth: {
        user: envVars.SMTP_USERNAME,
        pass: envVars.SMTP_PASSWORD,
      },
    },
    from: envVars.EMAIL_FROM,
  },
  aws: {
    accessKeyId: envVars.AWS_ACCESS_KEY_ID,
    secretAccessKey: envVars.AWS_SECRET_ACCESS_KEY,
    region: envVars.AWS_REGION,
    bucketName: envVars.AWS_BUCKET_NAME,
    bucketExpires: envVars.AWS_BUCKET_EXPIRES,
  },
  oauth: {
    google: {
      clientId: envVars.GOOGLE_CLIENT_ID,
      clientSecret: envVars.GOOGLE_CLIENT_SECRET,
      callbackUrl: envVars.GOOGLE_CALLBACK_URL,
    },
    linkedin: {
      clientId: envVars.LINKEDIN_CLIENT_ID,
      clientSecret: envVars.LINKEDIN_CLIENT_SECRET,
      callbackUrl: envVars.LINKEDIN_CALLBACK_URL,
    },
    twitter: {
      consumerKey: envVars.TWITTER_CONSUMER_KEY,
      consumerSecret: envVars.TWITTER_CONSUMER_SECRET,
      callbackUrl: envVars.TWITTER_CALLBACK_URL,
    }
  },
  express: {
    session_secret: envVars.EXPRESS_SESSION_SECRET,
    cookie_secure: envVars.EXPRESS_COOKIE_SECURE,
  },
  frontend: {
    url: envVars.FRONTEND_URL,
  }
};
