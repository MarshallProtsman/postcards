import React from "react";
import "./Landing.css";
import ReactFullpage from "@fullpage/react-fullpage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Photos from "../../images.json";
import Card from "../Card";
import "firebase/database";

// // Inline CSS

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={"494BD911-8A8E42B4-8F69FCD9-30D8E5A8"}
    scrollingSpeed={700} /* Options here */
    navigation={true}
    callbacks="onLeave"
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state); // eslint-disable-line no-console

      if (state.callback === "onLeave") {
        if (state.direction === "down") {
          console.log("going down..." + state.origin.index);
        }
      }
      return (
        <ReactFullpage.Wrapper>
          <div className="section home-section" id="welcome">
            <div className="content-style">
              <div className="title">
                <p id="main-title-1">POSTCARDS</p>
                <p id="main-title-2">PROJECT</p>
                <br></br>
              </div>
              <p className="flex-left subtitle">
                In 1963 my grandfather founded the Stone Mountain Antique Car
                and Treasure Musuem, which would ultimately house over 4,000
                antiques and treasures. Throughout the 46 years it was open, it
                served as a physical time capsule of the past. Following my
                grandfathers death in 2018, I found these postcards
              </p>
              <div className="btm-cntr">
                <div
                  className="btm-cntr"
                  onClick={() => fullpageApi.moveSectionDown()}
                >
                  <p className="scroll">Scroll down</p>
                  <FontAwesomeIcon id="down-arrows" icon={faChevronDown} />
                  <p className="fas fa-sort-down" id="down-arrows"></p>
                </div>
              </div>
            </div>
          </div>
          {Photos.map((photo, index) => {
            return (
              <div
                id={`postcard${index}`}
                className={`section section${index} card-all`}
                key={index}
                style={{ backgroundColor: `${photo.bg_clr}` }}
              >
                <div
                  id="top-arrow"
                  className="flex-center"
                  onClick={() => fullpageApi.moveSectionUp()}
                >
                  <FontAwesomeIcon
                    className="nav-arrows"
                    icon={faChevronDown}
                  />
                </div>
                <Card
                  index={index}
                  src1={photo.image_src}
                  src2={photo.image_reverse}
                  alt={photo.alt}
                  text={photo.description}
                />
                <div className="flex-right">
                  <button
                    className="to-top btn-clear"
                    onClick={() => fullpageApi.moveTo()}
                  >
                    BACK TO TOP
                  </button>
                  <FontAwesomeIcon
                    id="bottom-arrow"
                    className="nav-arrows"
                    icon={faChevronDown}
                    onClick={() => fullpageApi.moveSectionDown()}
                  />
                </div>
              </div>
            );
          })}
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;
