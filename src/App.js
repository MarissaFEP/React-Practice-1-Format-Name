import React, { Component } from 'react';
import './App.css';

import FormatName from './FormatName'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FormatName firstName="Hello" lastName="Kitty"/>
        <FormatName />
      </div>
    );
  }
}

export default App;
