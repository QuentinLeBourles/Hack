import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BarChart from './test';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <BarChart
            data={[5,10,1,3]} size={[500,500]}/>
        </header>
      </div>
    );
  }
}

export default App;