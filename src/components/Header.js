import React, { useContext } from "react";
import bmLogo from "../images/logo-dark.png";
import { SlMenu } from "react-icons/sl";

import { Context } from "../context/contextApi";

const Header = () => {
  const {
    handleClick,

    setMobileHeader,
    mobileHeader,
  } = useContext(Context);

  const handleMobileHeader = () => {
    if (!mobileHeader) {
      setMobileHeader(true);
    } else setMobileHeader(false);
  };
  return (
    <nav>
      <div className="logo">
        <img onClick={(e) => handleClick(e)} src={bmLogo} alt="logo" />

        <button
          onClick={() => {
            handleMobileHeader();
          }}
          className="nav-btn"
        >
          <SlMenu />
        </button>
      </div>
      <ul>
        <li>
          <h5 onClick={(e) => handleClick(e)}>Home</h5>
        </li>

        <li>
          <h5 onClick={(e) => handleClick(e)}>Machines</h5>
        </li>
        <li>
          <h5 onClick={(e) => handleClick(e)}>About</h5>
        </li>
        <li>
          <h5 onClick={(e) => handleClick(e)}>Contact Us</h5>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
