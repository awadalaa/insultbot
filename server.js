var express = require('express');
var app = express();
var twitterbot = require('./twitterbot');

console.log('app starting...');
twitterbot.init();

console.log('server starting...');
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});