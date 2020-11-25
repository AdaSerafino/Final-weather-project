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

let tPlusOne = document.querySelector("#tplus1")
let tPlusTwo = document.querySelector("#tplus2")
let tPlusThree = document.querySelector("#tplus3")

if (day === "Monday") { tPlusOne.innerHTML = "Wed"; tPlusTwo.innerHTML = "Thurs"; tPlusThree.innerHTML = "Fri";} 
else if (day === "Tuesday") {tPlusOne.innerHTML = "Thurs"; tPlusTwo.innerHTML = "Fri"; tPlusThree.innerHTML = "Sat";} 
else if (day === "Wednesday") {tPlusOne.innerHTML = "Fri"; tPlusTwo.innerHTML = "Sat"; tPlusThree.innerHTML = "Sun";}
else if (day === "Thursday") {tPlusOne.innerHTML = "Sat"; tPlusTwo.innerHTML = "Sun"; tPlusThree.innerHTML = "Mon";}
else if (day === "Friday") {tPlusOne.innerHTML = "Sun"; tPlusTwo.innerHTML = "Mon"; tPlusThree.innerHTML = "Tue";}
else if (day === "Saturday") {tPlusOne.innerHTML = "Mon"; tPlusTwo.innerHTML = "Tue"; tPlusThree.innerHTML = "Wed";}
else if (day === "Sunday") {tPlusOne.innerHTML = "Tue"; tPlusTwo.innerHTML = "Wed"; tPlusThree.innerHTML = "Thurs";}






let apiKey = "5967aac478c61d8681bc0238c6fbf1df";

function searchCity(city) {
    let apiBase = "https://api.openweathermap.org/data/2.5/weather";
    let apiUrl = `${apiBase}?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
    axios.get(apiUrl).then(changeIcon);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#search-text-input").value;
    searchCity(city);
  }
  
  let form = document.querySelector("#search-bar");
  form.addEventListener("submit", handleSubmit);
  

  function showWeather(response) {
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(
      response.data.main.temp
    );
    document.querySelector("#humidity").innerHTML = response.data.main.humidity;
    document.querySelector("#wind").innerHTML = Math.round(
      response.data.wind.speed
    );
  }
  
  function CurrentPosition(position) {
    let apiBase = "https://api.openweathermap.org/data/2.5/weather";
    let apiUrl = `${apiBase}?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }
  
  function locate(event) {
    navigator.geolocation.getCurrentPosition(CurrentPosition);
  }
  
  let locationButton = document.querySelector("#currentButton");
  locationButton.addEventListener("click", locate);

  





  
  
  function changeIcon(response) {
    let icon = `${response.data.weather[0].icon}`;
    let iconElement = document.querySelector("#iconNow");
  
    if (icon === "11d") {
      iconElement.innerHTML = "⛈";
    } else {
      if (icon === "09d") {
        iconElement.innerHTML = "🌧";
      } else {
        if (icon === "10d") {
          iconElement.innerHTML = "🌦";
        } else {
          if (icon === "13d") {
            iconElement.innerHTML = "🌨";
          } else {
            if (icon === "13d") {
              iconElement.innerHTML = "❄";
            } else {
              if (icon === "50d") {
                iconElement.innerHTML = "🌫";
              } else {
                if (icon === "01d") {
                  iconElement.innerHTML = "☀";
                } else {
                  if (icon === "02d") {
                    iconElement.innerHTML = "🌤";
                  } else {
                    if (icon === "03d") {
                      iconElement.innerHTML = "🌤";
                    } else {
                      if (icon === "04d" && "04n") {
                        iconElement.innerHTML = "☁";
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }






  searchCity("Rome");








