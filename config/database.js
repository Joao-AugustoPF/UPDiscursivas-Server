const localrproduction = process.env.NODE_ENV === 'production' ? 'production' : 'localhost'



module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', process.env.NODE_ENV === 'production' ? process.env.DATABASE_PROUDCTION_HOST : process.env.DATABASE_LOCAL_HOST),
      port: env.int('DATABASE_PORT', process.env.NODE_ENV === 'production' ? process.env.DATABASE_PRODUCTION_PORT : process.env.DATABASE_LOCAL_PORT),
      database: env('DATABASE_NAME', process.env.NODE_ENV === 'production' ? process.env.DATABASE_PRODUCTION_DATABASE : process.env.DATABASE_LOCAL_DATABASE),
      user: env('DATABASE_USERNAME', process.env.NODE_ENV === 'production' ? process.env.DATABASE_PRODUCTION_USER : process.env.DATABASE_LOCAL_USER),
      password: env('DATABASE_PASSWORD', process.env.NODE_ENV === 'production' ? process.env.DATABASE_PRODUCTION_PASSWORD : process.env.DATABASE_LOCAL_PASSWORD),
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
      }
    },
    debug: false,
  },
});
