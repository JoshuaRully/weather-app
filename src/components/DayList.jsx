import React from 'react';
import Day from './Day';

function DayList(props) {
  return (
    <section className="day-list">
      <Day weather={props.weather.list[0]}/>
      <Day weather={props.weather.list[1]}/>
      <Day weather={props.weather.list[2]}/>
      <Day weather={props.weather.list[3]}/>
      <Day weather={props.weather.list[4]}/>
    </section>
  )
} 

export default DayList;
