module.exports = ({ env }) => ({
  url: env(process.env.PRODUCTION_HOST),
  app: {
    keys: env.array('APP_KEYS'),
  }
});
