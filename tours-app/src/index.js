import React from "react";
import ReactDOM from "react-dom";
import "./indexStyle.css";
import "./style.css";
import App from "./App";
import { BrowserRouter} from "react-router-dom";
import Json from "./Json";
import TodoList from "./TodoList";

var destination = document.querySelector("#container")

ReactDOM.render(
  <BrowserRouter>
    <App tasks = {Json}/>
  </BrowserRouter>,
  document.getElementById("root")
);

ReactDOM.render(
  <div>
      <TodoList/>
  </div>,
  destination
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
