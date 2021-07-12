import React from 'react';
import Day from './Day';

function DayList(props) {
  return (
    <section className="day-list">
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
    </section>
  );
}

export default DayList;
