import React from "react";

import iconSunny from "../assets/icon-sunny.webp";
import iconRain from "../assets/icon-rain.webp";
import iconSnow from "../assets/icon-snow.webp";
import iconStorm from "../assets/icon-storm.webp";
import iconOvercast from "../assets/icon-overcast.webp";
import iconPartCloudy from "../assets/icon-partly-cloudy.webp";

import { getWeatherIcon } from "../utils/weather";

const DailyForecast = ({ days }) => {
  const weatherIcons = {
    Sunny: iconSunny,
    Rainy: iconRain,
    Snow: iconSnow,
    Storm: iconStorm,
    Overcast: iconOvercast,
    PartCloudy: iconPartCloudy,
  };

  return (
    <section className="mt-7">
      <h2 className="text-white text-lg font-semibold">Daily Forecast</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 mt-5">
        {days.map((day) => (
          <div
            key={day.id}
            className=" w-full bg-[#25253F] px-3 py-4 text-white rounded-md"
          >
            <div className="flex flex-col items-center gap-3">
              <p className="text-sm">{day.weekDay}</p>
              <img
                src={weatherIcons[getWeatherIcon(day.weather)]}
                alt="weather"
              />

              <div className="flex w-full justify-between text-sm">
                <span>{Math.floor(day.maxTemp)}°</span>
                <span className="text-slate-400">
                  {Math.floor(day.minTemp)}°
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DailyForecast;
