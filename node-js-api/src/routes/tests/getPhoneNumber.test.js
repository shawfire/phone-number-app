const { OK, NOT_FOUND } = require('http-status-codes');
const getPhoneNumber = require('../getPhoneNumber');
const ExpectedResponse = require('./getPhoneNumberExpectedResponse');

test('should call res.json() with {<ExpectedResponse>}', () => {
  const json = jest.fn();
  const status = jest.fn();
  const res = {
    status,
    json,
  };
  getPhoneNumber({ params: { phoneNumber: '0434567890' } }, res);
  expect(status.mock.calls).toHaveLength(1);
  expect(status.mock.calls[0][0]).toBe(OK);
  expect(json.mock.calls).toHaveLength(1);
  expect(json.mock.calls[0][0]).toEqual(ExpectedResponse);
});

test('should call res.status() with {<NOT_FOUND>}', () => {
  const json = jest.fn();
  const status = jest.fn();
  const res = {
    status,
    json,
  };
  const expectedError = { Error: 'Phone number 123 not found.' };
  getPhoneNumber({ params: { phoneNumber: '123' } }, res);
  expect(status.mock.calls).toHaveLength(1);
  expect(status.mock.calls[0][0]).toBe(NOT_FOUND);
  expect(json.mock.calls).toHaveLength(1);
  expect(json.mock.calls[0][0]).toEqual(expectedError);
});
