import React, { useState } from "react";
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
  Card1,
  Cross,
  LockIcon,
} from "../../utils/allImgs";
const Stake = () => {
  const [modal, setModal] = useState(true);
  const closeModal = () => {
    setModal(false);
  };
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
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
          {stakingData.map((item, key) => (
            <div className="single-card">
              <div className="thumbnail">
                <h3 className="lvl">LVL 1</h3>

                <img src={item.img} alt="" />
              </div>
              <div className="card-detail">
                <div className="title">
                  <img src={LockIcon} alt="" />
                  <h3>{item.title}</h3>
                </div>
                <div className="card-data">
                  <div>
                    <p>0.1%</p>
                    <h5>{item.percent}</h5>
                  </div>
                  <div>
                    <p>LVL</p>
                    <h5>{item.lvl}</h5>
                  </div>
                  <div>
                    <p>CMY</p>
                    <h5>{item.cmy}</h5>
                  </div>
                  <div>
                    <p>BID</p>
                    <h5>{item.bid}</h5>
                  </div>
                </div>
                <div className="view-btn">
                  <button>View</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="icon-bg">
          <div className="icon-area side-icon">
            <Link to="/">
              <img src={StakeIcon} alt="" />
              <p>MINT</p>
            </Link>
          </div>

          <div className="icon-area middle-ico">
            <Link to="/staking">
              <img className="middle-icon" src={MintIcon} alt="" />
              <p>STAKING</p>
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
      {/* Modal */}

      <div className={modal ? "modal" : "modal hide-it "}>
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
              <button onClick={closeModal}>Ok</button>
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
          <div className="close-modal" onClick={closeModal}>
            <img src={Cross} />
          </div>
        </div>
      </div>

      {/* Modal */}
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

export default Stake;
