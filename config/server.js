module.exports = ({ env }) => ({
  host: env('HOST', process.env.HOST),
  port: env.int('PORT', process.env.PORT),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
