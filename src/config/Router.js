import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

import Mint from "../pages/Mint.js";

const Routerapp = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Mint />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routerapp;
