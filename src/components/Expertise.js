import React, { useContext, useState } from "react";

import forklift1 from "../images/forklift.jpg";
import forklift2 from "../images/forklift2.jpg";
import forklift3 from "../images/forklift3.jpg";
import platform1 from "../images/platform1.jpg";
import platform2 from "../images/platform2.jpg";
import platform3 from "../images/Aeriel Platforms.jpg";

import crane1 from "../images/crane1.jpg";
import crane2 from "../images/crane2.jpg";
import crane3 from "../images/crane3.jpg";
import logo8 from "../images/logo8.jpg";
import logo6 from "../images/logo6.jpg";
import logo5 from "../images/logo5.jpg";

import { Context } from "../context/contextApi";

export const Expertise = () => {
  const [carouselImg, setCarouselImg] = useState({
    a: forklift1,
    b: platform3,
    c: crane1,
  });

  const { expertiseRef } = useContext(Context);

  return (
    <div ref={expertiseRef}>
      <div className="expertise">
        <div className="expertisePhotos">
          <div className="carousel-container">
            <div
              id="carouselExampleAutoplaying"
              className="carousel carousel-v2 slide expertiseCarousel"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner carousel-inner-v2 ">
                <div className=" carousel-item active">
                  <img
                    src={carouselImg.a}
                    className="expertisePhoto d-block "
                    alt="..."
                  ></img>
                </div>
                <div className="carousel-item carousel-item-v2">
                  <img
                    src={carouselImg.b}
                    className="expertisePhoto d-block "
                    alt="..."
                  ></img>
                </div>
                <div className="carousel-item">
                  <img
                    src={carouselImg.c}
                    className="expertisePhoto d-block"
                    alt="..."
                  ></img>
                </div>
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon "
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon "
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="expertiseDetails">
          <h5 className="expertiseDetailsHeading">MACHINES</h5>
          <h1>We Deal In</h1>

          <div className="setPara">
            <div className="machineTitles">
              <h3
                onClick={() => {
                  setCarouselImg({ a: platform1, b: platform2, c: platform3 });
                }}
              >
                - Aeriel Platforms{" "}
              </h3>
              <h3
                onClick={() => {
                  setCarouselImg({ a: crane1, b: crane2, c: crane3 });
                }}
              >
                - Electric Cranes
              </h3>
              <h3
                onClick={() => {
                  setCarouselImg({ a: forklift2, b: forklift1, c: forklift3 });
                }}
              >
                - Forklifts
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="expertise2">
        <div className="allCards">
          <div className="card">
            <a href="https://sinoboom.eu/">
              <img style={{ width: "100%" }} src={platform1} alt="machine" />
            </a>
            <h1>Aerial Platforms</h1>
            <a href="https://sinoboom.eu/">
              <img className="cardLogo" src={logo8} alt="logo"></img>
            </a>
            <p>
              {" "}
              We are your premier source for a comprehensive range of Aerial
              Platforms, including Telescopic Booms, Articulating Booms,
              Vertical Lifts, and Scissor Platforms. Whether you're in the
              market for brand-new equipment or high-quality used options, we
              have you covered.
            </p>
          </div>
          <div className="card">
            <a href="https://www.jmgcranes.it/en/">
              <img style={{ width: "100%" }} src={crane2} alt="machine" />
            </a>
            <h1>Electric Cranes</h1>
            <a href="https://www.jmgcranes.it/en/">
              {" "}
              <img className="cardLogo" src={logo6} alt="logo"></img>
            </a>
            <p>
              Electric pick and carry cranes, renowned for their exceptional
              maneuverability and top-tier performance. These cranes are
              versatile and well-suited for a wide range of industrial sectors.{" "}
            </p>
          </div>
          <div className="card">
            <a href="https://www.konecranes.com/">
              {" "}
              <img style={{ width: "100%" }} src={forklift2} alt="machine" />
            </a>
            <h1>Forklifts</h1>
            <a href="https://www.konecranes.com/">
              {" "}
              <img className="cardLogo" src={logo5} alt="logo"></img>
            </a>
            <p>
              We specialize in the procurement and trade of top-tier forklifts,
              offering a wide range of both new and high-quality used models.
              Our extensive inventory comprises forklifts from various renowned
              brands and comes in a variety of sizes, ensuring that you find the
              perfect solution for your specific needs.
            </p>
          </div>
        </div>
      </div>

      <div className="brands">
        <h1>Other Brands We Deal In</h1>

        <div className="brandTable">
          <table>
            <tbody>
              <tr>
                <td>Lonking</td>
                <td>CombiLift</td>
                <td>Manitou</td>
              </tr>
              <tr>
                <td>Toyota</td>
                <td>Hangcha</td>
                <td>Linde</td>
              </tr>
              <tr>
                <td>JLG</td>
                <td>Hyster</td>
                <td>Raniero</td>
              </tr>
              <tr>
                <td>Kalmar</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
