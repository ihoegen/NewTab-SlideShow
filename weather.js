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
/* Code for the Location Based Weather
navigator.geolocation.getCurrentPosition(function (position) {
        loadWeather(position.coords.latitude + ',' + position.coords.longitude);
    });
    $(document).ready(function () {
        loadWeather('', '');
    });
    function loadWeather(location, woeid) {
        $.simpleWeather({location: location, woeid: woeid, unit: 'f', success: function (weather) {
                html = '<h2><i class="icon-' + weather.code + '"></i> ' + weather.temp + '&deg;' + weather.units.temp + '</h2>';
                $('#weather').html(html);
            }, error: function (error) {
                $('#weather').html('<p>' + error + '</p>');
            }});
    }
    if (document.location.search.match(/type=embed/gi)) {
        window.parent.postMessage("resize", "*");
    }
    */
    