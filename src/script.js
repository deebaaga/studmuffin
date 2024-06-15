window.onload = function () {
  let ctime = new Date();
  let hour = ctime.getHours();
  let mins = ctime.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[ctime.getDay()];

  let currenttime = document.querySelector("#time");
  currenttime.innerHTML = `${day} ${hour}:${mins} ,`;

  function displayTemp(response) {
    let temperature = Math.round(response.data.temperature.current);
    let city = response.data.city;

    let description = response.data.condition.description;

    let tempp = document.querySelector("#degree");
    tempp.innerHTML = `${temperature}`;

    let placee = document.querySelector("#cityy");
    placee.innerHTML = `${city}`;

    let feelss = document.querySelector("#feels");
    feelss.innerHTML = `${description}`;
  }
  function cityinput(event) {
    event.preventDefault();
    let city = document.querySelector(".search-inp").value;
    let apiKey = "ba24ot429e5023e68078f3c73b9cdf5d";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(displayTemp);
  }
  document.querySelector("form").addEventListener("submit", cityinput);
};
