const Koa = require('koa');
const router = require('koa-router')()
const app = new Koa();

// For any request, the app will call this asynchronous function to process the request
// log request url
app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  await next();
});

// add url-router: /
router.get('/', async (ctx, next) => {
  ctx.response.body = '<h1>Welcome to homepage</h1>';
});

// add url-router: /hello/:name
router.get('/hello/:name', async (ctx, next) => {
  var name = ctx.params.name;
  ctx.response.body = `<h1>Hello, ${name}</h1>`;
});


// add router middleware
app.use(router.routes());

// Listening on port 3000
app.listen(3000);
console.log('Please open http://localhost:3000 and http://localhost:3000/hello/koa in your browser the view the client interface');
