const { OK } = require('http-status-codes');
const getPhoneNumbers = require('../getPhoneNumbers');
const ExpectedResponse = require('./getPhoneNumbersExpectedResponse');

test('should call res.json() with {<ExpectedResponse>}', () => {
  const json = jest.fn();
  const status = jest.fn();
  const res = {
    status,
    json,
  };
  getPhoneNumbers({ query: { } }, res);
  expect(status.mock.calls).toHaveLength(1);
  expect(status.mock.calls[0][0]).toBe(OK);
  expect(json.mock.calls).toHaveLength(1);
  expect(json.mock.calls[0][0]).toEqual(ExpectedResponse);
});
