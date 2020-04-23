import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cars from './Cars.js'
import Review from './Review.js'

class App extends React.Component {
  state = {
    cars: []

  }





  render() {
    return (
      <div className="App">
        <h1>🚗 React Cars 🚙</h1>
        <Cars cars={this.state.cars}/>

      </div>
    );

  }
}

export default App;
