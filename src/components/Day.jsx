import React from 'react'
import './Day.css';

const mockWeather = {
  dateTime: 'July 9th, 12:00pm',
  temperature: '20C',
  description: 'cloudy'
}

function Day(props) {
  return (
    <div className="weather-tile">
      <h2>
        {props.weather.dt_txt}
      </h2>
      <img alt="weather condition"/>
      <h1>
        {props.weather.main.temp}
      </h1>
      <h3>
        {props.weather.weather[0].main}
      </h3>
    </div>
  )
}

export default Day;
