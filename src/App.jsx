import DailyForecast from "./components/DailyForecast";
import HourlyForecast from "./components/HourlyForecast";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

function App() {
  const arrowFunction = (city) => {
    console.log(city);
  };

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
      <SearchBar onSearch={arrowFunction} />

      <div className="flex gap-6">
        <div className="basis-2/3">
          <WeatherCard
            city="Salvador"
            country="BR"
            weather="32°"
            weekDay="Friday"
            monthDay={9}
            year={2026}
            feelsLike={30}
            humidity="46%"
            wind="9 mph"
            precipitation="0 in"
          />
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
