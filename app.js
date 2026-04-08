const express = require('express');
const routes = require('../api/routes');
require('./config/env');

const app = express();

app.use(express.json());
app.use('/api', routes);

module.exports = app;
