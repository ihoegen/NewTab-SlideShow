
$(document).ready(function () {
    $('#bing').hide();
    $('#yahoo').hide();
    $('#successmessage').hide();
    $('#settinghide').hide();
    $('#settings').hide();
    $('#errormessage').hide();
    $('#settingview').click(function () {
        $('#settinghide').show();
        $('#settingview').hide();
        $('#settings').show();
    });
    $('#settinghide').click(function () {
        $('#settingview').show();
        $('#settinghide').hide();
        $('#settings').hide();
    });
    var google = $('#google');
    var bing = $('#bing');
    var yahoo = $('#yahoo');
    var testDefault = localStorage.getItem("defaultsearch");
    if (testDefault === 'yahoo') {
        google.hide();
        bing.hide();
        yahoo.show();
    }
    else if (testDefault === 'bing') {
        google.hide();
        bing.show();
        yahoo.hide();
    } else {
        google.show();
        bing.hide();
        yahoo.hide();
    }
    $('#gset').click(function () {
        google.show();
        bing.hide();
        yahoo.hide();
        localStorage.setItem("defaultsearch", "google");
    });
    $('#yset').click(function () {
        google.hide();
        bing.hide();
        yahoo.show();
        localStorage.setItem("defaultsearch", "yahoo");
    });
    $('#bset').click(function () {
        google.hide();
        bing.show();
        yahoo.hide();
        localStorage.setItem("defaultsearch", "bing");
    });
});
var background = JSON.parse(localStorage["background"]);
function refresh() {
    var backdrop = JSON.parse(localStorage["background"]);
           location.reload();
    if (background.length >= 1) {
        $.backstretch(backdrop, {duration: 6000, fade: 1000});
     
    }

}
function pushtoarray() {
    var x = $("input[name=image1]").val();
    var re = new RegExp('\\.[pngjif]+', 'g');
    if (re.test(x)) {
        document.getElementById("image").value = "http://imgur.com/";
        background.push(x);
        localStorage["background"] = JSON.stringify(background);
        $('#successmessage').show();
        refresh();
    }
    else {
        $('#errormessage').show();
    }
}
var backdrop = JSON.parse(localStorage["background"]);
if (backdrop.length >= 1) {
    $.backstretch(backdrop, {duration: 5000, fade: 750});
}

;
function clearbg() {
    var cleanbackground = [];
    localStorage["background"] = JSON.stringify(cleanbackground);
    location.reload();
}