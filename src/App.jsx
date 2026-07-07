import DailyForecast from "./components/DailyForecast";
import HourlyForecast from "./components/HourlyForecast";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import { useWeather } from "./hooks/useWeather";

function App() {
	const {weather,location,loading,error,searchCity} = useWeather()

  const days = [
    { id: 1, weekDay: "Tue", minTemp: 14, maxTemp: 20, weather: "Sunny" },
    { id: 2, weekDay: "Wed", minTemp: 15, maxTemp: 21, weather: "Sunny" },
    { id: 3, weekDay: "Thu", minTemp: 14, maxTemp: 24, weather: "Sunny" },
    { id: 4, weekDay: "Fri", minTemp: 13, maxTemp: 25, weather: "Sunny" },
    { id: 5, weekDay: "Sat", minTemp: 15, maxTemp: 21, weather: "Sunny" },
    { id: 6, weekDay: "Sun", minTemp: 16, maxTemp: 25, weather: "Sunny" },
    { id: 7, weekDay: "Mon", minTemp: 15, maxTemp: 24, weather: "Sunny" },
  ];

  return (
    <div className="bg-[#02012b] min-h-screen">

    <div className="p-6 max-w-6xl mx-auto" >
      <h1 className="text-white text-center text-5xl mb-9 font-bold">How's the sky looking today?</h1>
      <SearchBar onSearch={searchCity} />

      <div className="flex gap-6">
        <div className="basis-2/3">
		{weather && location && (
          <WeatherCard
            city={location.name}
            country={location.country}
            weather={`${weather.current.temperature_2m}°`}
            weekDay="Friday"
            monthDay={9}
            year={2026}
            feelsLike={weather.current.temperature_2m} // ou apparent_temperature, se eu adicionar esse campo na API
            humidity={`${weather.current.relative_humidity_2m}%`}
            wind={`${weather.current.wind_speed_10m} km/h`}
            precipitation={`${weather.current.precipitation} mm`}
          />
		)}
          <DailyForecast days={days} />
        </div>
        <div className="basis-1/3">
          <HourlyForecast />
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default App;
