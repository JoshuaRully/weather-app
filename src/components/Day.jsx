import React from 'react'
import { DateTime } from 'luxon';

import './Day.css';

function Day(props) {
  const condition = "http://openweathermap.org/img/wn/"+ props.weather.weather[0].icon +"@2x.png"
  const date = DateTime.fromSQL(props.weather.dt_txt).toFormat("ff");
  
  return (
    <div className="weather-tile">
      <p>
        {date}
      </p>
      <img id="condition" src={condition} alt="weather condition"/>
      <p>
        {Math.ceil(props.weather.main.temp - 273.15)}°C
      </p>
      <p>
        {props.weather.weather[0].main}
      </p>
    </div>
  )
}

export default Day;