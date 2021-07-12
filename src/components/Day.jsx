import React from 'react'
import './Day.css';

function Day(props) {
  const condition = "http://openweathermap.org/img/wn/"+ props.weather.weather[0].icon +"@2x.png"

  return (
    <div className="weather-tile">
      <h2>
        {props.weather.dt_txt}
      </h2>
      <img id="condition" src={condition} alt="weather condition"/>
      <h1>
        {Math.ceil(props.weather.main.temp - 273.15)}
      </h1>
      <h3>
        {props.weather.weather[0].main}
      </h3>
    </div>
  )
}

export default Day;
