import React, { useState, useEffect } from 'react';
import Day from './Day';

function DayList() {
  const [weather, setWeather] = useState(null)

  fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Guelph&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
    .then(res => res.json())
    .then(data => console.log(data))

  return (
    <section className="day-list">

    </section>
  );
}

export default DayList;
