import React from 'react'

const DailyForecast = ({days}) => {
  return (
    <div className='flex gap-2'>
        {days.map((day) =>(
            <div key={day.id} className=' w-24 bg-[#25253F] px-3 py-4 text-white rounded-md mt-5'>
              <div className='flex flex-col items-center gap-3'>
                <p className='text-sm'>{day.weekDay}</p>
                <p className='text-2xl'>{day.weather}</p>

                <div className='flex w-full justify-between text-sm'>
                  <span>{day.maxTemp}°C</span>
                  <span className='text-slate-400'>{day.minTemp}°C</span>
                </div>
              </div>
            </div>
        ))}
    </div>
  )
}

export default DailyForecast