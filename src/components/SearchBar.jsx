import React, { useState } from 'react'

const SearchBar = ({onSearch}) => {
  const [input, setInput] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()
    onSearch(input)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Search for a place..." value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchBar