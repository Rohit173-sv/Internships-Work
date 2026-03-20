import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import Loader from "./Loader";

function WeatherCard() {
  const { weather, loading } = useContext(WeatherContext);

  if (loading) return <Loader />;

  if (!weather) return <p>No data yet</p>;

  return (
    <div className="card">
      <h2>{weather.name}</h2>
      <p>{weather.main.temp} °C</p>
      <p>{weather.weather[0].main}</p>
    </div>
  );
}

export default WeatherCard;