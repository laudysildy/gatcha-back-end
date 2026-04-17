const controller = require('./gacha-controller');

module.exports = (app) => {
  app.post('/gacha', controller.gacha);
  app.get('/gacha/history', controller.history);
};