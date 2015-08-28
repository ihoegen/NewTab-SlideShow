function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('txt').innerHTML = h + ":" + m;
    var t = setTimeout(function () {
        startTime()
    }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }
    ;
    return i;
}
;
var d = new Date();
document.getElementById("date").innerHTML = d.toDateString();
/* Weather Code
 
 // Docs at http://simpleweatherjs.com
var wLoc='Seattle';
$(document).ready(function() {
  $.simpleWeather({
    location: wLoc,
    woeid: '',
    unit: 'f',
    success: function(weather) {
      html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';
  
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});

    */
    