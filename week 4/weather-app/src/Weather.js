import React, { useState } from "react";

const apiKey = "YOUR_API_KEY";

function Weather() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const getWeather = async () => {
    if (!city) return;

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );

      if (!res.ok) throw new Error("City not found");

      const result = await res.json();
      setData(result);
      setError("");

    } catch (err) {
      setError(err.message);
      setData(null);
    }
  };

  return (
    <div className="weather-box">

      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getWeather}>Search</button>

      {error && <p className="error">{error}</p>}

      {data && (
        <div className="result">
          <h2>{data.name}</h2>
          <p>{data.main.temp} °C</p>
          <p>{data.weather[0].main}</p>
        </div>
      )}

    </div>
  );
}

export default Weather;