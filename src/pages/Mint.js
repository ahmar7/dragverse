import React from "react";
import Mint from "../components/Mint";
import "./background.css";
import Header from "../layout/Header/header";

const Home = () => {
  return (
    <div className="mint-pg">
      <Header />
      <Mint />
    </div>
  );
};

export default Home;
