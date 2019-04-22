const request = require('supertest');
const { OK } = require('http-status-codes');
const app = require('../app');
const ExpectedResponse = require('../routes/tests/getPhoneNumbersExpectedResponse');


test('should pass health check', (done) => {
  request(app)
    .get('/')
    .expect(OK, { message: 'Phone node-js-api is UP.' })
    .end((err) => {
      if (err) throw done(err);
      done();
    });
});

test('should pass phone-numbers route tests', (done) => {
  request(app)
    .get('/phone-numbers')
    .expect(OK, ExpectedResponse)
    .end((err) => {
      if (err) throw done(err);
      done();
    });
});
