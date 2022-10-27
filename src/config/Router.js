import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import MarketPlace from "../pages/MarketPlace.js";

import Mint from "../pages/Mint.js";
import Staking from "../pages/Staking.js";

const Routerapp = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Mint />} />
          <Route exact path="staking" element={<Staking />} />
          <Route exact path="marketplace" element={<MarketPlace />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routerapp;
