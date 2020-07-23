import React, { Component } from "react";
import { render } from "@testing-library/react";
import emperorPic from "../image/emperor.jpg";

class CardInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      emperors: [],
      selected: false,
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
        <div className="Container justify-content-center row align-items-center">
          <div className="row">
            {emperors.map((emperor) => (
              <div className="card d-inline-block m-5 Container">
                <h2 className="justify-content-center name">{emperor.name}</h2>
                <img
                  src={emperorPic}
                  alt="Roman Emperor"
                  height="250"
                  width="275"
                />

                <ul>
                  <li>Province of Birth: {emperor.birthProvidence}</li>
                  <li>Rise to Power: {emperor.rise}</li>
                  <li>Dynasty: {emperor.dynasty}</li>
                  <li>Cause of Death:{emperor.causeOfDeath}</li>
                </ul>
                <div>
                  <button className="justify-content-center mr-5 btn-dark">
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default CardInfo;
