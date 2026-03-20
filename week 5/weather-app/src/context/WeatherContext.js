import React, { createContext, useState } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <WeatherContext.Provider value={{ weather, setWeather, loading, setLoading }}>
      {children}
    </WeatherContext.Provider>
  );
};