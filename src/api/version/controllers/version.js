'use strict';
const { removeTime, removeAttrsAndId } = require("../../../utils/index.js");

/**
 * version controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController(
  'api::version.version',
  ({ }) => ({
    async find(ctx) {
      const { data, meta } = await super.find(ctx);
      return { data: removeAttrsAndId(removeTime(data)), meta };
    }
  })
);
