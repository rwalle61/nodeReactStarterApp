const express = require('express');
require('express-async-errors');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const errorHandler = require('./middleware/errorHandler');
const v1Routes = require('./v1/routes');

app.use(cors());
app.use(bodyParser.json());
app.use('/api/v1/', v1Routes);
app.use(
  '/',
  express.static(path.join(__dirname, '..', '..', 'client', 'build')),
);
app.use(errorHandler.handleErrors);

module.exports = app;
