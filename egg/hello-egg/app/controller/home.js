'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = `<h1>Welcome to homepage</h1>
    <p><a href='/hello/egg'>Say hi to egg</a></p>
    <p><a href='/sign'>user sign in</a></p>
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
      ctx.body = `<h1>Welcome, ${name}!</h1>`;
    } else {
      ctx.body = `<h1>Login failed!</h1><p><a href='/sign'>Try again</a></p>`;
    }
  }
}

module.exports = HomeController;
