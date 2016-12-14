var visitCount = localStorage.getItem('visit');
if (visitCount !== '1') {
  localStorage.setItem('visit', '1');
  var background = [];
  localStorage["background"] = JSON.stringify(background);

}
//Script for the background
var background = JSON.parse(localStorage["background"]);

//Adds users Image to backstretch Array
function pushtoarray() {
  var x = $("input[name=image1]").val();
  var pictureArray = x.split(",");
  console.log(pictureArray);
  var re = new RegExp('\\.[pngjif]+', 'g');
  for (var i = 0; i < pictureArray.length; i++) {
    if (re.test(pictureArray[i].trim())) {
      document.getElementById("image").value = "";
      background.push(pictureArray[i].trim());
      localStorage["background"] = JSON.stringify(background);
    }
  }
  location.reload();
  return false;
}
var backdrop = JSON.parse(localStorage["background"]);
if (backdrop.length >= 1) {
  var duration = 5000;
  if (localStorage.getItem('delayTime')) {
    duration = parseInt(localStorage.getItem('delayTime')) * 1000;
  }
  $.backstretch(backdrop, {
    duration: duration,
    fade: 750
  });
};
//Reset background
function clearbg() {
  var cleanbackground = [];
  localStorage["background"] = JSON.stringify(cleanbackground);
  location.reload();
}
$(document).ready(function() {
  //Show Settings
  var user = {
    searchEngine: localStorage.getItem("defaultsearch"),
    localWeather: localStorage.getItem('defaultWeatherLocation'),
    font: localStorage.getItem('userFont'),
    clockSize: localStorage.getItem('userClockSize'),
    color: localStorage.getItem('userColor'),
    clockStatus: localStorage.getItem('clockView'),
    dateStatus: localStorage.getItem('dateView'),
    clockFormat: localStorage.getItem('userTime'),
    time: localStorage.getItem('userTime')
  }
  $('#settingview').click(function() {
    $('#settingview').hide();
    $('#settings').show();
  });
  //Hide Settings
  $('#settinghide').click(function() {
    $('#settings').hide();
    $('#settingview').show();
  });
  //HideSettings if clicekd outside of it
  $(document).mouseup(function(e) {
    var container = $("#settings");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.hide();
      $('#settingview').show();
    }
  });
  //Display Default Search Engine
  var google = $('#google');
  var bing = $('#bing');
  var yahoo = $('#yahoo');
  //Show Yahoo
  if (user.searchEngine === 'yahoo') {
    google.hide();
    bing.hide();
    yahoo.show();
    $('#yset').addClass('buttonActive');
  }
  //Show Bing
  else if (user.searchEngine === 'bing') {
    google.hide();
    bing.show();
    yahoo.hide();
    $('#bset').addClass('buttonActive');
  }
  //Show None
  else if (user.searchEngine === 'nosearch') {
    google.hide();
    bing.hide();
    yahoo.hide();
    $('#nosearch').addClass('buttonActive');
  }
  //Show Google
  else {
    google.show();
    bing.hide();
    yahoo.hide();
    $('#gset').addClass('buttonActive');
  }
  //Change the default Search Engines
  $('#gset').click(function() {
    google.show();
    bing.hide();
    yahoo.hide();
    localStorage.setItem("defaultsearch", "google");
    $('button').removeClass('buttonActive');
    $(this).addClass('buttonActive');
  });
  $('#yset').click(function() {
    google.hide();
    bing.hide();
    yahoo.show();
    localStorage.setItem("defaultsearch", "yahoo");
    $('button').removeClass('buttonActive');
    $(this).addClass('buttonActive');
  });
  $('#bset').click(function() {
    google.hide();
    bing.show();
    yahoo.hide();
    localStorage.setItem("defaultsearch", "bing");
    $('button').removeClass('buttonActive');
    $(this).addClass('buttonActive');
  });
  $('#nosearch').click(function() {
    google.hide();
    bing.hide();
    yahoo.hide();
    localStorage.setItem("defaultsearch", "nosearch");
    $('button').removeClass('buttonActive');
    $(this).addClass('buttonActive');
  });
  //Change The Weather Location
  $('#weatherLocationForm').submit(function() {
    var weatherInputValue = $("input[name=weatherLocation]").val();
    localStorage.setItem('defaultWeatherLocation', weatherInputValue);
    location.reload();
    return false;
  });
  $('#slideShowDelay').submit(function() {
    var delayInput = $("input[name=slideShowDelay]").val();
    localStorage.setItem('delayTime', delayInput);
    location.reload();
    return false;
  });
  //Change the font
  $("#fs").change(function() {
    var userChoiceFont = $(this).val();
    localStorage.setItem('userFont', userChoiceFont);
    $('body').css("font-family", userChoiceFont);
  });
  //Display Desired Font
  if (user.font !== null) {
    $("#fs").val(user.font);
    $('body').css("font-family", user.font);
    $('#settingview').css('font-family', user.font);
  } else {
    $("#fs").val('Arial');
    $('body').css("font-family", 'Arial');
    $('#settingview').css('font-family', 'Arial');
  };
  //Change the Clock Size
  $("#cs").change(function() {
    var userChoice = $(this).val();
    localStorage.setItem('userClockSize', userChoice);
    $('#clock').css("font-size", userChoice);
    location.reload();
  });
  //Display Desired Clock Size
  if (user.clockSize !== null) {
    $("#cs").val(user.clockSize);
    $('#clock').css("font-size", user.clockSize);
  } else {
    $("#cs").val('150px');
    $('#clock').css("font-size", '150px');
  };
  //Change Font Color
  $("#fc").change(function() {
    var userColor = $('#fc').val();
    localStorage.setItem('userColor', userColor);
    $('body').css("color", userColor);
    $('#weather').css("color", userColor);
    $('#settingview').css('color', userColor);
  });
  //Display Default Color
  if (user.color !== null) {
    $("#fc").val(user.color);
    $('body').css("color", user.color);
    $('#weather').css("color", user.color);
    $('#settingview').css('color', user.color);
  } else {
    $("#fc").val('White');
    $('body').css("color", 'white');
    $('#weather').css("color", 'white');
    $('#settingview').css('color', 'white');
  }
  //Hide/show the clock
  var dateVar = $('#date');
  var clockVar = $('#clock');
  var weatherVar = $('#weather');
  //Hide Clock
  var weatherStatus = localStorage.getItem('weatherView');
  $("input[name$='clockAction']").click(function() {
    var clockHideorShow = $(this).val();
    if (clockHideorShow === 'show') {
      clockVar.show();
      localStorage.setItem('clockView', 'show');
      $('.searchEngines').css('margin-top', '0px');
    } else {
      clockVar.hide();
      localStorage.setItem('clockView', 'hide');
      user.dateStatus = localStorage.getItem('dateView');
      user.clockStatus = localStorage.getItem('clockView');
      if (user.dateStatus === 'hide' && user.clockStatus === 'hide') {
        $('.searchEngines').css('margin-top', '175px');
      }
    }
  });
  //Hide/show date
  $("input[name$='dateAction']").click(function() {
    var dateHideorShow = $(this).val();
    if (dateHideorShow === 'show') {
      dateVar.show();
      localStorage.setItem('dateView', 'show');
      $('.searchEngines').css('margin-top', '0px');
    } else {
      dateVar.hide();
      localStorage.setItem('dateView', 'hide');
      user.dateStatus = localStorage.getItem('dateView');
      user.clockStatus = localStorage.getItem('clockView');
      if (user.dateStatus === 'hide' && user.clockStatus === 'hide') {
        $('.searchEngines').css('margin-top', '175px');
      }
    }
  });
  //Show/hide weather
  $("input[name$='weatherAction']").click(function() {
    var weatherHideorShow = $(this).val();
    if (weatherHideorShow === 'show') {
      weatherVar.show();
      localStorage.setItem('weatherView', 'show');
    } else {
      weatherVar.hide();
      localStorage.setItem('weatherView', 'hide');
    }
  });
  //Onload retrieval of hide and show clock
  var dateAction = $('input[name$="dateAction"]');
  var clockAction = $('input[name$="clockAction"]');
  var weatherAction = $('input[name$="weatherAction"]');
  if (user.dateStatus === 'hide' && user.clockStatus === 'hide') {
    $('.searchEngines').css('margin-top', '175px');
  }
  if (user.dateStatus === 'hide') {
    dateVar.hide();
    dateAction.filter('[value=hide]').prop('checked', true);
  } else {
    dateVar.show();
    dateAction.filter('[value=show]').prop('checked', true);
  }
  if (user.clockStatus === 'hide') {
    clockVar.hide();
    clockAction.filter('[value=hide]').prop('checked', true);
  } else {
    clockVar.show();
    clockAction.filter('[value=show]').prop('checked', true);
  }
  if (weatherStatus === 'hide') {
    weatherVar.hide();
    weatherAction.filter('[value=hide]').prop('checked', true);
  } else {
    weatherVar.show();
    weatherAction.filter('[value=show]').prop('checked', true);
  }
  $('input[name="weatherLocation"]').mouseup(function(e) {
    return false;
  });
  $("input[name='weatherLocation']").focus(function() {
    $(this).select();
  });
  //Clock
  $("input[name$='clockFormat']").click(function() {
    var clockFormat = $(this).val();
    if (clockFormat === '12') {
      localStorage.setItem('userTime', '12');
      startTime();
    } else {
      localStorage.setItem('userTime', '24');
      startTime();
    }
  });
  if (user.clockFormat === '24') {
    $("input[name$='clockFormat']").prop('checked', true);
  }
  startTime();

  function startTime() {
    user.time = localStorage.getItem('userTime');
    var today = new Date();
    var h = today.getHours();
    if ((user.time === '12' || user.time === null) && h !== 12) {
      h = h % 12;
    };
    if ((user.time === '12' || user.time === null) && h === 0) {
      h = 12;
    };
    var m = today.getMinutes();
    m = checkTime(m);
    if (h === 0) {
      h = '00';
    }
    document.getElementById('clock').innerHTML = h + ":" + m;
    var t = setTimeout(function() {
      startTime();
    }, 500);
  }

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    };
    return i;
  };
  //Date
  var d = new Date();
  document.getElementById("date").innerHTML = d.toDateString();
  // Weather Code
  $(document).ready(function() {
    loadWeather(user.localWeather, ''); //@params location, woeid
  });
  if (user.localWeather !== null) {
    document.getElementById("weatherInput").value = user.localWeather.toUpperCase();
  };
  document.getElementById("delayInput").value = localStorage.getItem('delayTime') || '5';


  function loadWeather(location, woeid) {
    $.simpleWeather({
      location: location,
      woeid: woeid,
      unit: 'f',
      success: function(weather) {
        html = '<h2><i class="icon-' + weather.code + '"></i> ' + weather.temp + '&deg;' + weather.units.temp + '</h2>';
        html += '<h3>' + weather.city + ', ' + weather.region + '</h3>';
        $("#weather").html(html);
      },
      error: function(error) {
        $("#weather").html('<p>' + error + '</p>');
      }
    });
  }
  $('#image').keypress(function(e) {
    var key = e.which;
    if (key === 13) // the enter key code
    {
      pushtoarray();
    }
  });
  var listOfPics = backdrop;
  var list = listOfPics.join([separator = ' <br> <br>']);
  $('#imageList').html(list);

  $('#showList').click(function() {
    $('#imageList').show();
    $(this).hide();
    $('#hideList').show();
  });
  $('#hideList').click(function() {
    $('#imageList').hide();
    $(this).hide();
    $('#showList').show();
  });
});
