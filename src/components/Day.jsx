import React from 'react'
import { DateTime } from 'luxon';

import './Day.css';

function Day(props) {
  const condition = "http://openweathermap.org/img/wn/"+ props.weather.weather[0].icon +"@2x.png"
  const date = DateTime.fromSQL(props.weather.dt_txt).toFormat("ff");
  
  return (
    <div className="weather-tile">
      <h2>
        {date}
      </h2>
      <img id="condition" src={condition} alt="weather condition"/>
      <h1>
        {Math.ceil(props.weather.main.temp - 273.15)}°C
      </h1>
      <h3>
        {props.weather.weather[0].main}
      </h3>
    </div>
  )
}

export default Day;