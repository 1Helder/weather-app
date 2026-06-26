import React from 'react'

const HourlyForecast = () => {

  const hourly = [
    { id: 1, hour: "3 PM", weather: "☁️", temp: "20°" },
    { id: 2, hour: "4 PM", weather: "🌤️", temp: "20°" },
    { id: 3, hour: "5 PM", weather: "☀️", temp: "20°" },
    { id: 4, hour: "6 PM", weather: "☁️", temp: "19°" },
    { id: 5, hour: "7 PM", weather: "🌧️", temp: "18°" },
    { id: 6, hour: "8 PM", weather: "🌫️", temp: "18°" },
    { id: 7, hour: "9 PM", weather: "🌧️", temp: "17°" },
    { id: 8, hour: "10 PM", weather: "☁️", temp: "17°" }
  ]

  return (
    <section className='
      bg-[#25253f]
      rounded-3xl
      p-5
      w-full
      max-w-sm
      text-white
      mt-3
    '>

      <h2 className='text-lg font-semibold mb-4'>
        Hourly forecast
      </h2>

      <div className='space-y-3'>
        {hourly.map((hour) => (
          <div
            key={hour.id}
            className='
              bg-[#2f2f49]
              rounded-xl
              px-4
              py-4
              flex
              items-center
              justify-between
            '
          >
            <div className='flex items-center gap-4'>
              <span className='text-xl'>
                {hour.weather}
              </span>

              <p className='text-sm'>
                {hour.hour}
              </p>
            </div>

            <p className='text-sm font-medium'>
              {hour.temp}
            </p>
          </div>
        ))}
      </div>

    </section>
  )
}

export default HourlyForecast