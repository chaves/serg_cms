// config/app.js
module.exports = ({ env }) => ({
  keys: env.array("APP_KEYS"),
});
