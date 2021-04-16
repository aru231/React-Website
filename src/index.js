import React from "react";
import ReactDOM from "react-dom";
import This from "./This";
import { BrowserRouter } from "react-router-dom";
import './index.css';

ReactDOM.render(
  <>
    <BrowserRouter>
      <This />
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
