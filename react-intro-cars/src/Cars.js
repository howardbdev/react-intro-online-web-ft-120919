import React from 'react'
import Car from "./Car.js"
// mocking a request to get data - just pulling an array of objects from a file
import { carsData } from './data/cars.js'

// class component
export default class Cars extends React.Component {
  // declare state using class fields
  state = {
    cars: carsData
  }
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     cars
  //   }
  // }

  render() {

    const carCards = this.state.cars.map(car => <Car key={car.id} car={car}/>)

    return (
      <div className="Cars">
        {carCards}
      </div>
    )
  }
}
