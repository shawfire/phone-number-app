const { OK } = require('http-status-codes');
const healthCheck = require('../healthCheck');

test('should call res.json() with Phone node-js-api is UP.', () => {
  const status = jest.fn();
  const json = jest.fn();
  const res = {
    status,
    json,
  };
  healthCheck({}, res);
  expect(status.mock.calls).toHaveLength(1);
  expect(status.mock.calls[0][0]).toBe(OK);
  expect(json.mock.calls).toHaveLength(1);
  expect(json.mock.calls[0][0]).toEqual({ message: 'Phone node-js-api is UP.' });
});
