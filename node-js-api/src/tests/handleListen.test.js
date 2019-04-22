const handleListen = require('../handleListen');

test('should call log with Phone node-js-api...', () => {
  const PORT = 3000;
  const log = jest.fn();
  handleListen(log, PORT);
  expect(log.mock.calls).toHaveLength(1);
  expect(log.mock.calls[0][0]).toBe(`Phone node-js-api listening on port ${PORT.toString()}!`);
});
