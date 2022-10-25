import React from "react";
import "./mint.css";
import { Line, MintIcon, StakeIcon, MarketIcon } from "../../utils/allImgs";
const Mint = () => {
  return (
    <div className="main-container">
      <div className="mint-main">
        <div className="icon-bg">
          <div className="icon-area">
            <img className="side-icon" src={MintIcon} alt="" />
            <p>STAKING</p>
          </div>

          <div className="icon-area">
            <img className="middle-icon" src={StakeIcon} alt="" />
            <p>MINT</p>
          </div>
          <div className="icon-area">
            <img className="side-icon" src={MarketIcon} alt="" />
            <p>Public Marketplace</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mint;
