import React from "react";
import "./App.css";
import Header from "./component/header";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import GetRequest from "./axios";
import CardInfo from "./component/CardInfo";

function HomePage(props) {
  return (
    <div>
      <Header />
      <CardInfo />
    </div>
  );
}

export default HomePage;
