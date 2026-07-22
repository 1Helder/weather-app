export async function getCoordinates(city) {
  const [cityName, state] = city.split(/[-,]/).map((text) => text.trim());

  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=10&language=pt&format=json`,
  );

  const data = await response.json();
  console.log(data.results);

  if (!data.results || data.results.length === 0) {
    throw new Error("Cidade não encontrada");
  }

  let location;

  if (state) {
    location = data.results.find(
      (item) =>
        item.name.toLowerCase() === cityName.toLowerCase() &&
        item.admin1.toLowerCase() === state.toLowerCase(),
    );
  } else {
    location = data.results.find(
      (item) => item.name.toLowerCase() === cityName.toLowerCase(),
    );
  }

  location ||= data.results[0];

  return {
    name: location.name,
    country: location.country,
    latitude: location.latitude,
    longitude: location.longitude,
  };
}

export async function getWeather(lat, lon) {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?` +
      `latitude=${lat}` +
      `&longitude=${lon}` +
      `&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m,precipitation,relative_humidity_2m` +
      `&hourly=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m` +
      `&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,sunrise,sunset` +
      `&timezone=auto`,
  );

  const data = await response.json();

  return data;
}
