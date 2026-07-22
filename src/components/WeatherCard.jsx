import React from 'react'
import bgTodayLarge from '../assets/bg-today-large.svg'
import iconSunny from '../assets/icon-sunny.webp'
import StatCard from './StatCard'

const WeatherCard = ({weather, city, country, weekDay, monthDay, year, feelsLike, humidity, wind, precipitation}) => {
  return (
    <div className='rounded-xl overflow-hidden'>
      {/* <div className=' flex items-center justify-between p-4 min-h-70 text-white bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${bgTodayLarge})` }}> */}
      <div className=' flex flex-col sm:flex-row sm:items-start gap-6 items-center lg:items-center justify-between p-6 min-h-70 text-white bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${bgTodayLarge})` }}>
        
        <div className='flex flex-col'>
          

          <div className='flex flex-row gap-2 text-lg sm:text-xl'>
            <div>{city}</div>
            <div>{country}</div>

          </div>

          <div className='flex flex-row gap-2 text-sm sm:text-base'>
            <div>{weekDay}</div>
            <div>{monthDay}</div>
            <div>{year}</div>
          </div>
          
        </div>
        

        <div className='italic text-5xl sm:text-6xl lg:text-7xl flex items-center'>
          <img src={iconSunny} alt="iconSunny" className='h-20 sm:h-28 lg:h-32' />
          {weather}
        </div>

      </div>

      <div className='grid grid-cols-2 gap-3 lg:grid-cols-4 mt-5'>
        
        <StatCard label="Feels like" value={feelsLike}/>
        <StatCard label="Humidity" value={humidity}/>
        <StatCard label="Wind" value={wind}/>
        <StatCard label="Precipitation" value={precipitation}/>

      </div>
      
    </div>
  )
}

export default WeatherCard