'use strict';
const { removeTime, removeAttrsAndId } = require("../../../utils/index.js");

/**
 * game controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController(
  'api::game.game',
  ({ strapi }) => ({
    async find(ctx) {
      const { page = 1, pageSize = 5, ...params } = ctx.query;
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
    async findOne(ctx) {
      const { ...params } = ctx.query;
      ctx.query = {
        ...params,
        populate: "deep",
      };
      const { data } = await super.findOne(ctx);
      return {data: removeAttrsAndId(removeTime(data))};
    },
  })
);
