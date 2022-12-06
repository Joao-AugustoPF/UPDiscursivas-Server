module.exports = ({ env }) => ({
  url: env(process.env.PRODUCTION_HOST)
});
