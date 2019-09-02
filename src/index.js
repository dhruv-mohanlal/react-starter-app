import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import "./index.css";

//Router - needed for Nav and NavLinks to work - ahoudl always surround the app render
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);
