var backdrop = JSON.parse(localStorage["background"]);
if (backdrop.length >= 1) {
  $.backstretch(backdrop, {
    duration: 5000,
    fade: 750
  });
};
$(document).ready(function() {
  //Show Settings
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
  var testDefault = localStorage.getItem("defaultsearch");
  //Show Yahoo
  if (testDefault === 'yahoo') {
    google.hide();
    bing.hide();
    yahoo.show();
    $('#yset').addClass('buttonActive');
  }
  //Show Bing
  else if (testDefault === 'bing') {
    google.hide();
    bing.show();
    yahoo.hide();
    $('#bset').addClass('buttonActive');
  }
  //Show None
  else if (testDefault === 'nosearch') {
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
  //Change the font
  $("#fs").change(function() {
    var userChoiceFont = $(this).val();
    localStorage.setItem('userFont', userChoiceFont);
    var userChoiceFontApp = localStorage.getItem('userFont');
    $('body').css("font-family", userChoiceFontApp);
  });
  //Display Desired Font
  var userChoiceFontApp = localStorage.getItem('userFont');
  if (userChoiceFontApp !== null) {
    $("#fs").val(userChoiceFontApp);
    $('body').css("font-family", userChoiceFontApp);
    $('#settingview').css('font-family', userChoiceFontApp);
  } else {
    $("#fs").val('Arial');
    $('body').css("font-family", 'Arial');
    $('#settingview').css('font-family', 'Arial');
  };
  //Change the Clock Size
  $("#cs").change(function() {
    var userChoice = $(this).val();
    localStorage.setItem('userClockSize', userChoice);
    var userChoice = localStorage.getItem('userClockSize');
    $('#clock').css("font-size", userChoice);
  });
  //Display Desired Clock Size
  var userChoiceClockSize = localStorage.getItem('userClockSize');
  if (userChoiceClockSize !== null) {
    $("#cs").val(userChoiceClockSize);
    $('#clock').css("font-size", userChoiceClockSize);
  } else {
    $("#cs").val('150px');
    $('#clock').css("font-size", '150px');
  };
  //Change Font Color
  $("#fc").change(function() {
    var userChoiceColor = $('#fc').val();
    localStorage.setItem('userColor', userChoiceColor);
    var userChoiceColorApp = localStorage.getItem('userColor');
    $('body').css("color", userChoiceColorApp);
    $('#weather').css("color", userChoiceColorApp);
    $('#settingview').css('color', userChoiceColorApp);
  });
  //Display Default Color
  var userChoiceColorApp = localStorage.getItem('userColor');
  if (userChoiceColorApp !== null) {
    $("#fc").val(userChoiceColorApp);
    $('body').css("color", userChoiceColorApp);
    $('#weather').css("color", userChoiceColorApp);
    $('#settingview').css('color', userChoiceColorApp);
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
  var dateStatus = localStorage.getItem('dateView');
  var clockStatus = localStorage.getItem('clockView');
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
      var dateStatus = localStorage.getItem('dateView');
      var clockStatus = localStorage.getItem('clockView');
      if (dateStatus === 'hide' && clockStatus === 'hide') {
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
      var dateStatus = localStorage.getItem('dateView');
      var clockStatus = localStorage.getItem('clockView');
      if (dateStatus === 'hide' && clockStatus === 'hide') {
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
  if (dateStatus === 'hide' && clockStatus === 'hide') {
    $('.searchEngines').css('margin-top', '175px');
  }
  if (dateStatus === 'hide') {
    dateVar.hide();
    dateAction.filter('[value=hide]').prop('checked', true);
  } else {
    dateVar.show();
    dateAction.filter('[value=show]').prop('checked', true);
  }
  if (clockStatus === 'hide') {
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
    if (clockFormat == '12') {
      localStorage.setItem('userTime', '12');
      startTime();
    } else {
      localStorage.setItem('userTime', '24');
      startTime();
    }
  });
  var clockFormat = localStorage.getItem('userTime');
  if (clockFormat === '24') {
    $("input[name$='clockFormat']").prop('checked', true);
  }
  startTime();

  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var userTimeChoice = localStorage.getItem('userTime');
    if ((userTimeChoice === '12' || userTimeChoice == null) && h !== 12) {
      h = h % 12;
    };
    if ((userTimeChoice == '12' || userTimeChoice == null) && h == 0) {
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
  var localWeather = localStorage.getItem('defaultWeatherLocation');
  $(document).ready(function() {
    loadWeather(localWeather, ''); //@params location, woeid
  });
  if (localWeather !== null) {
    document.getElementById("weatherInput").value = localWeather.toUpperCase();
  };

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
//Script for the background
var background = JSON.parse(localStorage["background"]);

//Adds users Image to backstretch Array
function pushtoarray() {
  var x = $("input[name=image1]").val();
  var re = new RegExp('\\.[pngjif]+', 'g');
  if (re.test(x)) {
    document.getElementById("image").value = "";
    background.push(x);
    localStorage["background"] = JSON.stringify(background);
    alert('Image was added successfully!');
    location.reload();
    return false;
  } else {
    alert('Make sure the image has an ending of .png, .gif, or .jpg');
    return false;
  }
}
//Reset background
function clearbg() {
  var cleanbackground = [];
  localStorage["background"] = JSON.stringify(cleanbackground);
  location.reload();
}
