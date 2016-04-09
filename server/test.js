var request = require('request');
var fs = require('fs');
var util = require('util');
var site = [101,102,103,104,105,106,107,108,109,110,
            111,112,113,114,115,116,117,118,119,120,
            121,122,123,124,
            201,202,203,204,205,206,207,208,209,210,
            211,212,213,214,
            999];//39
var localHttpObject = {"site": 999};
var all_site_status = [];
function request_get(localHttpObject2){
  request.get({url:'http://data.kaohsiung.gov.tw/Opendata/MrtJsonGet.aspx',
               qs: localHttpObject2
        },
        function slice_body (error, response, body){
          if (!error && response.statusCode == 200) {
            var temp = (body.match("<")).index;
            var temp2 = body.slice(0, temp).trim();
            console.log(temp2);
            all_site_status.push(temp2);
            count++;
            sequential_get(count);
          }
        }
  );
}
// request_get(localHttpObject);
var count = 0;
// function slice_body (error, response, body){
//   if (!error && response.statusCode == 200) {
//     var temp = (body.match("<")).index;
//     var temp2 = body.slice(0, temp).trim();
//     console.log(++count + " ");
//     console.log(temp2);
//   }
// }

function sequential_get(count){
  if (count < 39){
    var localHttpObject2 = {"site": site[count]}
    request_get(localHttpObject2);
  } else {
    count = 0;
    console.log(all_site_status);
    fs.writeFileSync('./data.json', all_site_status , 'utf-8', function(err){
      if(err){
        return console.log(err);
      }
      console.log("File saved");
    })
    all_site_status = [];
  }
  // var localHttpObject2;
  // for (var i = 0; i < 39; i++){
  //   localHttpObject2 = {"site": site[i]}
  //   request_get(localHttpObject2);
  // }
}
sequential_get(0);
