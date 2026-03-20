const apiKey = "YOUR_API_KEY";

const button = document.getElementById("searchBtn");
const input = document.getElementById("cityInput");
const result = document.getElementById("result");

button.addEventListener("click", getWeather);

async function getWeather() {
  const city = input.value;

  if (!city) {
    result.innerHTML = "Please enter a city";
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    displayWeather(data);

  } catch (error) {
    result.innerHTML = error.message;
  }
}

function displayWeather(data) {
  const temp = data.main.temp;
  const city = data.name;
  const condition = data.weather[0].main;

  result.innerHTML = `
    <h2>${city}</h2>
    <p>Temperature: ${temp}°C</p>
    <p>Condition: ${condition}</p>
  `;
}