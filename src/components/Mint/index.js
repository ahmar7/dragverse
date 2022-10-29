import React from "react";
import { Link } from "react-router-dom";
import "./mint.css";
import {
  Line,
  MintIcon,
  StakeIcon,
  MarketIcon,
  Logo,
  Minus,
  Cross,
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
            <Link to="/staking">
              <img src={MintIcon} alt="" />
              <p>STAKING</p>
            </Link>
          </div>

          <div className="icon-area middle-ico">
            <Link to="/">
              <img className="middle-icon" src={StakeIcon} alt="" />
              <p>MINT</p>
            </Link>
          </div>
          <div className="icon-area sp side-icon">
            <Link to="/marketplace">
              <img src={MarketIcon} alt="" />
              <p className="mplace">Public Marketplace</p>
            </Link>
          </div>
        </div>
      </div>
      {/* Modal mobile*/}

      <div className="show-it modal">
        <div className="overlay  "></div>
        <div className="modal-content">
          <h2 className="modal-head">Draguverse</h2>
          <div className="modal-detail">
            <p>
              We are waiting for our smartcontract
              <br /> audits before fully releasing this <br /> component of the
              app!
            </p>
            <div className="modal-btns">
              <button>Ok</button>
              <button>Close</button>
            </div>
          </div>
          <div className="close-modal">
            <img src={Cross} />
          </div>
        </div>
      </div>

      {/* Modal mobile*/}
    </div>
  );
};

export default Mint;
