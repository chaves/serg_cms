'use strict';

/**
 * working-paper service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::working-paper.working-paper');
