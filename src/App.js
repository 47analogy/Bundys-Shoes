import React, { Component } from 'react';
import './App.css';
import ShoeListPage from './pages/ShoeListPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Bundy's Shoes</h1>
        <ShoeListPage />
      </div>
    );
  }
}

export default App;
