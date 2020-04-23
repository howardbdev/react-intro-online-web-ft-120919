import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cars from './Cars.js'

class App extends React.Component {

  render() {
    return (
      <div className="App">
      <h1>🚗 React Cars 🚙</h1>
      <Cars />
      </div>
    );

  }
}

export default App;
