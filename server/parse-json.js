// the parse-json file is to provide function pares json
var fs = require('fs');
var path = require('path');

var filePath = path.join(__dirname, 'data.json');

function parseJSON(filePath){
  fs.readFile(filePath, {encoding: 'utf-8'}, function(err, data){
    if (!err){
      console.log("receive data!");
      var obj = JSON.parse(data);
      return obj;
    } else {
      console.log(err);
      return err;
    }

  });
}
exports.parseJSON = parseJSON;
