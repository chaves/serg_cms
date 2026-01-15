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
      // ✅ Add this (fixes YouTube error 153 in many setups)
      referrerPolicy: {
        policy: "strict-origin-when-cross-origin",
      },

      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "default-src": ["'self'", "data:", "blob:"],

          "script-src": [
            "'self'",
            "https://cdn.ckeditor.com",
            "https://proxy-event.ckeditor.com",
          ],
          "connect-src": [
            "'self'",
            "https://proxy-event.ckeditor.com",
            "https://cdn.ckeditor.com",
          ],
          "img-src": ["'self'", "data:", "blob:", "https://cdn.ckeditor.com"],
          "style-src": [
            "'self'",
            "'unsafe-inline'",
            "https://cdn.ckeditor.com",
          ],
          "font-src": ["'self'", "https://cdn.ckeditor.com"],

          // ✅ Add youtube-nocookie (often used by embeds)
          "frame-src": [
            "'self'",
            "https://www.youtube.com",
            "https://youtube.com",
            "https://www.youtube-nocookie.com",
            "https://vimeo.com",
            "https://*.vimeo.com",
            "https://facebook.com",
            "https://www.facebook.com",
          ],

          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
