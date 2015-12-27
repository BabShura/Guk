var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

var lolAPI = require('lol-riot-api-module');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


var lolApi = new lolAPI({
    key: process.env.RIOT_API_KEY,
    region: 'na'
})

//Load RIOT data on boot.
require('./League/cache')(app, lolApi);

//Load routes
setTimeout(()=>{
    app.use( '/', require('./routes/') )

    require('./errorHandler')
} )

module.exports = app;
