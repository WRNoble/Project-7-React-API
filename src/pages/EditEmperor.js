import React, { Component } from "react";
import Header from "./component/Header";
import CardInfo from "../component/CardInfo";

class EditPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };
  }

  render() {
    return (
      <div>
        <div>
          <Header />;
        </div>
        <div>
          <CardInfo />;
        </div>
        <div></div>
      </div>
    );
  }
}

export default EditPage;
