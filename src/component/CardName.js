import React, { Component } from "react";
import { render } from "@testing-library/react";

class CardName extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      emperors: [],
    };
  }

  componentDidMount() {
    fetch("https://roman-emperors-ga-api.herokuapp.com/")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            emperors: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: false,
            error,
          });
        }
      );
  }

  render() {
    const emperors = this.state.emperors;
    console.log(emperors);
    let error = this.state.error;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <div>
          {emperors.map((emperor) => (
            <div className="card d-inline-block m-5">
              <p>{emperor.name}</p>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default CardName;
