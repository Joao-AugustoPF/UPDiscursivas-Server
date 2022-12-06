//a
module.exports = ({ env }) => ({
  url: env(process.env.PRODUCTION_HOST),
  proxy: true,
  app: {
    keys: env.array('APP_KEYS', ['Y31WH3XkmBZ7I+bovzf/Eg==','dJJrPcPKttTWqejnpJ6ZOg==','xmtSos6JhJSfk/prC5MwuA==','3DzGG5wmjI2cDjac/0WcUw==']),
  }
});
