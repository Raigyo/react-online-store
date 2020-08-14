module.exports = ({ env }) => ({
  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: env('<API_KEY>'),
    },
    settings: {
      defaultFrom: '<EMAIL>',
      defaultReplyTo: '<EMAIL>',
    },
  },
});