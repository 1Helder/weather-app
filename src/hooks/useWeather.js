import { useState } from "react";
import { getCoordinates, getWeather } from "../services/weatherService";

export function useWeather() {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function searchCity(city) {
    
    try {
      setLoading(true);
      setError(null);

      const coordinates = await getCoordinates(city);
      

      const weatherData = await getWeather(
        coordinates.latitude,
        coordinates.longitude,
      );

      

      setLocation(coordinates);
      setWeather(weatherData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return {
    weather,
    location,
    loading,
    error,
    searchCity,
  };
}
