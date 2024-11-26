module.exports = [
  'strapi::logger',
  'strapi::errors',
  //'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "default-src": ["'self'", "data:", "blob:"],
          "script-src": ["'self'", "cdn.ckeditor.com"],
          "connect-src": ["'self'", "cdn.ckeditor.com"],
          "img-src": ["'self'", "data:", "blob:", "cdn.ckeditor.com"],
          "style-src": ["'self'", "'unsafe-inline'", "cdn.ckeditor.com"],
          "font-src": ["'self'", "cdn.ckeditor.com"],
        },
      },
    },
  },
];
