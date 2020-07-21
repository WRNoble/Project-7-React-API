import React from "react";
import "./App.css";
import Header from "./component/header";
import Footer from "./component/footer";
//import Content from "./content";
import CreateButton from "./buttons/create-button";
import axios from "axios";
import CreateForm from "./forms/create-form";
import DeleteForm from "./forms/delete-form";
import EditForm from "./forms/edit-form";
import GetRequest from "./axios";
import CardInfo from "./component/CardInfo";
import CardName from "./component/CardName";

function HomePage(props) {
  return (
    <div>
      <Header />
      <CardInfo />
      <Footer />
    </div>
  );
}

export default HomePage;
