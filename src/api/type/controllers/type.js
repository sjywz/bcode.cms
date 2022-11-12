'use strict';
const { removeTime, removeAttrsAndId } = require("../../../utils/index.js");

/**
 * type controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController(
  'api::type.type',
  ({ }) => ({
    async find(ctx) {
      const { data, meta } = await super.find(ctx);
      return { data: removeAttrsAndId(removeTime(data)), meta };
    }
  })
);
