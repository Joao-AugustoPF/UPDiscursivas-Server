module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', process.env.EMAIL_SMTP_HOST),
        port: env('SMTP_PORT', process.env.EMAIL_SMTP_PORT),
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: 'hello@example.com',
        defaultReplyTo: 'hello@example.com',
      },
    },
  },
  upload: {
    config: {
      provider: 'aws-s3', // For community providers pass the full package name (e.g. provider: 'strapi-provider-upload-google-cloud-storage')
      providerOptions: {
        accessKeyId: env(process.env.ACCESS_AWS),
        secretAccessKey: env(process.env.ACCESS_AWS_SECRET),
        region: env(process.env.AWS_REGION),
        params: {
          Bucket: env(process.env.AWS_BUCKET),
        },
      },
    },
  },
  // ...
});
