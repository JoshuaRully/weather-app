import React from 'react'
import './Day.css';

const mockWeather = {
  day: 'Monday',
  dateTime: 'July 9th, 12:00pm',
  temperature: '20C',
  description: 'cloudy'
}

function Day(props) {
  return (
    <div className="weather-tile">
      <h2>
      {mockWeather.day}
      {/* {props.day} */}
      </h2>
      <h3>
        {mockWeather.dateTime}
        {/* props.dateTime */}
      </h3>
      <img />
      <h1>
        {mockWeather.temperature}
        {/* {props.temperature} */}
      </h1>
      <h3>
        {mockWeather.description}
        {/* {props.description} */}
      </h3>
    </div>
  )
}

export default Day;
