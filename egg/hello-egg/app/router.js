'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/hello/:name', controller.home.hello);
  router.get('/sign', controller.home.sign);
  router.post('/api/sign', controller.home.apiSign);
};
