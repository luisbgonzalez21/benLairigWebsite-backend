'use strict';

/**
 * trip-guide service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::trip-guide.trip-guide');
