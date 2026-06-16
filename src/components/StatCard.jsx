import React from 'react'

const StatCard = ({label, value}) => {
  return (
    <div className='bg-[#25253F] text-white rounded-md p-3 flex-1'>
        <p>{label}</p>
        <p>{value}</p>
    </div>
  )
}

export default StatCard