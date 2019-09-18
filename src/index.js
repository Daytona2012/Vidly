import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Movies from "./components/movies";

import "./styles.css";

function App() {
  return <Movies />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
