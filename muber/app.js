require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const app = express();

const password = process.env.MONGO_PASS;
const mongourl = process.env.MONGO_URL;
const mongouser = process.env.MONGO_USER;
const uri = 'mongodb+srv://' + mongouser + ':' + password + '@' + mongourl;
// const client = new MongoClient(uri, { useNewUrlParser: true });

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://' + mongouser + ':' + password + '@' + mongourl,
  {useNewUrlParser: true}
);

app.use(bodyParser.json()); // must be above the 'routes' called
routes(app);

module.exports = app;
