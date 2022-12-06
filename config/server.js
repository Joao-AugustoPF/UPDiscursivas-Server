module.exports = ({ env }) => ({
  host: env('HOST', process.env.NODE_ENV === 'production' ? process.env.PRODUCTION_HOST : process.env.HOST),
  port: env.int('PORT', process.env.PORT),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
