import React, { Component } from 'react';
import './App.css';
import FileUpload from './components/FileUpload';
import NavBar from './components/NavBar';
import NavChart from './components/navChart'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Chart1  from "./components/Chart1";
import Chart2 from './components/Chart2';
import Chart3 from './components/Chart3';
import Chart4 from './components/Chart4';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <FileUpload />
        <NavChart />
        <BrowserRouter>
        <Switch>
          <Route
            path="/Chart1"
            component={Chart1} />
          <Route
            path="/Chart2"
            component={Chart2} />
            <Route
            path="/Chart4"
            component={Chart4} />
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
