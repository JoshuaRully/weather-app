import React from 'react';
import Day from './Day';
import Spinner from './Spinner';

function DayList(props) {
  if (props.weather.list) {
    return (
      <section className="day-list">
        <Day weather={props.weather.list[7]}/>
        <Day weather={props.weather.list[15]}/>
        <Day weather={props.weather.list[23]}/>
        <Day weather={props.weather.list[31]}/>
        <Day weather={props.weather.list[39]}/>
      </section>)
  } else {
    return <Spinner />
  }
} 

export default DayList;
