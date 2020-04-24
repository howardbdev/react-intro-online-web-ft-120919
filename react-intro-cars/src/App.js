import React from 'react';
import './App.css';
import Cars from './Cars.js'
import Review from './Review.js'

class App extends React.Component {

  constructor(props) {
    console.log("inside constructor")
    super(props)
    this.state = {
      cars: [],
      dealerReviews: [],
      interval: 0,
      reviewId: 0
    }
  }

  // when this component mounts, I want to get all the cars data from my backend...
  componentDidMount() {
    console.log("indside componentDidMount")
    fetch("http://localhost:3001/api/v1/cars")
      .then(resp => resp.json())
      .then(carsJSON => {
        this.setState({
          cars: carsJSON
        })
      })

      fetch("http://localhost:3001/api/v1/dealer_reviews")
        .then(resp => resp.json())
        .then(reviews => {
          this.setState({
            dealerReviews: reviews
          })
        })

        const interval = setInterval(this.startInterval, 3000)
         this.setState({
           interval
         })
  }

  startInterval = () => {
    // find a review at random
    // update the state with that review
    const review = this.state.dealerReviews[Math.floor(Math.random() * this.state.dealerReviews.length)]
    this.setState({
      reviewId: review ? review.id : 0
    }, () => console.log("interval!"))
  }

  componentWillUnmount() {
    this.stopInterval()
  }

  stopInterval = () => {
    clearInterval(this.state.interval)
  }

  // the render method should be a pure function of props and state
  render() {
    console.log("indside render")

    return (
      <div className="App">
        <h1>🚗 React Cars 🚙</h1>
        <Cars cars={this.state.cars}/>
        <button onClick={this.stopInterval}>Stop showing me reviews!</button>
        <Review review={this.state.dealerReviews.find(r => r.id === this.state.reviewId)}/>
      </div>
    );

  }
}

export default App;
