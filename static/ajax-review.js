// PART 1: SHOW A FORTUNE

function showFortune(evt) {
  // TODO: get the fortune and show it in the fortune-text div
  evt.preventDefault();
  $.get('/fortune', resp => {
    $('#fortune-text').html(resp);
  });
}

$('#get-fortune-button').on('click', showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();
  const url = `/weather?zipcode=${$('#zipcode-field').val()}`;
  // TODO: request weather with that URL and show the forecast in #weather-info

  $.get(url, resp =>{
    $('#weather-info').html(resp.forecast);
  });
}

$('#weather-form').on('submit', showWeather);
