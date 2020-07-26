import React from "react";
import "./App.css";
import Header from "./component/Header";
import axios from "axios";
import GetRequest from "./axios";
import CardInfo from "./component/CardInfo";
import EditPage from "./pages/EditEmperor";

function HomePage(props) {
  return (
    <div>
      <Header />
      <CardInfo />
      {/* <EditPage /> */}
    </div>
  );
}

export default HomePage;
