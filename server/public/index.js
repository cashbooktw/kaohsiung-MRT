
var all_site_status = "{";
var count = 0;
var site = [101,102,103,104,105,106,107,108,109,110,
            111,112,113,114,115,116,117,118,119,120,
            121,122,123,124,
            201,202,203,204,205,206,207,208,209,210,
            211,212,213,214,
            999];//39
var cht_site = ["小港","高雄國際機場","草衙","前鎮高中","凱旋",
                "獅甲","三多商圈","中央公園","美麗島","高雄車站",
                "後驛","凹子底","巨蛋","生態園區","左營",
                "世運","油廠國小","楠梓加工區","後勁","都會公園",
                "青埔","橋頭糖廠","橋頭火車站","南崗山",
                "西子灣","鹽埕埔","市議會","美麗島","信義國小",
                "文化中心","五塊厝","技擊館","衛武營","鳳山西站",
                "鳳山","大東","鳳山國中","大寮",
                "美麗島"
];
var sendRequest = function(){
  var request = new XMLHttpRequest();
  request.open('GET', 'data.json', true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // Success!
      var resp = request.responseText;
      console.log(resp);
      parseJSON(resp);
      // setTimeout(setInterval(parseJSON(resp), 1000), 1000);
    } else {
      // We reached our target server, but it returned an error
    }
  };

  request.onerror = function() {
    // There was a connection error of some sort
  };

  request.send();
};

var newSendRequest = function(theSite){
  var request = new XMLHttpRequest();
  request.open('GET', "http://data.kaohsiung.gov.tw/Opendata/MrtJsonGet.aspx" + "?site=" + theSite, true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // Success!
      if (request.status >= 200 && request.status < 400) {
        var resp = request.responseText;
        // console.log(resp);
        var temp = (resp.indexOf("<"));
        var temp2 = resp.slice(0, temp).trim();
        var temp2 = temp2.slice(1, temp2.length - 1).trim();
        temp2 = temp2.replace("MRT",theSite);
        console.log(temp2);
        // all_site_status.push(temp2);
        all_site_status+=temp2;
        if (count < 38){
          all_site_status+=",";
        }
        count++;
        sequential_get(count);
      }
    } else {
      // We reached our target server, but it returned an error
    }
  };
  request.onerror = function() {
    // There was a connection error of some sort
  };
  request.send();
};

var parseJSON = function (resp){
  resp = JSON.parse(resp);
  for(var i = 0; i < 39; i++){
    console.log(site[i]);
    document.getElementById(site[i]).innerHTML = cht_site[i];
    document.getElementById(site[i] + "-0-descr").innerHTML = resp[site[i]][0].descr;
    document.getElementById(site[i] + "-0-arrival").innerHTML = resp[site[i]][0].arrival;
    document.getElementById(site[i] + "-0-next_arrival").innerHTML = resp[site[i]][0].next_arrival;
    document.getElementById(site[i] + "-1-descr").innerHTML = resp[site[i]][1].descr;
    document.getElementById(site[i] + "-1-arrival").innerHTML = resp[site[i]][1].arrival;
    document.getElementById(site[i] + "-1-next_arrival").innerHTML = resp[site[i]][1].next_arrival;
  }
  document.getElementById(site[38] + "-2-descr").innerHTML = resp[site[38]][2].descr;
  document.getElementById(site[38] + "-2-arrival").innerHTML = resp[site[38]][2].arrival;
  document.getElementById(site[38] + "-2-next_arrival").innerHTML = resp[site[38]][2].next_arrival;
  document.getElementById(site[38] + "-3-descr").innerHTML = resp[site[38]][3].descr;
  document.getElementById(site[38] + "-3-arrival").innerHTML = resp[site[38]][3].arrival;
  document.getElementById(site[38] + "-3-next_arrival").innerHTML = resp[site[38]][3].next_arrival;
}

function sequential_get(count){
  if (count < 39){
    newSendRequest(site[count]);
  } else {
    count = 0;
    all_site_status+="}";
    console.log(all_site_status);
    parseJSON(all_site_status);

    all_site_status = {};
  }
}

// sequential_get(0);

setInterval(sequential_get(0), 15000);
