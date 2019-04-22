const { OK, NOT_FOUND } = require('http-status-codes');
const PhoneNumbers = require('../store/PhoneNumbers');

module.exports = (req, res) => {
  const { phoneNumber } = req.params;
  const filteredNumbers = PhoneNumbers.filterPhoneNumber(String(phoneNumber));
  if (filteredNumbers.length === 0) {
    res.status(NOT_FOUND);
    res.json({ Error: `Phone number ${phoneNumber} not found.` });
  } else {
    res.status(OK);
    res.json(PhoneNumbers.recordToJson(filteredNumbers[0]));
  }
};
