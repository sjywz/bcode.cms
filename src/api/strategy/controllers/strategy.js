'use strict';
const { removeTime, removeAttrsAndId } = require("../../../utils/index.js");

/**
 * strategy controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController(
  'api::strategy.strategy',
  ({ }) => ({
    async find(ctx) {
      const { data, meta } = await super.find(ctx);
      return { data: removeAttrsAndId(removeTime(data)), meta };
    },
    async findOne(ctx) {
      const { ...params } = ctx.query;
      ctx.query = {
        ...params,
      };
      const { data } = await super.findOne(ctx);
      return {data: removeAttrsAndId(removeTime(data))};
    }
  })
);
