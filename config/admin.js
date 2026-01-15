module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET"),

    // Recommended (Strapi 5+): configure admin sessions instead of auth.options.expiresIn
    // Values are in seconds.
    sessions: {
      // How long an access token is valid
      accessTokenLifespan: 60 * 30, // 30 minutes

      // Absolute maximum lifetime of the refresh token
      maxRefreshTokenLifespan: 60 * 60 * 24 * 30, // 30 days

      // Absolute maximum lifetime of the session
      maxSessionLifespan: 60 * 60 * 24 * 30, // 30 days

      // Optional idle timeouts (uncomment if you want stricter security)
      // idleRefreshTokenLifespan: 60 * 60 * 24 * 7, // 7 days
      // idleSessionLifespan: 60 * 60, // 1 hour
    },
  },

  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },

  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT"),
    },
  },

  flags: {
    nps: env.bool("FLAG_NPS", true),
    promoteEE: env.bool("FLAG_PROMOTE_EE", true),
  },
});
