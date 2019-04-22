const { OK } = require('http-status-codes');

module.exports = (_, res) => {
  res.status(OK);
  res.json({ message: 'Phone node-js-api is UP.' });
};
