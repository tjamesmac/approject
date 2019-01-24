import React, { Component } from 'react';
import '../CSS/App.css';
import { Clock } from './Clock'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock />
      </div>
    );
  }
}

export default App;
