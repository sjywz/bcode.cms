'use strict';

/**
 * simulator router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::simulator.simulator');
