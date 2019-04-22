
const { OK, NOT_FOUND, NOT_ACCEPTABLE } = require('http-status-codes');
const PhoneNumbers = require('../store/PhoneNumbers');

module.exports = (req, res) => {
  const { phoneNumber } = req.params;
  const { activated } = req.body;
  if (activated === undefined || typeof activated !== 'boolean') {
    res.status(NOT_ACCEPTABLE);
    res.json({ Error: `activated value is invalid for Phone number ${phoneNumber}.` });
    return;
  }
  const updatedNumber = PhoneNumbers.setActivated(String(phoneNumber), activated);
  if (updatedNumber === null) {
    res.status(NOT_FOUND);
    res.json({ Error: `Phone number ${phoneNumber} not found.` });
    return;
  }
  res.status(OK);
  res.json(PhoneNumbers.recordToJson(updatedNumber));
};
