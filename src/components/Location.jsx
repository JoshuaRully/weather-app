import React, { useState } from 'react'

function Location() {
  const [city, setCity] = useState('');

  function handleChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    alert('You selected: '+ city)
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        City:
        <input type="text" value={city} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default Location;