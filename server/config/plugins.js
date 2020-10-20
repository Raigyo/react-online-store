module.exports = ({ env }) => ({
  // ...
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: env('CLOUDINARY_NAME'),
      api_key: env('CLOUDINARY_KEY'),
      api_secret: env('CLOUDINARY_SECRET'),
    },
  },
  // ...
  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: env('SENDGRID_KEY'),
    },
    settings: {
      defaultFrom: 'vincent.chilot@gmail.com',
      defaultReplyTo: 'vincent.chilot@gmail.com',
    },
  },
  // ...
});
