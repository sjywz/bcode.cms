'use strict';
const { removeTime, removeAttrsAndId } = require("../../../utils/index.js");

/**
 * simulator controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController(
  'api::simulator.simulator',
  ({ strapi }) => ({
    async find(ctx) {
      const { page = 1, pageSize = 20, ...params } = ctx.query;
      if (page && pageSize) {
        ctx.query = {
          ...params,
          populate: "deep",
          sort: ['id:desc'],
          "pagination[page]": Number(page),
          "pagination[pageSize]": Number(pageSize),
        };
      }
      const { data, meta } = await super.find(ctx);
      return { data: removeAttrsAndId(removeTime(data)), meta };
    },
  })
);
