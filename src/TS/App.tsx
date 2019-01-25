import React, { Component } from 'react';
import '../CSS/App.css';
import { Planner } from './Planner';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Planner />
      </div>
    );
  }
}

export default App;
