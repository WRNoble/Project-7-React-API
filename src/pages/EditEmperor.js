import React, { Component } from "react";
import Header from "../component/Header";
import CardInfo from "../component/CardInfo";

class EditPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      birthprovidence: "",
      rise: "",
      dynasty: "",
      causeofdeath: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
    this.setState({ birthprovidence: e.target.value });
    this.setState({ rise: e.target.value });
    this.setState({ dynasty: e.target.value });
    this.setState({ causeofdeath: e.target.value });
    console.log.apply(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.handleChange(e);
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <div>
          <CardInfo />
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name={this.state.value}
                onChange={this.handleChange}
              />
            </label>

            <label>
              Birth Province:
              <input
                type="text"
                birthprovidence={this.state.value}
                onChange={this.handleChange}
              />
            </label>

            <label>
              Rise to Power:
              <input
                type="text"
                rise={this.state.value}
                onChange={this.handleChange}
              />
            </label>

            <label>
              Dynasty:
              <input
                type="text"
                dynasty={this.state.value}
                onChange={this.handleChange}
              />
            </label>

            <label>
              Cause of Death:
              <input
                type="text"
                causeofdeath={this.state.value}
                onChange={this.handleChange}
              />
            </label>
          </form>
        </div>

        <div className="d-inline">
          <button>Submit</button>
        </div>
        <div>
          <button>Back</button>
        </div>
      </div>
    );
  }
}

export default EditPage;
