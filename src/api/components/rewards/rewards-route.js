const controller = require('./rewards-controller');

module.exports = (app) => {
  app.get('/rewards', controller.getRewards);
  app.get('/rewards/winners', controller.getWinners);
};