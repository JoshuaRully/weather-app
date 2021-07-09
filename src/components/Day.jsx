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
      <header>
      {weather.day}
      </header>
      <h3>
        {weather.dateTime}
      </h3>
      <img />
      <h1>
        {weather.temperature}
      </h1>
      <footer>
        {weather.description}
      </footer>
    </div>
  )
}

export default Day;
