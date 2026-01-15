module.exports = [
  "strapi::logger",
  "strapi::errors",
  //'strapi::security',
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "default-src": ["'self'", "data:", "blob:"],

          // CKEditor CDN + event proxy (must include https://)
          "script-src": [
            "'self'",
            "https://cdn.ckeditor.com",
            "https://proxy-event.ckeditor.com",
          ],

          "connect-src": [
            "'self'",
            "https://proxy-event.ckeditor.com",
            // Optional (usually not required, but harmless):
            "https://cdn.ckeditor.com",
          ],

          "img-src": ["'self'", "data:", "blob:", "https://cdn.ckeditor.com"],
          "style-src": [
            "'self'",
            "'unsafe-inline'",
            "https://cdn.ckeditor.com",
          ],
          "font-src": ["'self'", "https://cdn.ckeditor.com"],

          // These also should include schemes to be safe
          "frame-src": [
            "'self'",
            "https://youtube.com",
            "https://www.youtube.com",
            "https://vimeo.com",
            "https://*.vimeo.com",
            "https://facebook.com",
            "https://www.facebook.com",
          ],

          // Recommended by Strapi examples when customizing CSP
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
