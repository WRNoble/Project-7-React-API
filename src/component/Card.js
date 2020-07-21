import React, { Component } from "react";
import { render } from "@testing-library/react";

function Card(props) {
  return (
    <div className="card d-inline-block m-5">
      <ul>
        <li>Name: {emperor.name}</li>
        <li>Birth Date: {emperor.birth}</li>
        <li>Province of Birth: {emperor.birthProvidence}</li>
        <li>Rise to Power: {emperor.rise}</li>
        <li>Reign Began: {emperor.reignStart}</li>
        <li>Dynasty: {emperor.dynasty}</li>
        <li>Cause of Death:{emperor.causeOfDeath}</li>
      </ul>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default Card;
