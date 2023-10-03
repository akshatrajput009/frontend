import React, { useContext } from "react";

import { Expertise } from "./Expertise";

import { Context } from "../context/contextApi";
import { About } from "./About";
import Contacts from "./Contacts";
import { MobileHeader } from "./MobileHeader";
import { Footer } from "./Footer";
import Header from "./Header";
import forklift3v2 from "../images/forklift3v2.jpg";
import crane1 from "../images/crane1.jpg";

import platform2 from "../images/platform2.jpg";
const Home = () => {
  const { homeRef } = useContext(Context);

  return (
    <>
      <Header />
      <div ref={homeRef}>
        <MobileHeader />
        <div className="intro">
          <div className="welcome">
            <div className="welcomeText">
              <h1>
                <span>B&M </span>International <br></br>
                Development
              </h1>
            </div>
            <div className="welcomePhoto">
              <div className="introPhotoGrid">
                <img className="item1" src={forklift3v2} alt="introPhoto"></img>
                <img className="item2" src={platform2} alt="introPhoto"></img>
                <img className="item3" src={crane1} alt="introPhoto"></img>
              </div>
            </div>
          </div>
        </div>
        <Expertise />
        <About />
        <Contacts />
        <Footer />
      </div>
    </>
  );
};

export default Home;
