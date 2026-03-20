import React, { useState, useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

const apiKey = "YOUR_API_KEY";

function SearchBar() {
  const [city, setCity] = useState("");
  const { setWeather, setLoading } = useContext(WeatherContext);

  const handleSearch = async () => {
    if (!city) return;

    setLoading(true);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );

      const data = await res.json();
      setWeather(data);

    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;