var today = new Date();
var h = today.getHours();
var m = today.getMinutes();
m = checkTime(m);
document.getElementById('txt').innerHTML = h + ":" + m;
var t = setTimeout(function () {
    startTime();
}, 500);
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    ;
    return i;
}
;
var d = new Date();
document.getElementById("date").innerHTML = d.toDateString();

// Weather Code
var localWeather = localStorage.getItem('defaultWeatherLocation');
$(document).ready(function () {
    loadWeather(localWeather, ''); //@params location, woeid
});        
document.getElementById("weatherInput").value = localWeather;


function loadWeather(location, woeid) {
    $.simpleWeather({
        location: location,
        woeid: woeid,
        unit: 'f',
        success: function (weather) {
            html = '<h2><i class="icon-' + weather.code + '"></i> ' + weather.temp + '&deg;' + weather.units.temp + '</h2>';
            html += '<h3>' + weather.city + ', ' + weather.region + '</h3>';

            $("#weather").html(html);
        },
        error: function (error) {
            $("#weather").html('<p>' + error + '</p>');
        }
    });
}
