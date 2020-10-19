# Strapi application

Strapi CMS for [react-online-store](https://github.com/Raigyo/react-online-store)

Heroku: [https://strapi-server-raigyobeer.herokuapp.com/](https://strapi-server-raigyobeer.herokuapp.com/)

## Local

`npm run develop`

Server: *http://localhost:1337*

Admin: *http://localhost:1337/admin*

## Deploy

`heroku login`

`heroku create custom-project-name` or `heroku git:remote -a your-heroku-app-name`


### Set environment variables (MongoDB)

````
heroku config:set DATABASE_URI="mongodb+srv://chilot:<PASSWORD>@cluster0.2hkt1.mongodb.net/<DB_NAME>?retryWrites=true&w=majority"

heroku config:set DATABASE_NAME="server"
````

### Update your database config file

**./config/database.js.**

````js
module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {},
      options: {},
    },
  },
});
````

**./config/env/development/database.js**

````js
module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        host: env(
          "DATABASE_HOST", "cluster0.2hkt1.mongodb.net"
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
````

**./config/env/production/database.js.**

````js
module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: env('DATABASE_URI'),
      },
      options: {
        ssl: true,
      },
    },
  },
});
````

### Commit your changes

````
git add .
git commit -m "Update database config"
git push heroku master
heroku open
````

*For security reasons, the Content Type Builder plugin is disabled in production. To update content structure, please make your changes locally and deploy again.*

## Useful links

- [Deploy on heroku](https://strapi.io/documentation/v3.x/deployment/heroku.html) (MongoDB tab)
