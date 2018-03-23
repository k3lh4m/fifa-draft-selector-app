const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const config = require('config');

//Routes require
const Players = require('./routes/players');

app.use(express.json());

//Debugger
//Set debug ENV variables on node start up
//Example: DEBUG=app:db node app.js
const startUpDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');

//Middleware
app.use(bodyParser.json());
app.use(helmet());

//Routes
app.use('/api/players', Players );

if(app.get('env') === 'development') {
    startUpDebugger('Morgan enabled...');
    app.use(morgan('tiny'));
}

app.listen(4010, () => {
    startUpDebugger('Listening to server 4000');
});