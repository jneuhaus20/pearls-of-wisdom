const express = require('express')
const morgan = require('./log.js')
const bodyParser = require('body-parser')

const pearlRouter = require('./pearl-router.js')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan);
app.use('/pearls', pearlRouter);

app.listen(3000, () => console.log('Launched Dev Web API on port 3000'));
