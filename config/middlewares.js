const assetsSrc = [
  "'self'",
  'data:',
  'blob:',
  'market-assets.strapi.io',
  'cms.yousyou.xyz',
];

module.exports = [
  'strapi::errors',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::public',
  'strapi::favicon',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': assetsSrc,
          'media-src': assetsSrc,
        }
      }
    }
  }
];
