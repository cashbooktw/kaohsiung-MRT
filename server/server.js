var express = require('express');
var parseJSON = require('./parse-json');
var fs = require('fs');
var path = require('path');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/index', function(req, res){
  // var filePath = path.join(__dirname, 'data.json');
  // var result = parseJSON(filePath);
  res.send('This is GET METHOD');
  res.end();

})
app.get('/data.json', function(req, res){
  var filePath = path.join(__dirname, 'data.json');
  fs.readFile(filePath, {encoding: 'utf-8'}, function(err, data){
    if (!err){
      console.log("receive data!");
      res.send(data);
      res.end();
    } else {
      console.log(err);
      res.send(err);
      res.end();
    }
  });
})

app.post('/newindex', function(req, res){
  console.log("req received!");
  res.send('This is POST METHOD');
})

app.listen(8888);
