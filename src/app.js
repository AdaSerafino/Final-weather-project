let now = new Date();

let h2 = document.querySelector("h2");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let day = days[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

h2.innerHTML = `${day}, ${hour}:${minutes} `;

function formatHours(timestamp) {
  let date= new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {hours = `0${hours}`}

  let minutes = date.getMinutes()
  if (minutes < 10) {minutes =`0${minutes}`}
  
  return `${hours}:${minutes}`}

let apiKey = "5967aac478c61d8681bc0238c6fbf1df";

function searchCity(city) {

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
   

    apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayForecast);

  }

  function handleSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#search-text-input").value;
    searchCity(city);
    
  }


  function showWeather(response) {
    
    let iconElement = document.querySelector("#icon")
    let cityElement =document.querySelector("#city");
    let humidityElement =  document.querySelector("#humidity");
    let temperatureElement = document.querySelector("#temperature");
    let windElement = document.querySelector("#wind");


    cityElement.innerHTML = response.data.name;
    temperatureElement.innerHTML = Math.round(response.data.main.temp );
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = Math.round( response.data.wind.speed );
    iconElement.setAttribute("src" , `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)
     
     celsiusTemperature= response.data.main.temp;
  }
  



function  displayForecast(response) {console.log(response.data);
  let forecastElement= document.querySelector("#forecast");
  forecastElement.innerHTML = null;
  let forecast = null;
 

  for (let index=0; index < 5; index++ ) {
  let forecast = response.data.list[index];
  forecastElement.innerHTML += 
  
  `<div class="col-2">
<h3>${formatHours(forecast.dt * 1000)} </h3>
<img src= "http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png">
<div class="weather-forecast-temperature">
<strong>${Math.round(forecast.main.temp_max)}°</strong> ${Math.round(forecast.main.temp_min)}°
 </div>
</div>`;
  }
 


}
  
  let form = document.querySelector("#search-bar");
  form.addEventListener("submit", handleSubmit);
  
function showFar(event) {
  event.preventDefault;
  let farTemp = Math.round((celsiusTemperature * 9) / 5 + 32);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML =farTemp;
}

function showCel(event) {
  event.preventDefault;
  let temperatureElement = document.querySelector("#temperature");
temperatureElement.innerHTML = Math.round(celsiusTemperature);
}


  function CurrentPosition(position) {
    let apiBase = "https://api.openweathermap.org/data/2.5/weather";
    let apiUrl = `${apiBase}?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);

    apiUrl =`https://api.openweathermap.org/data/2.5/forecast?lat=
    ${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayForecast);
  }
  
let celsiusTemperature = null;

  function locate(event) {
    navigator.geolocation.getCurrentPosition(CurrentPosition);
  }
  
  let locationButton = document.querySelector("#currentButton");
  locationButton.addEventListener("click", locate);

  
let farLink =document.querySelector("#f-link");
farLink.addEventListener("click", showFar);

let celLink = document.querySelector("#c-link");
celLink.addEventListener("click", showCel);

function ShowTokyo(event) {  

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(showWeather);

apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Tokyo&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayForecast);
}

let tokyo = document.querySelector("#tokyo");
tokyo.addEventListener("click", ShowTokyo);


function showMadrid(event) {  

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(showWeather);

apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Madrid&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayForecast);
}

let newyork = document.querySelector("#madrid");
newyork.addEventListener("click", showMadrid);

function showParis(event) {  

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(showWeather);

apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Paris&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayForecast);
}

let paris = document.querySelector("#paris");
paris.addEventListener("click", showParis);




  searchCity("Rome");

  

