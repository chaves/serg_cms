'use strict';

/**
 * cemsi service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cemsi.cemsi');
