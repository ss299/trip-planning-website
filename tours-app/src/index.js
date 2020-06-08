import React from "react";
import ReactDOM from "react-dom";
import "./indexStyle.css";
import "./style.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import Json from "./Json";
import TodoList from "./TodoList";

var destination = document.querySelector("#container");

var firebaseConfig = {
  apiKey: "AIzaSyCS0nEMtwULe0crqavc5OieL-GuQYeIWaQ",
  authDomain: "tourist-planner-info340.firebaseapp.com",
  databaseURL: "https://tourist-planner-info340.firebaseio.com",
  projectId: "tourist-planner-info340",
  storageBucket: "tourist-planner-info340.appspot.com",
  messagingSenderId: "453878855420",
  appId: "1:453878855420:web:b2afba0b672b0be3580979",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <BrowserRouter>
    <App tasks={Json} />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
