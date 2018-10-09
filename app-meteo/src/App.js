import React, { Component } from 'react';
import Weather from "./components/Weather"
import './App.css';

class App extends Component {

 
  
  render() {
    return (
      <div className="App-header">
        <header className="App-header">
          <Weather/>
        </header>
      </div>
    );
  }
}

export default App;

// bab5ed5d7c1f2856c79a41e21b71012d
// api.openweathermap.org/data/2.5/weather?lat=35&lon=139