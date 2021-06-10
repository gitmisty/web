const Koa = require('koa');
const app = new Koa();

// For any request, the app will call this asynchronous function to process the request
app.use(async (ctx, next) => {
  await next();
  // Set response Content-type
  ctx.type = 'text/html';
  // Set response Content
  ctx.body = '<h1>Hello World</h1> <body><p> I am started by koa.</p></body>';
});

// Listening on port 3000
app.listen(3000);
console.log('Please open http://localhost:3000 in your browser the view the client interface');
