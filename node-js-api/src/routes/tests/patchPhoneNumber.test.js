const { OK, NOT_FOUND, NOT_ACCEPTABLE } = require('http-status-codes');
const patchPhoneNumber = require('../patchPhoneNumber');
const ExpectedResponse = require('./patchPhoneNumberExpectedResponse');

test('should call res.json() with {<ExpectedResponse>}', () => {
  const json = jest.fn();
  const status = jest.fn();
  const res = {
    status,
    json,
  };
  // eslint-disable-next-line object-curly-newline
  const req = {
    params: { phoneNumber: '0434567890' },
    body: { activated: true },
  };
  patchPhoneNumber(req, res);
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
  // eslint-disable-next-line object-curly-newline
  const req = {
    params: { phoneNumber: '123' },
    body: { activated: true },
  };
  const expectedError = { Error: 'Phone number 123 not found.' };
  patchPhoneNumber(req, res);
  expect(status.mock.calls).toHaveLength(1);
  expect(status.mock.calls[0][0]).toBe(NOT_FOUND);
  expect(json.mock.calls).toHaveLength(1);
  expect(json.mock.calls[0][0]).toEqual(expectedError);
});

test('should call res.status() with {<NOT_ACCEPTABLE>}', () => {
  const json = jest.fn();
  const status = jest.fn();
  const res = {
    status,
    json,
  };
  // eslint-disable-next-line object-curly-newline
  const req = {
    params: { phoneNumber: '0434567890' },
    body: { activated: 1 },
  };
  const expectedError = { Error: 'activated value is invalid for Phone number 0434567890.' };
  patchPhoneNumber(req, res);
  expect(status.mock.calls).toHaveLength(1);
  expect(status.mock.calls[0][0]).toBe(NOT_ACCEPTABLE);
  expect(json.mock.calls).toHaveLength(1);
  expect(json.mock.calls[0][0]).toEqual(expectedError);
});
