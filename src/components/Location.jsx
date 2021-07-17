import React from 'react'

function Location(props) {

  if (props.weather.city) {
    return (
      <h2>
        Showing 5-day Forecast for: {props.weather.city.name}, {props.weather.city.country}
      </h2>
    )
  } else {
    return <></>;
  }
}

export default Location;