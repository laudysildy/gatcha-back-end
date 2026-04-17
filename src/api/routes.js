const express = require('express');

const books = require('./components/books/books-route');
const users = require('./components/users/users-route');
const gacha = require('./components/gacha/gacha-route');
const rewards = require('./components/rewards/rewards-route');

module.exports = () => {
  const app = express.Router();

  books(app);
  users(app);
  gacha(app);
  rewards(app);

  return app;
};
