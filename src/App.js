import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header';
import Content from './content';
import Footer from './footer';
import DeleteButton from './delete-button';
import EditButton from './edit-button';
import CreateButton from './create-button';
import Axios from 'axios';
import CreateForm from './create-form';
import DeleteForm from './delete-form';
import EditForm from './edit-form';
import GetRequest from './axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      error: null,
      isLoaded: false,
      emperors: []
    };
  }

  componentDidMount() {
    fetch("https://roman-emperors-ga-api.herokuapp.com/")
      .then(res => res.json())
      .then(
        (result) => {
          //console.log(result)
          this.setState({
            isLoaded: true,
            emperors: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const emperors = this.state.emperors;
    //console.log(emperors);
    let error = this.state.error
    let isLoaded = this.state.isLoaded
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        
        <div className="master">
          <Header />
          {emperors.map(emperor => (
            <div class="card">
              <ul>
                <li>
                  `Name: ${emperor.name}`
                </li>
                <li>
                  {emperor.birth} 
                </li>
                <li>
                  {emperor.birthProvidence} 
                </li>
                <li>
                  {emperor.rise} 
                </li>
                <li>
                  {emperor.dynasty} 
                </li>
                <li>
                  {emperor.causeOfDeath} 
                </li>
              </ul>
            </div>
          ))}
          <CreateForm />
          <DeleteForm />
          <EditForm />
          <GetRequest />
          <Footer />
        </div>
        
      );
    }
  }
}

export default App