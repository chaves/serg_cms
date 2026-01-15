"use strict";

module.exports = () => {
  return async (ctx, next) => {
    await next();

    // Helps YouTube embeds avoid Error 153
    ctx.set("Referrer-Policy", "strict-origin-when-cross-origin");
  };
};
