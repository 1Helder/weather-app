import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import iconSunny from "../assets/icon-sunny.webp";
import iconRain from "../assets/icon-rain.webp";
import iconSnow from "../assets/icon-snow.webp";
import iconStorm from "../assets/icon-storm.webp";
import iconOvercast from "../assets/icon-overcast.webp";
import iconPartCloudy from "../assets/icon-partly-cloudy.webp";

import { getWeatherIcon } from "../utils/weather";

const HourlyForecast = ({ hoursByDay }) => {
  const keys = Object.keys(hoursByDay);
  const [selectedDay, setSelectedDay] = useState(keys[0] ?? null);

  useEffect(() => {
    const keys = Object.keys(hoursByDay);
    if (keys.length > 0) setSelectedDay(keys[0]);
  }, [hoursByDay]);

  const weatherIcons = {
    Sunny: iconSunny,
    Rainy: iconRain,
    Snow: iconSnow,
    Storm: iconStorm,
    Overcast: iconOvercast,
    PartCloudy: iconPartCloudy,
  };

  return (
    <section
      className="
      bg-[#25253f]
      rounded-3xl
      p-5
      w-full
      max-w-sm
      text-white
      mt-3
    "
    >
      <h2 className="text-lg font-semibold mb-4">Hourly forecast</h2>

      <div className="space-y-3">
        {selectedDay &&
          hoursByDay[selectedDay] &&
          hoursByDay[selectedDay]
            .filter((hour) => hour.hour >= "15:00" && hour.hour <= "22:00")
            .map((hour, i) => (
              <div
                key={i}
                className="
              bg-[#2f2f49]
              rounded-xl
              px-4
              py-4
              flex
              items-center
              justify-between
            "
              >
                <div className="flex items-center gap-4">
                  <span className="text-xl"><img src={weatherIcons[getWeatherIcon(hour.weather)]} alt="weather" className="h-6 w-6" /></span>

                  <p className="text-sm">{hour.hour}</p>
                </div>

                <p className="text-sm font-medium">{hour.temp}</p>
              </div>
            ))}
      </div>
    </section>
  );
};

export default HourlyForecast;
