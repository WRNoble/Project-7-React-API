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


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:4000")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            Emperors: result.Emperors
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
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
         <Header />
            <link
                   rel="stylesheet"
                   href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                   integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                   crossOrigin="anonymous"
                 />
                 <Content></Content>
                 <CreateButton />
                 <DeleteButton />
                 <EditButton />
                 <Footer />
        
        
          {items.map(item => (
            <p key={item.name}>
              {item.name} {item.price}
            </p>
          ))}
        </div> 
      );
    }
  }
}

// class App extends Component {
//   constructor() {
//     super()

//     this.state = {
//       emperors: []
//     }
//   }


//   render() {
//     return(
//       <div>
//         <Header />
//         <link
//           rel="stylesheet"
//           href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
//           integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
//           crossOrigin="anonymous"
//         />
//         <Content></Content>
//         <CreateButton />
//         <DeleteButton />
//         <EditButton />
//         <Footer />
//       </div>
//     )
//   }
// }

export default App;
