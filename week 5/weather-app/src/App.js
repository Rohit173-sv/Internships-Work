import React from "react";
import { WeatherProvider } from "./context/WeatherContext";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

function App() {
  return (
    <WeatherProvider>
      <div className="app">
        <h1>Advanced Weather App</h1>
        <SearchBar />
        <WeatherCard />
      </div>
    </WeatherProvider>
  );
}

export default App;