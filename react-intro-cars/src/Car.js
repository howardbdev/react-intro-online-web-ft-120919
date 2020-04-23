import React from 'react'

const Car = (props) => {

  return (
    <div className="Car">
      <h3>{props.car.make} {props.car.model}</h3>
      <p>Year: {props.car.year}</p>
      <p>Miles: {props.car.miles}</p>
      <p>Price: ${props.car.price}</p>
      <p>{props.car.used ? "Used" : "New!"}</p>
    </div>
  )
}

export default Car
