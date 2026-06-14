import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

function App() {
  const arrowFunction = (city) => {
    console.log(city);
  };

  return (
    // <div className="bg-blue-600 text-white">
    //   tailwind funcionando
    // </div>
    <div>
      <SearchBar onSearch={arrowFunction} />
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
    </div>
  );
}

export default App;
