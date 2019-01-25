import React, { Component } from 'react';
import '../CSS/App.css';
import { Workout } from './Workout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Workout />
      </div>
    );
  }
}

export default App;
