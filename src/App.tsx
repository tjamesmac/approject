import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Clock } from './Clock'

const Cloc = (props: {date: any}) => {
  return (
    <div>
      <h1>This is Cloc</h1>
      <h2>It is now {props.date.toLocaleTimeString()}</h2>
    </div>
  )
}

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
