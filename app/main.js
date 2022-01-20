const input = document.querySelector("#submit-button");
input.addEventListener("input", getWeather);
document.addEventListener("DOMContentLoaded", getWeather);

(function inputOnEnter() {
  document.querySelector("input").addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
      getWeather();
      console.log(this.value);
    }
  });
})();

function getWeather() {
  const currentCity = document.querySelector("#current-city");
  const icon = document.querySelector(".weather-icon");
  const secondIcon = document.querySelector(".weather-icon-2");

  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${currentCity.value}&units=metric&appid=380f03b208bd585916187a1841f5e5a7`
  )
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      console.log(data);
      document.querySelector(".temperature").innerHTML =
        Math.round(data.main.temp) + "&degC";
      document.querySelector(".humidity-number").innerHTML = data.main.humidity;
      document.querySelector(".weather-main").innerHTML = data.weather[0].main;
      icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      secondIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    })
    .catch(function () {});
}
