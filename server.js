var express = require('express');
var app = express();
var twitterbot = require('./twitterbot');

twitterbot.init();
