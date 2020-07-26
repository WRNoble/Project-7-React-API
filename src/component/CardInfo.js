import React, { Component } from "react";
import emperorPic from "../image/emperor.jpg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import EditPage from "../pages/EditEmperor";

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
    let error = this.state.error;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <div className="Container justify-content-center row align-items-center">
          <div className="row">
            {emperors.map((emperor) => (
              <div
                className="card d-inline-block m-5 Container"
                key={emperor.name}
              >
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
                  <Router>
                    <button>
                      <Link
                        className="justify-content-center mr-5 btn-dark"
                        to="/edit"
                        target="blank"
                      >
                        Edit
                      </Link>
                    </button>
                    <Route path="/edit" exact render={() => <EditPage />} />
                  </Router>
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
