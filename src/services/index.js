const users = require('./users/users.service.js');
const categories = require('./categories/categories.service.js');
const offers = require('./offers/offers.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(users);
  app.configure(categories);
  app.configure(offers);
};
