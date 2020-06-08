import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header';

class App extends Component {
  constructor() {
    super()

    this.state = {
      emperors: []
    }
  }
  render() {
    return(
      <div>
        <Header />
      </div>
    )
  }
}

export default App;
