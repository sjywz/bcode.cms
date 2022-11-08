'use strict';

/**
 * simulator service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::simulator.simulator');
