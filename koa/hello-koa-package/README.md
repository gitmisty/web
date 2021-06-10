# Hello koa

A simple koa project. Test on macOS Catalina Version 10.15.7.

## Init
Init the package and a `package.json` file will be created.
```shell
npm init # Init the project and save the setting in package.json file
npm i koa --save # Install the koa and save in package.json file
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
const Koa = require('koa');
const app = new Koa();

// For any request, the app will call this asynchronous function to process the request
app.use(async ctx => {
  // Set response Content-type
  ctx.type = 'text/html';
  // Set response Content
  ctx.body = '<h1>Hello World</h1> <body><p> I am started by koa.</p></body>';
});

// Listening on port 3000
app.listen(3000);
console.log('Please open http://localhost:3000 in your browser the view the client interface');
```

## Run

Run the project:

```shell
npm i
npm run start
```

## View
Please open localhost:3000 with your browser to view the client interface

## Stop

Stop the project process:

```shell
kill -9 $(lsof -t -i:3000)
```