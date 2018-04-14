var express = require('express');
var app = express();
var useragent = require('express-useragent');
var path = require('path')

app.use(useragent.express());

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', function(req, res) {
  //res.send(req.useragent);
  res.sendFile(path.join(__dirname, '../build', 'desktop.html'))
});
app.listen(3000);