const { OK } = require('http-status-codes');
const PhoneNumbers = require('../store/PhoneNumbers');

module.exports = (req, res) => {
  const response = {};
  const filteredNumbers = PhoneNumbers.filterCustomer(req.query.customer);
  response.phoneNumbers = PhoneNumbers.arrayToJson(filteredNumbers);
  res.status(OK);
  res.json(response);
};
