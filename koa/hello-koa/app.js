// Import koa
const Koa = require('koa');
// Create a Koa object to represent the web app itself
const app = new Koa();

// For any request, the app will call this asynchronous function to process the request
app.use(async ctx => {
  ctx.body = 'Hello World. I am started by koa.';
});

// Listening on port 3000
app.listen(3000);
console.log('Please open http://localhost:3000 in your browser the view the client interface');
