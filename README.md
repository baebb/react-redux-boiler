# react-redux-boiler

Super simple react-redux boilerplate with just enough goodies to easily develop (and build!) your cool app™, and nothing more.


- 🤖 Write next-generation javascript (eg. ES6) no worries with [Babel](https://babeljs.io/)

- 🏗 Build intelligent components in no time with [react-bootstrap](https://react-bootstrap.github.io)

- 🚦 Navigate to routes via redux actions and access them from your store with [react-router-redux](https://github.com/reactjs/react-router-redux)

- 💪 Leverage webpack for easy development and [webpack-html-plugin](https://github.com/jantimon/html-webpack-plugin) for automagically building production cache-busting assets

- 👯 Get sassy with your css using [sass-loader](https://github.com/webpack-contrib/sass-loader)

- 👨 Show your grandpa that still uses internet explorer your app with [autoprefixer](https://github.com/postcss/autoprefixer)

Also recommended: 🔥 [Firebase](firebase.google.com) 🔥 for hyper-simple app deployment and backend

Think this boilerplate could be better? Open an issue, make a pull request, or just holla on: iam (at) rossdyson.com 

### Install dependcies
```sh
npm install
```

### Test app on a development server
```sh
npm start
```
Dev app will be up on localhost:8080 and any changes will update the app


### Build app
```sh
npm run build
```
Builds a production-ready app in ./build


### Host built app (must have been built)
```sh
npm run build-serve
```
The built production app will be hosted on localhost:8079