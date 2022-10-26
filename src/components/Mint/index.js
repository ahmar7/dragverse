import React from "react";
import "./mint.css";
import {
  Line,
  MintIcon,
  StakeIcon,
  MarketIcon,
  Logo,
  Minus,
  Plus,
} from "../../utils/allImgs";
const Mint = () => {
  return (
    <div className="main-container">
      <div className="mint-main">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="counter-bg">
          <div className="mint-counter">
            <div className="increment">
              <img className="ico-id" src={Plus} alt="" />
            </div>
            <div className="digit">3</div>
            <div className="decrement">
              <img className="ico-id" src={Minus} alt="" />
            </div>
            <div className="mint-btn">
              <button>Mint</button>
            </div>
          </div>
        </div>
        <div className="mint-details">
          <h3>Running Whitelist!</h3>
          <ul className="mint-address">
            <li>
              <span>Sale Status:</span> Presale
            </li>
            <li>
              <span>Address:</span> 0x28294910348934892342
            </li>
            <li>
              <span>Supply:</span> 2/3333
            </li>
          </ul>
        </div>
        <div className="icon-bg">
          <div className="icon-area side-icon">
            <img src={MintIcon} alt="" />
            <p>STAKING</p>
          </div>

          <div className="icon-area middle-ico">
            <img className="middle-icon" src={StakeIcon} alt="" />
            <p>MINT</p>
          </div>
          <div className="icon-area sp side-icon">
            <img src={MarketIcon} alt="" />
            <p>Public Marketplace</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mint;
