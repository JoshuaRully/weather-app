import React, { useState, useEffect } from 'react'
import './Day.css';

const mockWeather = {
  day: 'Monday',
  dateTime: 'July 9th, 12:00pm',
  temperature: '20C',
  description: 'cloudy'
}

function Day() {
  const [weather, setWeather] = useState(mockWeather)

  return (
    <div className="weather-tile">
      <h2>
      {weather.day}
      </h2>
      <h3>
        {weather.dateTime}
      </h3>
      <img />
      <h1>
        {weather.temperature}
      </h1>
      <h3>
        {weather.description}
      </h3>
    </div>
  )
}

export default Day;
