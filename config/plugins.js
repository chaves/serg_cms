// config/plugins.js
module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'nodemailer', // For example, using Nodemailer as the provider
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.example.com'),
        port: env('SMTP_PORT', 587),
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
      },
      settings: {
        defaultFrom: 'bruno@chaves.fr',
        defaultReplyTo: 'bruno@chaves.fr',
      },
    },
  },
});
