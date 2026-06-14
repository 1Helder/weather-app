import React from 'react'
import bgTodayLarge from '../assets/bg-today-large.svg'
import iconSunny from '../assets/icon-sunny.webp'

const WeatherCard = ({weather, city, country, weekDay, monthDay, year, feelsLike, humidity, wind, precipitation}) => {
  return (
    <div>
      <div className=' flex items-center justify-between p-4 min-h-70 text-white bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${bgTodayLarge})` }}>
        
        <div className='flex flex-col'>
          

          <div className='flex flex-row gap-2'>
            <div>{city}</div>
            <div>{country}</div>

          </div>

          <div className='flex flex-row gap-2'>
            <div>{weekDay}</div>
            <div>{monthDay}</div>
            <div>{year}</div>
          </div>
          
        </div>
        

        <div className='italic text-6xl flex items-center'>
          <img src={iconSunny} alt="iconSunny" className='h-30' />
          {weather}
        </div>

      </div>

      <div className='flex gap-2 mt-5'>
        <div className='bg-[#25253F] rounded-sm p-3 pr-15'>
          <p>Feels Like</p>
          <p>{feelsLike}</p>
        </div>

        <div className='bg-[#25253F] rounded-sm p-3 pr-15'>
          <p>Humidity</p>
          <p>{humidity}</p>
        </div>

        <div className='bg-[#25253F] rounded-sm p-3 pr-15'>
          <p>Wind</p>
          <p>{wind}</p>
        </div>

        <div className='bg-[#25253F] rounded-sm p-3 pr-15'>
          <p>Precipitation</p>
          <p>{precipitation}</p>
        </div>

      </div>
      
    </div>
  )
}

export default WeatherCard