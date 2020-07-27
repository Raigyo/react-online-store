# Online Store with React, Strapi CMS with GraphQL & Stripe

*July 2020*

> 🔨 From Udemy '[Build an Online Store with React and GraphQL in 90 Minutes](https://www.udemy.com/course/build-an-online-store-with-react-and-graphql-in-90-minutes/)'.

## About

## How to launch in dev mode

React app: `npm start`

Strapi:

```
cd server //(or name choosen)

npm run start
```

## React

Use import in React to import Strapi as comonent:

```
import Strapi from 'strapi-sdk-javascript/build/main';
```

## GraphQL

Playground in Strapi with documentations and schemas: [Playground](http://localhost:1337/graphql)

In Strapi, in Role & Permission add for users:

*content-type: find + findone*

*Allow to perform this action for: ratelimit*

Exemple to list all brands:

```
query {
	brands {
  	_id
    name
    description
        image {
        name
        }
	}
}
```

## Components & Services

- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas), cloud MongoDB service.
- [Gestalt](https://madewithreact.com/gestalt-react-ui-components/), React UI Components
- [Strapi](https://strapi.io/), Strapi is the leading open-source headless
CMS. It’s 100% Javascript, fully customizable and developer-first
- GraphGL: installed using Strapi dashboard. 

## Useful Links

- [Build an Online Store with React and GraphQL in 90 Minutes](https://www.udemy.com/course/build-an-online-store-with-react-and-graphql-in-90-minutes/)
- [Source code for the "Build an Online Store with React and GraphQL in 90 Minutes" Udemy Course.](https://github.com/peelmicro/build-an-online-store-with-react-and-graphql-in-90-minutes)
- [FAQ: No LogoTypes shows up..](https://www.udemy.com/course/build-an-online-store-with-react-and-graphql-in-90-minutes/learn/lecture/11669406#questions/9412605)