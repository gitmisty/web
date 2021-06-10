# Hello koa

A simple koa project. Test on macOS Catalina Version 10.15.7.

## Topic
In order to handle URLs, we need to introduce the koa-router middleware and let it handle the URL mapping.

Demonstrate how to handle 'post' request.

## Init
Init the package and a `package.json` file will be created.
```shell
npm init # Init the project and save the setting in package.json file
npm i koa --save # Install the koa and save in package.json file
npm i koa-router --save # Install url-koa middleware package
npm i koa-bodyparser --save # Parse the original request and bind the parsed parameters to ctx.request.body
```

## Edit package.json
Open package.json file and add scripts:
```json
"scripts": {
  "start": "node app.js &"
}
```

## Coding
Create app.js file and coding.

```js
const router = require('koa-router')();

const app = new Koa();

......

console.log('Please open http://localhost:3000/hello/koa in your browser the view the client interface');
```

## Run

Run the project:

```shell
npm i
npm run start
```

## View
Please open http://localhost:3000 and http://localhost:3000/hello/koa with your browser to view the client interface.

Please open http://localhost:3000/sigin to check the `post` request.

## Stop

Stop the project process:

```shell
kill -9 $(lsof -t -i:3000)
```
