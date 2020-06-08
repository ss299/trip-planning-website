import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./indexStyle.css";
import "./style.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import worldData from "./worldData/worldcities.csv";
import { GoogleMap, Marker } from "react-google-maps";

export class WorldMap extends Component {
  render() {
    return <GoogleMap></GoogleMap>;
  }
}

export default WorldMap;
