import React, { useState } from 'react'

const SearchBar = ({onSearch}) => {
  const [input, setInput] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()
    onSearch(input)
  }

  return (
    <div className='flex justify-center '>
     <form onSubmit={handleSubmit}>
        <input className='text-white w-96 bg-[#25253f] px-4 py-2 rounded-l-lg' type="text" placeholder="Search for a place..." value={input} onChange={(e) => setInput(e.target.value)} />
        <button className='text-white bg-[#4657d9] px-4 py-2 rounded-r-lg' type="submit">Search</button>
      </form>

    </div>
  )
}

export default SearchBar