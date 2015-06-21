
// Nightly check for new units
chrome.runtime.onInstalled.addListener(function(d){
    if(d.reason == "install"){
        chrome.alarms.create('scoop',{
          when: Date.now(),
          periodInMinutes: 1440.0
        });
    }
});

chrome.alarms.onAlarm.addListener(function (alarm) {
    console.log('Fired alarm!');
    if (alarm.name == 'scoop') {
        scoopdate();
    }
});

function scoopdate(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://www.aychoi.com/scoop.json', true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      var resp = JSON.parse(xhr.responseText);
      console.log(resp);
      chrome.storage.sync.set({'ad_units':resp.ad_units,'roll_threshold':resp.roll_threshold});
    }
  }
  xhr.send();
}

