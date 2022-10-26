import React, { useState, useEffect } from "react";

import "./header.css";
const Header = () => {
  return (
    <div className="main-container ">
      <div className="header-link">
        <ul>
          <li className="active-link">APP</li>
          <li>DISCORD</li>
          <li>HOMEPAGE</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
