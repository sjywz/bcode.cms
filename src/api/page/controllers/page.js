'use strict';
const { removeTime, removeAttrsAndId } = require("../../../utils/index.js");

/**
 * page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController(
	'api::page.page',
	({ strapi }) => ({
    async findOne(ctx) {
      const { data } = await super.findOne(ctx);
      return {data: removeAttrsAndId(removeTime(data))};
    },
  })
);
