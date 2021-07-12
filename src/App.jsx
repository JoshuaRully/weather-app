import React, { useState, useEffect } from 'react';
import './App.css';
import DayList from './components/DayList';
import Spinner from './components/Spinner';
import Location from './components/Location';

function App() {
  const [weather, setWeather] = useState({});

  useEffect(function getWeather() {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Squamish&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
      .then(res => res.json())
      .then(data => {
        setWeather(data);
      });
  }, []);

  if (weather.list) {
    return (
      <div className="App">
        <header className="App-header">
          Weather App
        </header>
        {console.log(weather)}
        <DayList weather={weather}/>
      </div>
    );
  } else {
    return (
      <div className="App">
        <header className="App-header">
          Weather App
        </header>
        <Location />
        <Spinner />
      </div>
    )
  }

}

export default App;
