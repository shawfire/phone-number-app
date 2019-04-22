/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const healthCheck = require('./routes/healthCheck');
const getPhoneNumber = require('./routes/getPhoneNumber');
const getPhoneNumbers = require('./routes/getPhoneNumbers');
const patchPhoneNumber = require('./routes/patchPhoneNumber');

// middleware
const app = express();
app.use(bodyParser.json()); // for parsing application/json

// routes
app.get('/', healthCheck);
app.get('/phone-numbers', getPhoneNumbers);
app.get('/phone-numbers/:phoneNumber', getPhoneNumber);
app.patch('/phone-numbers/:phoneNumber', patchPhoneNumber);

module.exports = app;
