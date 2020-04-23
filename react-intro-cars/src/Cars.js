import React from 'react'
import Car from "./Car.js"

const Cars = (props) => {
  const carCards = props.cars.map(car => <Car key={car.id} car={car}/>)

  return (
    <div className="Cars">
      {carCards}
    </div>
  )
}

export default Cars
