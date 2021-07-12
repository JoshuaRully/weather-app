import React from 'react';
import Day from './Day';

function DayList(props) {
  return (
    <section className="day-list">
      <Day weather={props.weather.list[7]}/>
      <Day weather={props.weather.list[15]}/>
      <Day weather={props.weather.list[23]}/>
      <Day weather={props.weather.list[31]}/>
      <Day weather={props.weather.list[39]}/>
    </section>
  )
} 

export default DayList;
