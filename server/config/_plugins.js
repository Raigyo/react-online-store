module.exports = ({ env }) => ({
  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: env('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'),
    },
    settings: {
      defaultFrom: 'vincent_chilot@live.be',
      defaultReplyTo: 'vincent_chilot@live.be',
    },
  },
});