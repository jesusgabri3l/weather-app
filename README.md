
**IMPORTANT**: First of all, i would like to apologize because i could not finish the whole tecnical assesment, i am having serious issues with my homeplace and work station.
# Weather app

Weather app, it allows you to add locations to your favourites and see all the weather data related to it.


- It is not possible to do the 'checker' module because i am using a free weather api therefore i have limited api calls per day, anyway i have the code in there. (TECHNICAL ISSUE)
- I am using Typescript, but i am not doing types verification.

**I could not do everything i wanted, this is the list of things i would have liked to add**
- web browser localstorage, since is a serverless application, it would contain the saved locations with their own criteria.
- I was going to use an error boundary library to handle errors related, such as: Google authentication, google Autocomplete, axios call to the weather api.
- I was going to add sweetalert for the alerts modules based on the criteria

## Features

- Google authentication
- Google Search-autocomplete for searching different locations
- Add a location to your favourites and then see weather related data

## Tech

- [React18](https://reactjs.org/)
- [Redux - Toolkit](https://redux-toolkit.js.org/)
- [Vite](https://vitejs.dev/guide/why.html)
- [OpenWeather API](https://openweathermap.org/api)
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
**Ask for the .env in case you wanna run it locally**
```sh
cd weather-app
npm i
npm run dev
```
