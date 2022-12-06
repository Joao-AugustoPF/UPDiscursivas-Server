//a
module.exports = ({ env }) => ({
  host: env('HOST', process.env.PRODUCTION_HOST),
  port: env(process.env.PORT),
  url: env(process.env.PRODUCTION_HOST),
  proxy: true,
  app: {
    keys: env.array('APP_KEYS', ['Y31WH3XkmBZ7I+bovzf/Eg==','dJJrPcPKttTWqejnpJ6ZOg==','xmtSos6JhJSfk/prC5MwuA==','3DzGG5wmjI2cDjac/0WcUw==']),
  },
  admin: {
    auth: {
      secret: env(process.env.JWT_SECRET),
    },
  },
});
