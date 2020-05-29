import React from "react";
import "./Landing.css";
import ReactFullpage from "@fullpage/react-fullpage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Photos from "../../images.json";
import Card from "../Card";
import PaperBG from "../../images/assets/groovepaper/groovepaper.png";
import "firebase/database";

// Inline CSS
const CardStyle = {
  backgroundImage: `url(${PaperBG})`,
};

// const Top = {
//   display
// }

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
          <div className="section home-section" style={CardStyle} id="welcome">
            <div className="content-style">
              <div className="title">
                <p className="main-title">
                  Postcards<br></br>from<br></br>my<br></br>grandfather.
                </p>
                <br></br>
                <h4 className="flex-left subtitle">
                  The Stone Mountain Park Auto Museum
                </h4>
              </div>
              <p>
                A collection of antique postcards from my Grandfather's auto
                museum in Stone Mountain Park
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

          {/* Mapping over DB to render postcard slides */}
          {/* <IsLoaded /> */}
          {/* {console.log(state.lastEvent)} */}
          {Photos.map((photo, index) => {
            return (
              <div
                id={`postcard${index}`}
                className={`section section${index}`}
                style={CardStyle}
                key={index}
              >
                <Card
                  // onClick={logCurrentSection()}
                  index={index}
                  src1={photo.image_src}
                  src2={photo.image_reverse}
                  alt={photo.alt}
                  text={photo.description}
                />
                <div className="flex-right">
                  <button className="to-top btn-clear" onClick={() => fullpageApi.moveTo()}>
                    Go to Top
                  </button>
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
