//databases
module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', process.env.DATABASE_PROUDCTION_HOST),
      port: env.int('DATABASE_PORT', process.env.DATABASE_PRODUCTION_PORT),
      database: env('DATABASE_NAME', process.env.DATABASE_PRODUCTION_DATABASE),
      user: env('DATABASE_USERNAME', process.env.DATABASE_PRODUCTION_USER),
      password: env('DATABASE_PASSWORD', process.env.DATABASE_PRODUCTION_PASSWORD),
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
      }
    },
    debug: false,
  },
});
