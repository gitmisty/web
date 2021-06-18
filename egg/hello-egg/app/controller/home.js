'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = `<h1>Welcome to homepage</h1>
    <p><a href='/hello/egg'>Say hi to egg</a></p>
    <p><a href='/sign'>user sign in</a></p>
    <p><a href='/test/sign/egg/1234'>Test sign: Success</a></p>
    <p><a href='/test/sign/egg/1235'>Test sign: Fail</a></p>
    <p><a href='/test/redirect'>Test redirect</a></p>
    `;
  }

  async hello() {
    const { ctx } = this;
    const name = ctx.params.name;
    ctx.body = `<h1>Hello, ${name}</h1>`;
  }

  async sign() {
    const { ctx } = this;
    ctx.body = `<h1>Index</h1>
    <form action='/api/sign' method='post'>
      <p>Name: <input name='name' value='egg'></p>
      <p>Password: <input name='password' type='password'></p>
      <p><input type='submit' value='Submit'></p>
    </form>`;
  }

  async apiSign() {
    const { ctx } = this;
    const name = ctx.request.body.name || '';
    const password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);
    if (name === 'egg' && password === '1234') {
      ctx.status = 200;
      ctx.body = `<h1>Welcome, ${name}!</h1>`;
    } else {
      ctx.status = 201;
      ctx.body = `<h1>Login failed!</h1><p><a href='/sign'>Try again</a></p>`;
    }
  }

  async testSign() {
    const { ctx } = this;
    const name = ctx.params.name
    const password = ctx.params.password

    const url = `${ctx.protocol}://${ctx.host}/api/sign`
    console.log(`url: ${url}`);
    const result = await ctx.curl(url, {
      method: 'POST',
      contentType: 'application/x-www-form-urlencoded',
      data: {
        name: name,
        password: password
      }
    });
    ctx.body = `${result.data}`;
  }

  async testRedirect() {
    const { ctx } = this;
    ctx.redirect('/hello/tester')
  }
}

module.exports = HomeController;
