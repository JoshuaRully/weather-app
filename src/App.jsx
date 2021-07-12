import React, { useState, useEffect } from 'react';
import './App.css';
import DayList from './components/DayList';
import Spinner from './components/Spinner';

function App() {
  const [weather, setWeather] = useState({});

  useEffect(function getWeather() {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Guelph&cnt=10&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
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
    return <Spinner />
  }

}

export default App;
