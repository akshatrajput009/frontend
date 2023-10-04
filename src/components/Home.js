import React, { useContext } from "react";
import Carousel from "react-bootstrap/Carousel";

import { Expertise } from "./Expertise";

import { Context } from "../context/contextApi";
import { About } from "./About";
import Contacts from "./Contacts";
import { MobileHeader } from "./MobileHeader";
import { Footer } from "./Footer";
import Header from "./Header";
import forklift3 from "../images/forklift3.jpg";
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
          <div className="subIntro">
            <Carousel interval={3000} pause={false} controls={false}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={platform2}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={forklift3}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={crane1} alt="First slide" />
              </Carousel.Item>
              {/* Add more slides as needed */}
            </Carousel>
          </div>
          {/* old code down here under the div with className welcome */}

          {/* <div className="welcome">
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
          </div> */}
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
