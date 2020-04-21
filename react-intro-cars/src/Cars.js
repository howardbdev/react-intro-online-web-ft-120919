import React from 'react'
import Car from "./Car.js"

const cars = [
  {
    make: "Ford",
    model: "F150",
    year: "2000",
    miles: "220000"
  },
  {
    make: "Chevy",
    model: "Silverado",
    year: "2009",
    miles: "250000"
  },
  {
    make: "Tesla",
    model: "Model S",
    year: "2019",
    miles: "500000"
  },
]

// class component
export default class Cars extends React.Component {
  state = {
    cars
  }
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     cars
  //   }
  // }

  render() {

    const carCards = this.state.cars.map(car => <Car car={car}/>)

    return (
      <div className="Cars">
        {carCards}
      </div>
    )
  }
}
