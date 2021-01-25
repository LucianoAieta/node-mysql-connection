const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../app/views'));

app.use(bodyParser.urlencoded({extended : false}));

module.exports = app;