import React from "react";
import { Link } from "react-router-dom";
import "./stake.css";
import {
  Line,
  MintIcon,
  StakeIcon,
  MarketIcon,
  Logo,
  Minus,
  Plus,
} from "../../utils/allImgs";
const Stake = () => {
  return (
    <div className="main-container">
      <div className="main-staking">
        <div className="side-logo">
          <img src={Logo} alt="" />
        </div>
        <div className="staking-btn">
          <button>Staked</button>
          <button>Not Staked</button>
        </div>
        <div className="cards">
          <div className="single-card"></div>
        </div>
      </div>
    </div>
  );
};

export default Stake;
