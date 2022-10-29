import React from "react";
import { Link } from "react-router-dom";
import "./stake.css";
import { stakingData } from "../../Data/stakingCard";

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
          {/* {
              stakingData.map((item, key) => (

          <div className="single-card"></div>
              ))} */}
          <div className="single-card">
            <div className="thumbnail"></div>
            <div className="card-detail"></div>
          </div>
          <div className="single-card"></div>
          <div className="single-card"></div>
          <div className="single-card"></div>
        </div>
      </div>
    </div>
  );
};

export default Stake;
