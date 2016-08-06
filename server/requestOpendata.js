// the requestOpendata.js file is to get a kaohsiung-MRT json file, and write in server
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
var all_site_status = "{";
function request_get(localHttpObject2){
  request.get({url:'http://data.kaohsiung.gov.tw/Opendata/MrtJsonGet.aspx',
               qs: localHttpObject2
        },
        function slice_body (error, response, body){
          if (!error && response.statusCode == 200) {
            var temp = (body.indexOf("<"));
            var temp2 = body.slice(0, temp).trim();
            var temp2 = temp2.slice(1, temp2.length - 1).trim();
            temp2 = temp2.replace("MRT",localHttpObject2.site);
            console.log(temp2);
            all_site_status+=temp2;
            if (count < 38){
              all_site_status+=",";
            }
            count++;
            sequential_get(count);
          }
        }
  );
}
var count = 0;

function sequential_get(siteIndex){
  if (siteIndex < 39){
    var querySite = {"site": site[siteIndex]}
    count = siteIndex;
    request_get(querySite);
  } else {
    count = 0;
    all_site_status+="}";
    console.log(all_site_status);
    fs.writeFileSync('./data.json', all_site_status , 'utf-8', function(err){
      if(err){
        return console.log(err);
      }
      console.log("File saved");
    });
    all_site_status = "{";
  }
}
// sequential_get(0);
// setInterval((() => sequential_get(0)), 15000);
module.exports = sequential_get;
