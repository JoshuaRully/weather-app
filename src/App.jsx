import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import DayList from './components/DayList';
import Spinner from './components/Spinner';
import SearchBar from './components/SearchBar';

function App(props) {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});

  useEffect(() => {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
      .then(data => {
        setWeather(data);
        console.log(data);
      });
  }, [city]);

  return (
    <div className="App">
      <header className="App-header">
        Weather App
      </header>
      <SearchBar onSearch={city => setCity(city)} />
      <DayList weather={weather}/>
    </div>
  );
}

export default App;
