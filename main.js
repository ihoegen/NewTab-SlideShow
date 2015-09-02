$(document).ready(function () {
    //Show Settings
    $('#settingview').click(function () {
        $('#settingview').hide();
        $('#settings').show();
    });
    //Hide Settings
    $('#settinghide').click(function () {
        $('#settings').hide();
        $('#settingview').show();
    });
    //HideSettings if clicekd outside of it
    $(document).mouseup(function (e)
    {
        var container = $("#settings");
        if (!container.is(e.target) 
                && container.has(e.target).length === 0) 
        {
            container.hide();
            $('#settingview').show();
        }
    });
    //Display Default Search Engine
    var google = $('#google');
    var bing = $('#bing');
    var yahoo = $('#yahoo');
    var testDefault = localStorage.getItem("defaultsearch");
    //Show Yahoo
    if (testDefault === 'yahoo') {
        google.hide();
        bing.hide();
        yahoo.show();
    }
    //Show Bing
    else if (testDefault === 'bing') {
        google.hide();
        bing.show();
        yahoo.hide();
    }
    //Show None
    else if (testDefault === 'nosearch')
    {
        google.hide();
        bing.hide();
        yahoo.hide();
    }
    //Show Google
    else {
        google.show();
        bing.hide();
        yahoo.hide();
    }
    //Change the default Search Engines
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
    $('#nosearch').click(function () {
        google.hide();
        bing.hide();
        yahoo.hide();
        localStorage.setItem("defaultsearch", "nosearch");
    });
    //Change The Weather Location
    $('#weatherLocUpdate').click(function () {
        var weatherInputValue = $("input[name=weatherLocation]").val();
        localStorage.setItem('defaultWeatherLocation', weatherInputValue);
        location.reload();
    });
    //Change the font
    $("#fs").change(function () {
        var userChoiceFont = $(this).val();
        localStorage.setItem('userFont', userChoiceFont);
        var userChoiceFontApp = localStorage.getItem('userFont');
        $('body').css("font-family", userChoiceFontApp);
    });
    //Display Desired Font
    var userChoiceFontApp = localStorage.getItem('userFont');
    $("#fs").val(userChoiceFontApp);
    $('body').css("font-family", userChoiceFontApp);
    $('#settingview').css('font-family', userChoiceFontApp);
    //Change Font Color
    $("#fc").change(function () {
        var userChoiceColor = $('#fc').val();
        localStorage.setItem('userColor', userChoiceColor);
        var userChoiceColorApp = localStorage.getItem('userColor');
        $('body').css("color", userChoiceColorApp);
        $('#weather').css("color", userChoiceColorApp);
        $('#settingview').css('color', userChoiceColorApp);
    });
    //Display Default Color
    var userChoiceColorApp = localStorage.getItem('userColor');
    $("#fc").val(userChoiceColorApp);
    $('body').css("color", userChoiceColorApp);
    $('#weather').css("color", userChoiceColorApp);
    $('#settingview').css('color', userChoiceColorApp);
    //Hide/show the clock
     var dateVar = $('#date');
    var clockVar = $('#clock');
      //Hide Clock
    $("input[name$='clockAction']").click(function () {
        var clockHideorShow = $(this).val();

        if (clockHideorShow === 'show') {
            clockVar.show();
            localStorage.setItem('clockView', 'show');
            $('.searchEngines').css('margin-top', '0px');
        }
        else {
            clockVar.hide();
            localStorage.setItem('clockView', 'hide');
                var dateStatus = localStorage.getItem('dateView');
    var clockStatus = localStorage.getItem('clockView');
            if (dateStatus === 'hide' && clockStatus === 'hide') {
                $('.searchEngines').css('margin-top', '175px');
            }
        }
    });
    //Hide/show date
    $("input[name$='dateAction']").click(function () {
        var dateHideorShow = $(this).val();
        if (dateHideorShow === 'show') {
            dateVar.show();
            localStorage.setItem('dateView', 'show');
            $('.searchEngines').css('margin-top', '0px');
        }
        else {
            dateVar.hide();
            localStorage.setItem('dateView', 'hide');
                var dateStatus = localStorage.getItem('dateView');
    var clockStatus = localStorage.getItem('clockView');
            if (dateStatus === 'hide' && clockStatus === 'hide') {
                $('.searchEngines').css('margin-top', '175px');
            }
        }
    });
    //Onload retrieval of hide and show clock
    clockVar.show();
    var dateStatus = localStorage.getItem('dateView');
    var clockStatus = localStorage.getItem('clockView');
    var dateAction = $('input[name$="dateAction"]');
    var clockAction = $('input[name$="clockAction"]');
    if (dateStatus === 'hide' && clockStatus === 'hide') {
        $('.searchEngines').css('margin-top', '175px');
    }
    if (dateStatus === 'hide') {
        dateVar.hide();
        dateAction.filter('[value=hide]').prop('checked', true);
    }
    else {
        dateVar.show();
        dateAction.filter('[value=show]').prop('checked', true);
    }
    if (clockStatus === 'hide') {
        clockVar.hide();
        clockAction.filter('[value=hide]').prop('checked', true);
    }
    else {
        clockVar.show();
        clockAction.filter('[value=show]').prop('checked', true);
    }
});
//Script for the background
var background = JSON.parse(localStorage["background"]);
function refresh() {
    var backdrop = JSON.parse(localStorage["background"]);
    location.reload();
    if (background.length >= 1) {
        $.backstretch(backdrop, {duration: 6000, fade: 1000});
    }
}
//Adds users Image to backstretch Array
function pushtoarray() {
    var x = $("input[name=image1]").val();
    var re = new RegExp('\\.[pngjif]+', 'g');
    if (re.test(x)) {
        document.getElementById("image").value = "";
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
//Reset background
function clearbg() {
    var cleanbackground = [];
    localStorage["background"] = JSON.stringify(cleanbackground);
    location.reload();
}