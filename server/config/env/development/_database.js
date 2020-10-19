module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        host: env(
          "DATABASE_HOST", "<cluster0.XXXX.mongodb.net>"
        ),
        srv: env.bool("DATABASE_SRV", true),
        port: env.int("DATABASE_PORT", 27017),
        database: env("DATABASE_NAME", "<DATABASE_NAME>"),
        username: env("DATABASE_USERNAME", "<DATABASE_USERNAME>"),
        password: env("DATABASE_PASSWORD", "<DATABASE_PASSWORD>"),
      },
      options: {
        authenticationDatabase: env("AUTHENTICATION_DATABASE", null),
        ssl: env.bool("DATABASE_SSL", true),
      },
    },
  },
});
