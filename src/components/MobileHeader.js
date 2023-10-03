import React, { useContext } from "react";
import { Context } from "../context/contextApi";

export const MobileHeader = () => {
  const { mobileHeader, handleClick } = useContext(Context);
  return (
    <div
      className="mobileHeader"
      style={{ display: `${mobileHeader ? "block" : "none"}` }}
    >
      <div className="headings">
        <div>
          <h3
            onClick={(e) => {
              handleClick(e);
            }}
          >
            Home
          </h3>
        </div>
        <div>
          <h3
            onClick={(e) => {
              handleClick(e);
            }}
          >
            Machines
          </h3>
        </div>
        <div>
          <h3
            onClick={(e) => {
              handleClick(e);
            }}
          >
            About
          </h3>
        </div>
        <div>
          <h3
            onClick={(e) => {
              handleClick(e);
            }}
          >
            Contact Us
          </h3>
        </div>
      </div>
    </div>
  );
};
