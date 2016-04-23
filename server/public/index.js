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
var site = [101,102,103,104,105,106,107,108,109,110,
            111,112,113,114,115,116,117,118,119,120,
            121,122,123,124,
            201,202,203,204,205,206,207,208,209,210,
            211,212,213,214,
            999];//39
var parseJSON = function (resp){
  resp = JSON.parse(resp);
  for(var i = 0; i < 39; i++){
    console.log(site[i]);
    document.getElementById(site[i]).innerHTML = site[i];
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
  // console.log("test = " + resp[site[38]][2].descr);
  // console.log("test = " + resp[site[38]][2].arrival);
  // console.log("test = " + resp[site[38]][2].next_arrival);
  // console.log("test = " + resp[site[38]][3].descr);
  // console.log("test = " + resp[site[38]][3].arrival);
  // console.log("test = " + resp[site[38]][3].next_arrival);
}
