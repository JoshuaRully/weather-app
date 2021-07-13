import React, { useState } from 'react';
import { TextField } from '@material-ui/core';

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
      <TextField
        id="standard-basic"
        label="City"
        type="text"
        value={city}
        onChange={handleChange}
        style={{margin: "2vh"}}
      />
    </form>
  )
}

export default Location;