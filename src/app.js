function convertToFahrenheit(event) {
  event.preventDefault();
  let temp = document.querySelector("#forecast-farenheit");
  temp.innerHTML = "°F";
}

function convertToCelsius(event) {
  event.preventDefault();
  let temp = document.querySelector("#forecast");
  temp.innerHTML = "°C";
}

let fahrenLink = document.querySelector("#forecast-farenheit");
fahrenLink.addEventListener("click", convertToFahrenheit);

let CelLink = document.querySelector("#forecast");
CelLink.addEventListener("click", convertToCelsius);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let showTemp = document.querySelector("#forecast-farenheit");
  showTemp.innerHTML = temperature;
  let cityname = response.data.name;
  let showCityName = document.querySelector("#city");
  showCityName.innerHTML = cityname;
}
