# Weather app

Weather app, it allows you to add locations to your favourites and see all the weather data related to it.
**IMPORTANT**:

- It is not possible to do the 'checker' module because i am using a free weather api therefore i have limited api calls per day.
- I am using Typescript, but i am not doing types verification.

## Features

- Google authentication
- Google Search-autocomplete for searching different locations
- Add a location to your favourites and then see weather related data
- Add and modify criterias to each location
- Alertes will show based on the previous criteria

## Tech

- [React18](https://reactjs.org/)
- [Redux - Toolkit](https://redux-toolkit.js.org/)
- [Vite](https://vitejs.dev/guide/why.html)
- [Google Cloud](https://cloud.google.com/) - Used for the authentication and locations autocomplete
- [Google Places API](https://developers.google.com/maps/documentation/places/web-service)
- [Tailwind](https://markus.oberlehner.net/blog/vue-project-directory-structure-keep-it-flat-or-group-by-domain/)
- [SCSS](https://sass-lang.com/guide)

## Folder structure

- [7-1 for the SCSS architecture](https://sass-guidelin.es/es/#arquitectura)
- [A DDD based architecture](https://css-tricks.com/domain-driven-design-with-react/)

## Conventions

- [Vue Style Guide](https://vuejs.org/style-guide/) - I know i am working on React, but i am a huge fan of Vue.js, therefore i am using their style guide convetion, i think some of then would apply to frontend development generally speaking.
- I am using `function componentName()` for UI components, and `const hookName = () => {}` for logical components, like hooks.

## Installation

Install the dependencies and devDependencies and start the server.

```sh
cd weather-app
npm i
npm run dev
```
