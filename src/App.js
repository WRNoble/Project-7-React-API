import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header';
import Content from './content';
import Footer from './footer'
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        />
        <Content></Content>
        <Footer />
      </div>
    )
  }
}

export default App;
