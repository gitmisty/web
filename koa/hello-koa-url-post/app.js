const Koa = require('koa');
const router = require('koa-router')()
const bodyParser = require('koa-bodyparser');
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

// app url-router: /sigin
router.get('/sigin', async (ctx, next) => {
  ctx.response.body = `<h1>Index</h1>
    <form action='/api/sigin' method='post'>
      <p>Name: <input name='name' value='koa'></p>
      <p>Password: <input name='password' type='password'></p>
      <p><input type='submit' value='Submit'></p>
    </form>`;
});

// app url-router: /api/sigin (post)
router.post('/api/sigin', async (ctx, next) => {
  var name = ctx.request.body.name || '';
  var password = ctx.request.body.password || '';
  console.log(`signin with name: ${name}, password: ${password}`);
  if (name === 'koa' && password === '12345') {
    ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
  } else {
    ctx.response.body = `<h1>Login failed!</h1><p><a href='/sigin'>Try again</a></p>`;
  }
});

// add router middleware
app.use(bodyParser());
app.use(router.routes());

// Listening on port 3000
app.listen(3000);
console.log('Please open http://localhost:3000 and http://localhost:3000/hello/koa in your browser the view the client interface');
