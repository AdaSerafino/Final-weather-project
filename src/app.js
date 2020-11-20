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



