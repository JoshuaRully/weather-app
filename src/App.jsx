import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import DayList from './components/DayList';
import SearchBar from './components/SearchBar';
import Location from './components/Location';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});

  useEffect(() => {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
      .then(res => {
        setWeather(res.data);
        // console.log(res.data);
      })
      .catch(error => console.error(error));
  }, [city]);

  return (
    <div className="App">
      <header className="App-header">
        Weather App
      </header>
      <SearchBar onSearch={city => setCity(city)} />
      <Location weather={weather} />
      <DayList weather={weather} />
    </div>
  );
}

export default App;
