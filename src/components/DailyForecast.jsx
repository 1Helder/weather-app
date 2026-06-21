import React from 'react'

import iconSunny from '../assets/icon-sunny.webp'
import iconRain from '../assets/icon-rain.webp'
import iconSnow from '../assets/icon-snow.webp'
import iconStorm from '../assets/icon-storm.webp'
import iconOvercast from '../assets/icon-overcast.webp'
import iconPartCloudy from '../assets/icon-partly-cloudy.webp'


const DailyForecast = ({days}) => {

  const weatherIcons = {
    Sunny: iconSunny,
    Rainy: iconRain,
    Snow: iconSnow,
    Storm: iconStorm,
    Overcast: iconOvercast,
    partCloudy: iconPartCloudy,
  }



  return (
    <section>
      <h2>Daily Forecast</h2> 

      <div className='flex gap-2'> 
        {days.map((day) =>(
            <div key={day.id} className=' w-24 bg-[#25253F] px-3 py-4 text-white rounded-md mt-5'>
              <div className='flex flex-col items-center gap-3'>
                <p className='text-sm'>{day.weekDay}</p>
                <img src={weatherIcons[day.weather]} alt="weather" />

                <div className='flex w-full justify-between text-sm'>
                  <span>{day.maxTemp}°C</span>
                  <span className='text-slate-400'>{day.minTemp}°C</span>
                </div>
              </div>
            </div>
        ))}
      </div>

    </section>


  )
}

export default DailyForecast