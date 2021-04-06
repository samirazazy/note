// setup server
const express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

const noteRoute = require('./route/noteRoute');

const app = express();

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('server started........'));

app.use('/api/v1', noteRoute);

const port = 3000;
app.listen(port, () => {
  console.log('Server Start >>>>>>>>>');
});
