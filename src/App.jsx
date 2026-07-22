import DailyForecast from "./components/DailyForecast";
import HourlyForecast from "./components/HourlyForecast";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import { useWeather } from "./hooks/useWeather";
import { getWeekDay, getMonthDay, getYear } from "./utils/date";

function App() {
  const { weather, location, loading, error, searchCity } = useWeather();

  const days = weather
    ? weather.daily.time.map((time, i) => ({
        id: i,
        weekDay: getWeekDay(weather.daily.time[i]),
        maxTemp: weather.daily.temperature_2m_max[i],
        minTemp: weather.daily.temperature_2m_min[i],
        weather: weather.daily.weather_code[i],
      }))
    : [];

  const hoursByDay = weather
    ? weather.hourly.time.reduce((acc, time, i) => {
        const date = time.slice(0, 10);
        if (!acc[date]) acc[date] = [];
        acc[date].push({
          hour: time.slice(11, 16),
          temp: weather.hourly.temperature_2m[i],
          weather: weather.hourly.weather_code[i],
        });
        return acc;
      }, {})
    : {};

  return (
    <div className="bg-[#02012b] min-h-screen">
      <div className="px-4 py-6 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-white text-center font-bold mb-8 text-4xl sm:text-5xl lg:text-6xl">
          How's the sky looking today?
        </h1>
        <SearchBar onSearch={searchCity} />
        {loading && <p className="text-yellow-500">Pesquisando... aguarde um momento</p>}
        {error && <p className="text-red-600">Cidade não encontrada, tente novamente</p>}

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:basis-2/3">
            {weather && location && (
              <WeatherCard
                city={location.name}
                country={location.country}
                weather={`${Math.floor(weather.current.temperature_2m)}°`}
                weekDay={getWeekDay(weather.current.time)}
                monthDay={getMonthDay(weather.current.time)}
                year={getYear(weather.current.time)}
                feelsLike={`${Math.floor(weather.current.apparent_temperature)}°`}
                humidity={`${weather.current.relative_humidity_2m}%`}
                wind={`${weather.current.wind_speed_10m} km/h`}
                precipitation={`${weather.current.precipitation} mm`}
              />
            )}
            <DailyForecast days={days} />
          </div>
          <div className="w-full lg:basis-1/3">
            <HourlyForecast hoursByDay={hoursByDay} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
