var fs = require('fs');
var path = require('path');

var filePath = path.join(__dirname, 'data.json');

// fs.readFile(filePath, {encoding: 'utf-8'}, function(err, data){
//   if (!err){
//     console.log("receive data!");
//     var obj = JSON.parse(data);
//     for (var x in obj){
//       console.log(x);
//     }
//     console.log(obj["101"][0].descr);
//   } else {
//     console.log(err);
//   }
//
// });
function parseJSON(filePath){
  fs.readFile(filePath, {encoding: 'utf-8'}, function(err, data){
    if (!err){
      console.log("receive data!");
      var obj = JSON.parse(data);
      // for (var x in obj){
      //   console.log(x);
      // }
      // console.log(obj["101"][0].descr);
      return obj;
    } else {
      console.log(err);
      return err;
    }

  });
}
exports.parseJSON = parseJSON;
