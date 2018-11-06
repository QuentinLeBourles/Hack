import React, { Component } from 'react';
import './App.css';
import BarChart from './components/Barchart';
import FileUpload from './components/FileUpload';
import NavBar from './components/NavBar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <FileUpload />
          <BarChart
            data={[5,10,1,3, 8,9]} size={[500,500]}/>
      </div>
    );
  }
}

export default App;
