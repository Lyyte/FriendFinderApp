var express = require('express');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 8060;

app.listen(PORT, function() {
  console.log('Friend Finder app is listening on PORT: ' + PORT);
});