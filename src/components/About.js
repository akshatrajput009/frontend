import React, { useContext } from "react";
import { Parallax } from "react-parallax";
import companyImg from "../images/mbr-1256x837.jpg";

import "react-multi-carousel/lib/styles.css";
import { Context } from "../context/contextApi";
import { Team } from "./Team";

export const About = () => {
  const { aboutRef } = useContext(Context);

  return (
    <div ref={aboutRef} className="about">
      <div className="stylex"></div>
      <h1>About Us</h1>
      <div>
        <div className="aboutSection">
          <Parallax strength={400} bgImage={companyImg}>
            <div className="insideParallox"></div>
          </Parallax>
          <p>
            Since its establishment, B & M International Development has
            solidified its standing as a prominent machine reseller company,
            renowned for its expertise in the industry. While also engaged in
            real estate development, our primary focus lies in our role as a
            trusted and accomplished machine reseller.
          </p>
        </div>
      </div>

      <Team />
    </div>
  );
};
