const express = require('express');
const proxy = require('express-http-proxy');

app = express();

app.use('/', proxy('https://api.telegram.org/'));

module.exports = app;
