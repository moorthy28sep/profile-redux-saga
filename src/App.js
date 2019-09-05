import React, { Component } from 'react';
import './App.css';
import MyTable from './components/MyTable';


class App extends Component {
  render() {
    return (      
      <div className="container">
        <MyTable />
      </div>      
    );
  }
}

export default App;
