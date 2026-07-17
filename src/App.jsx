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
      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-white text-center text-5xl mb-9 font-bold">
          How's the sky looking today?
        </h1>
        <SearchBar onSearch={searchCity} />
        {loading && <p>Pesquisando... aguarde um momento</p>}
        {error && <p>Cidade não encontrada, tente novamente</p>}

        <div className="flex gap-6">
          <div className="basis-2/3">
            {weather && location && (
              <WeatherCard
                city={location.name}
                country={location.country}
                weather={`${weather.current.temperature_2m}°`}
                weekDay={getWeekDay(weather.current.time)}
                monthDay={getMonthDay(weather.current.time)}
                year={getYear(weather.current.time)}
                feelsLike={weather.current.apparent_temperature}
                humidity={`${weather.current.relative_humidity_2m}%`}
                wind={`${weather.current.wind_speed_10m} km/h`}
                precipitation={`${weather.current.precipitation} mm`}
              />
            )}
            <DailyForecast days={days} />
          </div>
          <div className="basis-1/3">
            <HourlyForecast hoursByDay={hoursByDay} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
